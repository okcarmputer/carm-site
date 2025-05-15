const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const createAccountButton = document.getElementById("create-account-button");
const loginErrorMsg = document.getElementById("login-error-msg");

// Check if there is saved username and password in local storage
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");
if (savedUsername && savedPassword) {
  loginForm.username.value = savedUsername;
  loginForm.password.value = savedPassword;
}

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "user" && password === "web_dev") {
    alert("You have successfully logged in.");
    window.location.href = "home.html";
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});

createAccountButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Account created successfully!");
  loginForm.reset();
});
