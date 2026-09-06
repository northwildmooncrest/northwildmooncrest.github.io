/* B3 — banner.js */
/* Interactive behavior for the cinematic hero banner */

document.addEventListener("DOMContentLoaded", () => {
  const cta = document.querySelector(".banner-cta");

  // Smooth scroll to target section
  if (cta) {
    cta.addEventListener("click", () => {
      const target = cta.getAttribute("data-scroll-target");
      const el = document.querySelector(target);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  }

  // Fade-in animation on load
  const bannerInner = document.querySelector(".banner-inner");
  if (bannerInner) {
    bannerInner.style.opacity = 0;
    bannerInner.style.transform = "translateY(20px)";

    setTimeout(() => {
      bannerInner.style.transition = "opacity 1.2s ease, transform 1.2s ease";
      bannerInner.style.opacity = 1;
      bannerInner.style.transform = "translateY(0)";
    }, 150);
  }
});
