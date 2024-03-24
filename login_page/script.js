const Home = document.querySelector("#home");
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    // Perform login validation/authentication here
    alert("Logined in");
  });

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    // Perform signup validation/registration here
    alert("Signup done");
  });
});

Home.addEventListener("click", function () {
  window.location.href = "../ecom.html";
});
