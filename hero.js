// -----------------------------------------------------------
// Northwild Mooncrest — Hero Module
// This file prevents 404 errors and provides a clean place
// for future hero interactions (animations, scroll effects, etc.)
// -----------------------------------------------------------

// Log to confirm the file loads correctly
console.log("hero.js loaded");

// Example: Fade-in effect for hero text (optional future use)
const heroSection = document.querySelector(".hero");

if (heroSection) {
    heroSection.style.opacity = 0;
    heroSection.style.transition = "opacity 1.5s ease";

    window.addEventListener("load", () => {
        heroSection.style.opacity = 1;
    });
}

// Example: Scroll-based parallax (optional future use)
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const heroImage = document.querySelector(".hero img");

    if (heroImage) {
        heroImage.style.transform = `translateY(${scrollY * 0.2}px)`;
    }
});
