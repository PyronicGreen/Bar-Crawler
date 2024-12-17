let postForm = document.getElementById("postForm");
if (postForm) postForm.addEventListener('submit', post);

function post(e) {
    e.preventDefault()

    const event = {
        barLocation: document.getElementById("location").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        details: document.getElementById("details").value,
    }

    window.alert("Your event has been created at " + event.barLocation + " !")
    console.log(event);
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
  