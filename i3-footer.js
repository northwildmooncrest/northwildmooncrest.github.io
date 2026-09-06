/* I3 — footer.js */
/* Reveal animation for the Northwild Mooncrest footer */

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer");
  if (!footer) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          footer.classList.add("footer-visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(footer);
});
