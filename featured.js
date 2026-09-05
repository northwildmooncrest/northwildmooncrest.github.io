// -----------------------------------------------------------
// Northwild Mooncrest — Featured Module
// This file prevents 404 errors and provides a clean place
// for future featured-grid interactions (hover effects,
// lazy loading, animations, dynamic content, etc.)
// -----------------------------------------------------------

// Log to confirm the file loads correctly
console.log("featured.js loaded");

// Example: Smooth hover zoom effect (optional future use)
const featuredImages = document.querySelectorAll(".featured-grid img");

featuredImages.forEach((img) => {
    img.style.transition = "transform 0.4s ease";

    img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.05)";
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    });
});

// Example: Lazy loading (optional future use)
const lazyImages = document.querySelectorAll("img[data-lazy]");

const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.lazy;
            img.removeAttribute("data-lazy");
            lazyObserver.unobserve(img);
        }
    });
});

lazyImages.forEach((img) => lazyObserver.observe(img));
