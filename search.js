// -----------------------------------------------------------
// Northwild Mooncrest — Search Module
// This file prevents 404 errors and provides a clean place
// for future search interactions (live search, filters,
// autocomplete, suggestions, etc.)
// -----------------------------------------------------------

// Log to confirm the file loads correctly
console.log("search.js loaded");

// Detect search icon click
const searchIcon = document.querySelector('.utility-icon[href="search.html"]');

if (searchIcon) {
    searchIcon.addEventListener("click", () => {
        console.log("Search icon clicked");
    });
}

// Example: Auto-focus search input on page load
const searchInput = document.querySelector("#search-input");

if (searchInput) {
    window.addEventListener("load", () => {
        searchInput.focus();
    });
}

// Example: Simple live filter (future-ready)
const searchItems = document.querySelectorAll(".search-item");

if (searchInput && searchItems.length > 0) {
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();

        searchItems.forEach((item) => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(query) ? "block" : "none";
        });
    });
}
