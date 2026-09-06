// dropdown.js — safe initialization after header is injected
window.addEventListener("load", () => {

  // Buttons
  const searchBtn = document.querySelector(".search-btn");
  const accountBtn = document.querySelector(".account-btn");
  const storeBtn = document.querySelector(".store-btn");
  const menuBtn = document.querySelector(".menu-btn");

  // Panels
  const searchPanel = document.querySelector(".search-dropdown");
  const accountPanel = document.querySelector(".account-dropdown");
  const storePanel = document.querySelector(".store-dropdown");
  const menuPanel = document.querySelector(".menu-dropdown");

  // Helper: close all panels
  function closeAll() {
    searchPanel?.classList.remove("open");
    accountPanel?.classList.remove("open");
    storePanel?.classList.remove("open");
    menuPanel?.classList.remove("open");
  }

  // Toggle functions
  searchBtn?.addEventListener("click", () => {
    closeAll();
    searchPanel?.classList.toggle("open");
  });

  accountBtn?.addEventListener("click", () => {
    closeAll();
    accountPanel?.classList.toggle("open");
  });

  storeBtn?.addEventListener("click", () => {
    closeAll();
    storePanel?.classList.toggle("open");
  });

  menuBtn?.addEventListener("click", () => {
    closeAll();
    menuPanel?.classList.toggle("open");
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    const isButton = e.target.closest(
      ".search-btn, .account-btn, .store-btn, .menu-btn"
    );
    const isPanel = e.target.closest(
      ".search-dropdown, .account-dropdown, .store-dropdown, .menu-dropdown"
    );

    if (!isButton && !isPanel) {
      closeAll();
    }
  });

});
