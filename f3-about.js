/* F3 — about.js */
/* Reveal animation for the About section */

document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about");
  if (!aboutSection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("about-visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(aboutSection);
});
