<!-- A16 — Simplified UI Logic -->
<!-- Cinematic Edition for Northwild Mooncrest -->
<!-- Creator: John Robert -->

/* A16 — Cinematic Simplified UI Logic */

/* Toggle simplified UI mode */
function nwToggleSimplifiedUI() {
  const body = document.body;

  const current = body.classList.contains("simplified-ui-mode");
  const newState = !current;

  body.classList.toggle("simplified-ui-mode", newState);

  // Save state
  const saved = localStorage.getItem("nw-accessibility");
  let parsed = saved ? JSON.parse(saved) : {};

  parsed.simplifiedUI = newState;
  localStorage.setItem("nw-accessibility", JSON.stringify(parsed));

  // Announce change
  const region = document.getElementById("nw-live-region");
  if (region) {
    region.textContent = newState
      ? "Simplified interface mode enabled."
      : "Simplified interface mode disabled.";
  }
}

/* Restore simplified UI mode on load */
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("nw-accessibility");
  if (!saved) return;

  const parsed = JSON.parse(saved);

  if (parsed.simplifiedUI) {
    document.body.classList.add("simplified-ui-mode");

    const region = document.getElementById("nw-live-region");
    if (region) {
      region.textContent = "Simplified interface mode restored.";
    }
  }
});
