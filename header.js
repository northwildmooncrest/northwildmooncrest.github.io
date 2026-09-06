// ============================
// NORTHWILD MOONCREST — HEADER JS
// Dropdowns + Panels Controller
// ============================

document.addEventListener('DOMContentLoaded', () => {

    // MENU
    const menu = document.querySelector('.menu');
    const menuBtn = document.querySelector('.menu-btn');

    // PANELS
    const searchBtn = document.querySelector('.search-btn');
    const accountBtn = document.querySelector('.account-btn');
    const storeBtn = document.querySelector('.store-btn');

    const searchPanel = document.querySelector('.search-dropdown');
    const accountPanel = document.querySelector('.account-dropdown');
    const storePanel = document.querySelector('.store-dropdown');

    const panels = [searchPanel, accountPanel, storePanel];

    // Close all panels
    function closePanels() {
        panels.forEach(panel => {
            if (panel) panel.classList.remove('open');
        });
    }

    // Close menu
    function closeMenu() {
        if (menu) menu.classList.remove('open');
    }

    // MENU BUTTON
    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            const isOpen = menu.classList.contains('open');
            closePanels();
            if (isOpen) {
                menu.classList.remove('open');
            } else {
                menu.classList.add('open');
            }
        });
    }

    // SEARCH BUTTON
    if (searchBtn && searchPanel) {
        searchBtn.addEventListener('click', () => {
            const isOpen = searchPanel.classList.contains('open');
            closePanels();
            closeMenu();
            if (!isOpen) searchPanel.classList.add('open');
        });
    }

    // ACCOUNT BUTTON
    if (accountBtn && accountPanel) {
        accountBtn.addEventListener('click', () => {
            const isOpen = accountPanel.classList.contains('open');
            closePanels();
            closeMenu();
            if (!isOpen) accountPanel.classList.add('open');
        });
    }

    // STORE BUTTON
    if (storeBtn && storePanel) {
        storeBtn.addEventListener('click', () => {
            const isOpen = storePanel.classList.contains('open');
            closePanels();
            closeMenu();
            if (!isOpen) storePanel.classList.add('open');
        });
    }

    // CLICK OUTSIDE TO CLOSE EVERYTHING
    document.addEventListener('click', (e) => {
        const header = document.querySelector('.site-header');
        if (!header.contains(e.target)) {
            closePanels();
            closeMenu();
        }
    });
});
