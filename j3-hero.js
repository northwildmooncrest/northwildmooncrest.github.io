<!-- J3 — Cinematic Hero Motion Layer -->
<!-- Cinematic Edition for Northwild Mooncrest -->
<!-- Creator: John Robert -->

/* J3 — Cinematic Hero Motion Layer */

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".nw-hero");
  const orbitRing = document.querySelector(".nw-hero-orbit-ring");
  const orbitCore = document.querySelector(".nw-hero-orbit-core");

  /* Subtle parallax for the moonlit backdrop */
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;

    hero.style.transform = `translate(${x}px, ${y}px)`;
  });

  /* Soft cinematic pulse for orbit elements */
  let pulse = 0;
  function animateOrbit() {
    pulse += 0.02;

    const ringScale = 1 + Math.sin(pulse) * 0.03;
    const coreScale = 1 + Math.sin(pulse) * 0.05;

    orbitRing.style.transform = `scale(${ringScale})`;
    orbitCore.style.transform = `scale(${coreScale})`;

    requestAnimationFrame(animateOrbit);
  }

  animateOrbit();
});
