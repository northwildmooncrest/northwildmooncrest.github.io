/* J3 — hero.js */
/* Reveal animation for the header and hero sections */

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const hero = document.querySelector(".hero");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            entry.target.classList.contains("header")
              ? "header-visible"
              : "hero-visible"
          );
        }
      });
    },
    { threshold: 0.2 }
  );

  if (header) observer.observe(header);
  if (hero) observer.observe(hero);
});
