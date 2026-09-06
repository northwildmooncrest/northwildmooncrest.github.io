/* A12 — Motion Reduction Logic */
/* World of Northwild Mooncrest */
/* Creator: John Robert */

/* Toggle motion reduction mode */
function nwToggleMotionReduction() {
  const body = document.body;

  const current = body.classList.contains("motion-reduction-mode");
  const newState = !current;

  body.classList.toggle("motion-reduction-mode", newState);

  // Save state
  const saved = localStorage.getItem("nw-accessibility");
  let parsed = saved ? JSON.parse(saved) : {};

  parsed.motionReduction = newState;
  localStorage.setItem("nw-accessibility", JSON.stringify(parsed));

  // Announce change
  const region = document.getElementById("nw-live-region");
  if (region) {
    region.textContent = newState
      ? "Motion reduction mode enabled."
      : "Motion reduction mode disabled.";
  }
}

/* Restore motion reduction on load */
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("nw-accessibility");
  if (!saved) return;

  const parsed = JSON.parse(saved);

  if (parsed.motionReduction) {
    document.body.classList.add("motion-reduction-mode");

    const region = document.getElementById("nw-live-region");
    if (region) {
      region.textContent = "Motion reduction mode restored.";
    }
  }
});
