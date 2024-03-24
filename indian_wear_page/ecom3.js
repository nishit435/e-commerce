const Virat = document.querySelector("#Virat");
const Home = document.querySelector("#Home");
const login = document.querySelector("#login");
const cart = document.querySelector("#cart");

Virat.addEventListener("click", function () {
  window.location.href = "indianwear1.html";
});
console.log(Home);

Home.addEventListener("click", function () {
  window.location.href = "../ecom.html";
});

login.addEventListener("click", function () {
  window.location.href = "\\login_page/login.html";
});

cart.addEventListener("click", function () {
  window.location.href = "\\cart/cart.html";
});
