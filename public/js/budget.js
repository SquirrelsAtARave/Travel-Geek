
const getBudget = async () => {
  const response = await fetch('/api/users', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    
  });
  return response.budget_amount
}

const budget = getBudget();
console.log ("budget: ", budget);

const submitBudget = async () => {
    console.log("submit budget function");
    const budget = document.getElementById("budget_input").value 
    console.log(budget);



      const response = await fetch('/api/users/budget', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#submit_budget').addEventListener('click', submitBudget);
  