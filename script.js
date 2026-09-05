// ------------------------------
// Explore Dropdown Toggle
// ------------------------------
const exploreBtn = document.querySelector('.dropdown-btn');
const exploreMenu = document.querySelector('.dropdown');

if (exploreBtn && exploreMenu) {
    exploreBtn.addEventListener('click', () => {
        exploreMenu.classList.toggle('active');
    });
}

// ------------------------------
// Account Dropdown Toggle
// ------------------------------
const accountBtn = document.querySelector('.account-btn');
const accountMenu = document.querySelector('.account-dropdown');

if (accountBtn && accountMenu) {
    accountBtn.addEventListener('click', () => {
        accountMenu.classList.toggle('active');
    });
}
