<!-- A3 — Accessibility Logic -->
<!-- Cinematic Edition for Northwild Mooncrest -->
<!-- Creator: John Robert -->

/* A3 — Cinematic Accessibility Logic */

/* Restore saved accessibility settings */
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("nw-accessibility");
  if (!saved) return;

  const parsed = JSON.parse(saved);

  if (parsed.highContrast) {
    document.body.classList.add("high-contrast-mode");
  }

  if (parsed.largeText) {
    document.body.classList.add("large-text-mode");
  }

  if (parsed.dyslexia) {
    document.body.classList.add("dyslexia-mode");
  }

  if (parsed.motionReduction) {
    document.body.classList.add("motion-reduction-mode");
  }

  if (parsed.cognitiveLoad) {
    document.body.classList.add("reduced-cognitive-load-mode");
  }

  const region = document.getElementById("nw-live-region");
  if (region) {
    region.textContent = "Accessibility settings restored.";
  }
});

/* Toggle high contrast mode */
function nwToggleHighContrast() {
  const body = document.body;
  const newState = !body.classList.contains("high-contrast-mode");
  body.classList.toggle("high-contrast-mode", newState);
  nwSaveSetting("highContrast", newState);
  nwAnnounce(newState ? "High contrast enabled." : "High contrast disabled.");
}

/* Toggle large text mode */
function nwToggleLargeText() {
  const body = document.body;
  const newState = !body.classList.contains("large-text-mode");
  body.classList.toggle("large-text-mode", newState);
  nwSaveSetting("largeText", newState);
  nwAnnounce(newState ? "Large text enabled." : "Large text disabled.");
}

/* Toggle dyslexia-friendly mode */
function nwToggleDyslexia() {
  const body = document.body;
  const newState = !body.classList.contains("dyslexia-mode");
  body.classList.toggle("dyslexia-mode", newState);
  nwSaveSetting("dyslexia", newState);
  nwAnnounce(newState ? "Dyslexia mode enabled." : "Dyslexia mode disabled.");
}

/* Toggle motion reduction mode */
function nwToggleMotionReduction() {
  const body = document.body;
  const newState = !body.classList.contains("motion-reduction-mode");
  body.classList.toggle("motion-reduction-mode", newState);
  nwSaveSetting("motionReduction", newState);
  nwAnnounce(newState ? "Motion reduction enabled." : "Motion reduction disabled.");
}

/* Toggle reduced cognitive load mode */
function nwToggleCognitiveLoad() {
  const body = document.body;
  const newState = !body.classList.contains("reduced-cognitive-load-mode");
  body.classList.toggle("reduced-cognitive-load-mode", newState);
  nwSaveSetting("cognitiveLoad", newState);
  nwAnnounce(newState ? "Reduced cognitive load enabled." : "Reduced cognitive load disabled.");
}

/* Save accessibility settings */
function nwSaveSetting(key, value) {
  const saved = localStorage.getItem("nw-accessibility");
  let parsed = saved ? JSON.parse(saved) : {};
  parsed[key] = value;
  localStorage.setItem("nw-accessibility", JSON.stringify(parsed));
}

/* Announce changes to screen readers */
function nwAnnounce(message) {
  const region = document.getElementById("nw-live-region");
  if (region) {
    region.textContent = message;
  }
}
