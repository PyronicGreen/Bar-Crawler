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