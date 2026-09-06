/* B3 — Cinematic Hero Banner Logic */
/* Updated for Northwild Mooncrest global-brand design */

/* Reveal banner when page loads */
document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".hero-banner");
  if (banner) {
    banner.classList.add("hero-banner-visible");
  }
});

/* Fade banner slightly on scroll for cinematic depth */
window.addEventListener("scroll", () => {
  const banner = document.querySelector(".hero-banner");
  if (!banner) return;

  const scrollY = window.scrollY;
  const fadeAmount = Math.min(scrollY / 600, 0.35);

  banner.style.opacity = `${1 - fadeAmount}`;
});

/* Smooth scroll for CTA buttons */
const ctaButtons = document.querySelectorAll(".hero-banner-btn");

ctaButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = btn.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
