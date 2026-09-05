// -----------------------------------------------------------
// Northwild Mooncrest — Store Module
// This file prevents 404 errors and provides a clean place
// for future store interactions (cart UI, add-to-cart,
// checkout flow, product modal, etc.)
// -----------------------------------------------------------

// Log to confirm the file loads correctly
console.log("store.js loaded");

// Detect store/cart icon click
const storeIcon = document.querySelector('.utility-icon[href="store.html"]');

if (storeIcon) {
    storeIcon.addEventListener("click", () => {
        console.log("Store icon clicked");
    });
}

// Example: Cart drawer (future-ready)
const cartDrawer = document.querySelector(".cart-drawer");
const cartButton = document.querySelector(".cart-btn");

if (cartButton && cartDrawer) {
    cartButton.addEventListener("click", () => {
        const isOpen = cartDrawer.classList.contains("open");
        cartDrawer.classList.toggle("open", !isOpen);
    });
}

// Close cart drawer when clicking outside
document.addEventListener("click", (event) => {
    if (!event.target.closest(".cart-drawer") &&
        !event.target.closest(".cart-btn")) {
        if (cartDrawer) {
            cartDrawer.classList.remove("open");
        }
    }
});

// Example: Add-to-cart system (future-ready)
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("Item added to cart:", btn.dataset.item);
        // Future: push item to cart array, update UI, etc.
    });
});
