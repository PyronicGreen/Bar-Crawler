let regForm = document.getElementById("loginForm");
if (loginForm) loginForm.addEventListener('submit', login);

function login(e) {
    e.preventDefault()

    const user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    }

    window.alert("Welcome back to Bar-Crawler!")
    console.log(user);
}