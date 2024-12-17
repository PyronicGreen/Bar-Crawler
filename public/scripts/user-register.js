let regForm = document.getElementById("regForm");
if (regForm) regForm.addEventListener('submit', register);

function register(e) {
    e.preventDefault()

    const user = {
        firstName: document.getElementById("firstname").value,
        lastName: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        bartender: document.getElementById("bartender").value,
        no_Bartender: document.getElementById("no_bartender").value,
    }

    window.alert("Welcome to Bar-crawler " + user.firstName + " !")
    console.log(user);
}

async function fetchData(route = '', data = {}, methodType = 'POST') { 
    const response = await fetch(`http://localhost:3000${route}`, {
      method: methodType, // *POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
  
    if (response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  }
  