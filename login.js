document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    

    if (username === "user" && password === "pass") {
    
        window.location.href = "deal.html";
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password.";
    }
});
