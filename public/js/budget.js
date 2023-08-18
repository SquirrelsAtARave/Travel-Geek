const submitBudget = async () => {
    console.log("sumit budget function");
    const budget = document.getElementById("budget_input").value 
    console.log(budget);



      const response = await fetch('/api/users/ogout', {
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
  