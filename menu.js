// -----------------------------------------------------------
// Northwild Mooncrest — Menu Module
// This file prevents 404 errors and provides a clean place
// for future menu interactions (dropdowns, mobile nav,
// animations, accessibility, etc.)
// -----------------------------------------------------------

// Log to confirm the file loads correctly
console.log("menu.js loaded");

// Dropdown menu logic
const menuButton = document.querySelector(".menu-btn");
const menuDropdown = document.querySelector(".menu-dropdown");

if (menuButton && menuDropdown) {
    menuButton.addEventListener("click", () => {
        const isOpen = menuDropdown.style.display === "block";
        menuDropdown.style.display = isOpen ? "none" : "block";
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

// Future: Mobile menu toggle
const mobileMenuButton = document.querySelector(".mobile-menu-btn");
const mobileMenuPanel = document.querySelector(".mobile-menu-panel");

if (mobileMenuButton && mobileMenuPanel) {
    mobileMenuButton.addEventListener("click", () => {
        const isOpen = mobileMenuPanel.classList.contains("open");
        mobileMenuPanel.classList.toggle("open", !isOpen);
    });
}

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
    if (!event.target.closest(".mobile-menu-panel") &&
        !event.target.closest(".mobile-menu-btn")) {
        if (mobileMenuPanel) {
            mobileMenuPanel.classList.remove("open");
        }
    }
});
