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