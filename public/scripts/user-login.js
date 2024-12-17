let regForm = document.getElementById("loginForm");
if (loginForm) loginForm.addEventListener('submit', login);

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
  

function login(e) {
    e.preventDefault()

    const user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    }

    window.alert("Welcome back to Bar-Crawler!")
    console.log(user);
}