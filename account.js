// -----------------------------------------------------------
// Northwild Mooncrest — Account Module
// This file prevents 404 errors and provides a clean place
// for future account interactions (login modal, profile menu,
// authentication UI, dropdowns, etc.)
// -----------------------------------------------------------

// Log to confirm the file loads correctly
console.log("account.js loaded");

// Detect account icon click
const accountIcon = document.querySelector('.utility-icon[href="account.html"]');

if (accountIcon) {
    accountIcon.addEventListener("click", () => {
        console.log("Account icon clicked");
    });
}

// Example: Account dropdown (future-ready)
const accountMenu = document.querySelector(".account-menu");
const accountButton = document.querySelector(".account-btn");

if (accountButton && accountMenu) {
    accountButton.addEventListener("click", () => {
        const isOpen = accountMenu.style.display === "block";
        accountMenu.style.display = isOpen ? "none" : "block";
    });
}

// Close account menu when clicking outside
document.addEventListener("click", (event) => {
    if (!event.target.closest(".account-menu") &&
        !event.target.closest(".account-btn")) {
        if (accountMenu) {
            accountMenu.style.display = "none";
        }
    }
});
