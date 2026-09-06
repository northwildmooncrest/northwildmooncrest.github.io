/* I6 — footer-global.js */
/* Reveal animation for the matte global footer system */

document.addEventListener("DOMContentLoaded", () => {
  const footerGlobal = document.querySelector(".footer-global");
  if (!footerGlobal) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          footerGlobal.classList.add("footer-global-visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(footerGlobal);
});
