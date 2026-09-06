/* -----------------------------------------------------------
   Cart Page — Load Cart Items, Update Totals, Remove Items
   Clean, simple, modular cart logic for cart.html
----------------------------------------------------------- */

// Load cart from localStorage
function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.querySelector(".cart-items");
    const cartTotalElement = document.querySelector(".cart-total-amount");

    cartItemsContainer.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-info">
                <h3>${item.title}</h3>
                <p>${item.description || ""}</p>
            </div>
            <div class="cart-price">$${item.price.toFixed(2)}</div>
            <button class="remove-btn" data-index="${index}">Remove</button>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    cartTotalElement.textContent = `$${total.toFixed(2)}`;

    attachRemoveEvents();
}

// Remove item from cart
function attachRemoveEvents() {
    const removeButtons = document.querySelectorAll(".remove-btn");

    removeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const index = button.getAttribute("data-index");
            removeFromCart(index);
        });
    });
}

function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// Initialize cart on page load
document.addEventListener("DOMContentLoaded", loadCart);
