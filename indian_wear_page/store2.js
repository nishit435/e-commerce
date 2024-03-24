import products from "./data2.js";
function createProductCards() {
  const productsContainers = document.querySelectorAll(".pro");

  productsContainers.forEach((productContainer, index) => {
    productContainer.addEventListener("click", function () {
      const product = products[index];
      alert(
        `Product: ${product.name}\nDescription: ${product.description}\nPrice: $${product.price}`
      );
    });
  });
}
document.addEventListener("DOMContentLoaded", createProductCards);
