<!-- A10 — Dyslexia Mode Logic -->
<!-- Cinematic Edition for Northwild Mooncrest -->
<!-- Creator: John Robert -->

/* A10 — Cinematic Dyslexia Mode Logic */

/* Toggle dyslexia mode */
function nwToggleDyslexia() {
  const body = document.body;

  // Flip state
  const current = body.classList.contains("dyslexia-mode");
  const newState = !current;

  // Apply mode
  body.classList.toggle("dyslexia-mode", newState);

  // Save state
  const saved = localStorage.getItem("nw-accessibility");
  let parsed = saved ? JSON.parse(saved) : {};

  parsed.dyslexia = newState;
  localStorage.setItem("nw-accessibility", JSON.stringify(parsed));

  // Announce change
  const region = document.getElementById("nw-live-region");
  if (region) {
    region.textContent = newState
      ? "Dyslexia-friendly mode enabled."
      : "Dyslexia-friendly mode disabled.";
  }
}

/* Restore dyslexia mode on load */
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("nw-accessibility");
  if (!saved) return;

  const parsed = JSON.parse(saved);

  if (parsed.dyslexia) {
    document.body.classList.add("dyslexia-mode");

    const region = document.getElementById("nw-live-region");
    if (region) {
      region.textContent = "Dyslexia-friendly mode restored.";
    }
  }
});
