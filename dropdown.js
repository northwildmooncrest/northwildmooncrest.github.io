// -----------------------------------------------------------
// Dropdown Controls — Search, Account, Store, Menu
// Clean, simple, modular toggle logic for all header dropdowns.
// -----------------------------------------------------------

// Utility function to toggle a panel
function togglePanel(selector) {
    const panel = document.querySelector(selector);
    const isOpen = panel.style.display === "block";
    closeAllPanels();
    panel.style.display = isOpen ? "none" : "block";
}

// Close all dropdown panels
function closeAllPanels() {
    document.querySelectorAll(".panel, .menu-dropdown").forEach(panel => {
        panel.style.display = "none";
    });
}

// SEARCH DROPDOWN
const searchBtn = document.querySelector(".search-btn");
if (searchBtn) {
    searchBtn.addEventListener("click", () => {
        togglePanel(".search-dropdown");
    });
}

// ACCOUNT DROPDOWN
const accountBtn = document.querySelector(".account-btn");
if (accountBtn) {
    accountBtn.addEventListener("click", () => {
        togglePanel(".account-dropdown");
    });
}

// STORE DROPDOWN
const storeBtn = document.querySelector(".store-btn");
if (storeBtn) {
    storeBtn.addEventListener("click", () => {
        togglePanel(".store-dropdown");
    });
}

// MENU DROPDOWN
const menuBtn = document.querySelector(".menu-btn");
if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        togglePanel(".menu-dropdown");
    });
}

// Close dropdowns when clicking outside
document.addEventListener("click", (event) => {
    if (
        !event.target.closest(".panel") &&
        !event.target.closest(".menu-dropdown") &&
        !event.target.closest(".utility-icon") &&
        !event.target.closest(".menu-btn")
    ) {
        closeAllPanels();
    }
});
