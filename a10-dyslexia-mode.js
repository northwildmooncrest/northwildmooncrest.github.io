/* A10 — Dyslexia Mode Logic */
/* Updated for Northwild Mooncrest cinematic global-brand design */

/* Toggle dyslexia mode */
function toggleDyslexiaMode() {
  document.body.classList.toggle("dyslexia-mode");

  const enabled = document.body.classList.contains("dyslexia-mode");
  localStorage.setItem("dyslexiaMode", enabled);

  announceDyslexiaChange(enabled);
}

/* Screenreader-friendly announcement */
function announceDyslexiaChange(enabled) {
  const msg = enabled
    ? "Dyslexia-friendly mode enabled."
    : "Dyslexia-friendly mode disabled.";

  const liveRegion = document.getElementById("dyslexia-live-region");

  if (liveRegion) {
    liveRegion.textContent = msg;
  }
}

/* Restore saved setting on load */
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("dyslexiaMode");

  if (saved === "true") {
    document.body.classList.add("dyslexia-mode");
    announceDyslexiaChange(true);
  }
});

/* Create ARIA live region if missing */
(function ensureLiveRegion() {
  if (!document.getElementById("dyslexia-live-region")) {
    const region = document.createElement("div");
    region.id = "dyslexia-live-region";
    region.setAttribute("aria-live", "polite");
    region.style.position = "absolute";
    region.style.left = "-9999px";
    region.style.top = "auto";
    region.style.width = "1px";
    region.style.height = "1px";
    region.style.overflow = "hidden";
    document.body.appendChild(region);
  }
})();
