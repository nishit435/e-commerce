const RednBlack = document.querySelector("#RednBlack");
const Home = document.querySelector("#Home");
const pro = document.getElementsByClassName("pro");
const login = document.querySelector("#login");
const cart = document.querySelector("#cart");

console.log(pro);

// for (let i = 0; i < pro.length; i++) {
//   pro[i].addEventListener("click", function() {
//       window.location.href = "tshirt1.html";
//   });
// }
RednBlack.addEventListener("click", function () {
  window.location.href = "tshirt1.html";
});
Home.addEventListener("click", function () {
  window.location.href = "../ecom.html";
});
login.addEventListener("click", function () {
  window.location.href = "\\login_page/login.html";
});

cart.addEventListener("click", function () {
  window.location.href = "\\cart/cart.html";
});
