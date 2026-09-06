<!-- A14 — Reduced Cognitive Load Logic -->
<!-- Cinematic Edition for Northwild Mooncrest -->
<!-- Creator: John Robert -->

/* A14 — Cinematic Reduced Cognitive Load Logic */

/* Toggle reduced cognitive load mode */
function nwToggleReducedCognitiveLoad() {
  const body = document.body;

  const current = body.classList.contains("reduced-cognitive-load-mode");
  const newState = !current;

  body.classList.toggle("reduced-cognitive-load-mode", newState);

  // Save state
  const saved = localStorage.getItem("nw-accessibility");
  let parsed = saved ? JSON.parse(saved) : {};

  parsed.reducedCognitiveLoad = newState;
  localStorage.setItem("nw-accessibility", JSON.stringify(parsed));

  // Announce change
  const region = document.getElementById("nw-live-region");
  if (region) {
    region.textContent = newState
      ? "Reduced cognitive load mode enabled."
      : "Reduced cognitive load mode disabled.";
  }
}

/* Restore reduced cognitive load mode on load */
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("nw-accessibility");
  if (!saved) return;

  const parsed = JSON.parse(saved);

  if (parsed.reducedCognitiveLoad) {
    document.body.classList.add("reduced-cognitive-load-mode");

    const region = document.getElementById("nw-live-region");
    if (region) {
      region.textContent = "Reduced cognitive load mode restored.";
    }
  }
});
