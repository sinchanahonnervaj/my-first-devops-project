document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop page refresh

    // Get values
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = document.getElementById("message");

    // Clear previous message
    message.innerText = "";

    // Validation
    if (username === "" || email === "" || password === "") {
        message.style.color = "red";
        message.innerText = "All fields are required!";
        return;
    }

    // Email check
    if (!email.includes("@") || !email.includes(".")) {
        message.style.color = "red";
        message.innerText = "Enter a valid email!";
        return;
    }

    // Password length check
    if (password.length < 6) {
        message.style.color = "red";
        message.innerText = "Password must be at least 6 characters!";
        return;
    }

    // Success
    message.style.color = "green";
    message.innerText = "Login successful!";
});
localStorage.setItem("username", username);
let user = localStorage.getItem("username");
if (user) {
    document.getElementById("welcome").innerText = "Welcome " + user;
}

function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}
document.getElementById("showPassword").addEventListener("change", function() {
    let passwordField = document.getElementById("password");

    if (this.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});