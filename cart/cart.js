const Home = document.querySelector("#home");
const cartItems = [
  {
    image: "\\photos/photo-1594032194509-0056023973b2.avif",
    name: "Wild Bright",
    price: 25,
  },
  {
    image: "\\photos/8.webp",
    name: "Virat's Favourite Black Kurta",
    price: 59,
  },
];
Home.addEventListener("click", function () {
  window.location.href = "../ecom.html";
});
document.addEventListener("DOMContentLoaded", function () {
  const cartItemsContainer = document.getElementById("cart-items");
  const checkoutBtn = document.getElementById("checkout-btn");

  // Sample array of cart items (replace with your actual data)

  // Function to display cart items
  function displayCartItems() {
    cartItemsContainer.innerHTML = ""; // Clear previous items
    cartItems.forEach((item) => {
      const cartItemDiv = document.createElement("div");
      cartItemDiv.classList.add("cart-item");
      cartItemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <span class="cart-item-name">${item.name}</span>
                <span class="cart-item-price">$${item.price.toFixed(2)}</span>
            `;
      cartItemsContainer.appendChild(cartItemDiv);
    });
  }

  // Display cart items when the page loads
  displayCartItems();

  // Event listener for checkout button
  checkoutBtn.addEventListener("click", function () {
    // Perform checkout process (redirect to checkout page, etc.)
    alert("Checkout complete");
  });
});

// import products from "./data1.js";

// // Sample array of cart items (replace with your actual data)
// let cartItems = [];

// function createProductCards() {
//   const productsContainers = document.querySelectorAll(".pro");

//   productsContainers.forEach((productContainer, index) => {
//     productContainer.addEventListener("click", function () {
//       const product = products[index];
//       // Add the clicked product to the cartItems array
//       cartItems.push(product);
//       // Call the function to display cart items after adding the product
//       displayCartItems();
//     });
//   });
// }

// document.addEventListener("DOMContentLoaded", createProductCards);

// document.addEventListener("DOMContentLoaded", function () {
//   const cartItemsContainer = document.getElementById("cart-items");
//   const checkoutBtn = document.getElementById("checkout-btn");

//   // Function to display cart items
//   function displayCartItems() {
//     cartItemsContainer.innerHTML = ""; // Clear previous items
//     cartItems.forEach((item) => {
//       const cartItemDiv = document.createElement("div");
//       cartItemDiv.classList.add("cart-item");
//       cartItemDiv.innerHTML = `
//                 <img src="${item.image}" alt="${item.name}">
//                 <span class="cart-item-name">${item.name}</span>
//                 <span class="cart-item-price">$${item.price.toFixed(2)}</span>
//             `;
//       cartItemsContainer.appendChild(cartItemDiv);
//     });
//   }

//   // Display cart items when the page loads
//   displayCartItems();

//   // Event listener for checkout button
//   checkoutBtn.addEventListener("click", function () {
//     // Perform checkout process (redirect to checkout page, etc.)
//     alert("Checkout complete");
//   });
// });
