let budget = 0;
let endingBudget = 0;
const budgetHeader = document.getElementById("starting-budget-header");
const getBudget = async () => {
  try {
    const response = await fetch("/api/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    return data.budget_amount;
  } catch (error) {
    console.error("Error fetching budget:", error);
    return null; // or some default value
  }
};

getBudget()
  .then((budgetData) => {
    budget = budgetData;
    console.log("budget:", budget);
    const endingBudgetHeader = document.getElementById("ending_budget_header");
    const totalExpensesHeader = document.getElementById("total_expenses_header")
    budgetHeader.textContent = `Your Starting Budget Is: $ ${budget}`;
    let expensesTotal = 0;
    let expenses = document.querySelectorAll(".expense_amount");
    for (let i=0; i< expenses.length; i++){
      expensesTotal+= parseInt(expenses[i].innerHTML);
    }

   
    endingBudget = budget - expensesTotal;
    totalExpensesHeader.textContent = `Your total expenses for this trip are $ ${expensesTotal}`;
    endingBudgetHeader.textContent = `Your Ending Budget Is: $ ${endingBudget}`;
  
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const submitBudget = async () => {
  console.log("submit budget function");
  const budget = document.getElementById("budget_input").value;
  console.log(budget);

  const response = await fetch("/api/users/budget", {
    method: "PUT",
    body: JSON.stringify({ budget_amount: budget }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    budgetHeader.textContent = `Your Starting Budget Is: $ ${budget}`;
    document.location.reload();
    // document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

const submitExpense = async () => {
  let category = document.getElementById("category_dropdown").value;
  let description = document.getElementById("expense_description").value;
  let amount = parseInt(document.getElementById("expense_amount").value);
  if (category && description && amount) {
    const response = await fetch("/api/expense", {
      method: "POST",
      body: JSON.stringify({
        category,
        description,
        amount,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

const deleteExpense = async (event) => {
  console.log("in delete listener: ");
  if (event.target.classList.contains("remove_button")) {

    const alert = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
  });


    let id = parseInt(event.target.id);
    if (alert.isConfirmed) {
      console.log("in delete listener: ", id);
      const response = await fetch("/api/expense", {
        method: "DELETE",
        body: JSON.stringify({
          id: id,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  
  }
};

document
  .querySelector("#submit_budget")
  .addEventListener("click", submitBudget);

document
  .getElementById("submit_expense")
  .addEventListener("click", submitExpense);
document
  .getElementById("expenses_table")
  .addEventListener("click", deleteExpense);
