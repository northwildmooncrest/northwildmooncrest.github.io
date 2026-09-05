// -----------------------------------------------------------
// Northwild Mooncrest — Footer Module
// This file prevents 404 errors and provides a clean place
// for future footer interactions (dynamic year, animations,
// legal notices, cookie banner triggers, etc.)
// -----------------------------------------------------------

// Log to confirm the file loads correctly
console.log("footer.js loaded");

// Auto-update footer year (optional future use)
const yearSpan = document.querySelector(".footer-year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Example: Smooth fade-in footer on scroll
const footer = document.querySelector("footer");

if (footer) {
    footer.style.opacity = 0;
    footer.style.transition = "opacity 1.2s ease";

    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                footer.style.opacity = 1;
            }
        });
    });

    footerObserver.observe(footer);
}
