let budget = 0;
const budgetHeader = document.getElementById("starting-budget-header")
const getBudget = async () => {
  try {
    const response = await fetch('/api/users', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.json();
    return data.budget_amount;
  } catch (error) {
    console.error('Error fetching budget:', error);
    return null; // or some default value
  }
};

getBudget()
  .then(budgetData => {
    budget = budgetData;
    console.log('budget:', budget);
    budgetHeader .textContent = `Your Starting Budget Is: $ ${budget}` })
  .catch(error => {
    console.error('Error:', error);
  });

const submitBudget = async () => {
    console.log("submit budget function");
    const budget = document.getElementById("budget_input").value 
    console.log(budget);


      const response = await fetch('/api/users/budget', {
      method: 'PUT',
      body: JSON.stringify({budget_amount: budget}),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      budgetHeader.textContent = `Your Starting Budget Is: $ ${budget}`
      // document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };

  const submitExpense = async () => {
    let category = document.getElementById('categoroy_dropdown').value;
    let description = document.getElementById('expense_description').value;
    let amount = parseInt(document.getElementById('expense_amount').value);

    const response = await fetch('/api/expense', {
      method: "POST",
      body: JSON.stringify({
        category, 
        description, 
        amount
      }),
      headers: { "Content-Type": "application/json" }
    
    })

    if(response.ok){
      document.location.reload();
    }
    else{
      alert (reponse.statusText);
    }
  }

  const deleteExpense = async(event) => {
    console.log ("in delete listener: ");
    if (event.target.classList.contains("remove_button")){
      let id = parseInt(event.target.id)
      console.log ("in delete listener: ", id);
      const response = await fetch('/api/expense', {
        method: "DELETE",
        body: JSON.stringify({
        id: id
        }),
        headers: {"Content-Type":"application/json"}
      })
      if (response.ok){
        document.location.reload();
      }
      else {
        alert(response.statusText);
      }

    }
  }
  
  document.querySelector('#submit_budget').addEventListener('click', submitBudget);
  
  document.getElementById("submit_expense").addEventListener('click', submitExpense);
  document.getElementById("expenses_table").addEventListener('click', deleteExpense);

