const TShirts = document.getElementById("TShirts");
const IndianWear = document.querySelector("#IndianWear");
const Home = document.querySelector("#Home");
const login = document.querySelector("#login");
const cart = document.querySelector("#cart");

TShirts.addEventListener("click", function () {
  window.location.href = "tshirt_page\\ecom2.html";
});

IndianWear.addEventListener("click", function () {
  window.location.href = "indian_wear_page\\ecom3.html";
});

Home.addEventListener("click", function () {
  window.location.href = "../ecom.html";
});

login.addEventListener("click", function () {
  window.location.href = "login_page\\login.html";
});

cart.addEventListener("click", function () {
  window.location.href = "cart\\cart.html";
});
