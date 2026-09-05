// -----------------------------------------------------------
// Northwild Mooncrest — Header Module
// This file prevents 404 errors and provides a clean place
// for future header interactions (dropdowns, animations, etc.)
// -----------------------------------------------------------

// Log to confirm the file loads correctly
console.log("header.js loaded");

// Example: Dropdown toggle logic (optional future use)
const menuButton = document.querySelector(".menu-btn");
const menuDropdown = document.querySelector(".menu-dropdown");

if (menuButton && menuDropdown) {
    menuButton.addEventListener("click", () => {
        menuDropdown.style.display =
            menuDropdown.style.display === "block" ? "none" : "block";
    });
}

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (!event.target.closest(".menu")) {
        if (menuDropdown) {
            menuDropdown.style.display = "none";
        }
    }
});
