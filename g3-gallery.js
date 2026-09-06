/* G3 — gallery.js */
/* Reveal animation + lazy loading for the Northwild Mooncrest Gallery */

document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item img");

  /* Lazy loading */
  galleryItems.forEach((img) => {
    const src = img.getAttribute("src");
    img.setAttribute("data-src", src);
    img.removeAttribute("src");
  });

  const lazyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add("gallery-loaded");
          lazyObserver.unobserve(img);
        }
      });
    },
    { threshold: 0.1 }
  );

  galleryItems.forEach((img) => lazyObserver.observe(img));

  /* Reveal animation */
  const gallerySection = document.querySelector(".gallery");
  if (!gallerySection) return;

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gallerySection.classList.add("gallery-visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  revealObserver.observe(gallerySection);
});
