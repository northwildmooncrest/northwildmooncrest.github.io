/* E3 — journeys.js */
/* Interactive behavior for the cinematic journeys section */

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".journey-card");

  // Reveal animation on scroll
  const revealOnScroll = () => {
    const triggerPoint = window.innerHeight * 0.85;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < triggerPoint) {
        card.classList.add("journey-visible");
      }
    });
  };

  // Initial check + scroll listener
  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);

  // Subtle hover lift sound (optional future enhancement)
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transition = "transform 0.35s ease";
    });
  });
});
