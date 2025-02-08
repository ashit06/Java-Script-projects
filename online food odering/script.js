// Cart functionality
let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");
  cartItems.innerHTML = "";
  total = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  totalElement.textContent = total.toFixed(2);
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert(`Thank you for your order! Total: $${total.toFixed(2)}`);
    cart = [];
    updateCart();
  }
}

// Search functionality
function searchFood() {
  const searchTerm = document.getElementById("search").value.toLowerCase();
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    const name = item.querySelector("h3").textContent.toLowerCase();
    if (name.includes(searchTerm)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// Toggle between Sign Up and Sign In
function toggleForm() {
  const form = document.getElementById("authForm");
  const button = form.querySelector("button");
  const toggleText = form.querySelector("p");

  if (button.textContent === "Sign In") {
    button.textContent = "Sign Up";
    toggleText.innerHTML = 'Already have an account? <a href="#" onclick="toggleForm()">Sign In</a>';
  } else {
    button.textContent = "Sign In";
    toggleText.innerHTML = 'Don\'t have an account? <a href="#" onclick="toggleForm()">Sign Up</a>';
  }
}