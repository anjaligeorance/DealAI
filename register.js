document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("new-username").value;
    const password = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;


    if (password === confirmPassword) {
        alert("Registration successful!");
        window.location.href = "login.html";
    } else {
        document.getElementById("register-error-message").textContent = "Passwords do not match.";
    }
});
