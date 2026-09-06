/* A5 — Cinematic Keyboard Navigation */
/* World of Northwild Mooncrest */
/* Creator: John Robert */

/* Detect keyboard navigation */
let nwKeyboardActive = false;

/* Activate keyboard navigation mode */
function activateKeyboardNavigation() {
  if (!nwKeyboardActive) {
    nwKeyboardActive = true;
    document.body.classList.add("keyboard-nav");

    const region = document.getElementById("nw-live-region");
    if (region) {
      region.textContent = "Keyboard navigation activated.";
    }
  }
}

/* Listen for keyboard usage */
window.addEventListener("keydown", (event) => {
  // Ignore modifier-only keys
  if (event.key === "Shift" || event.key === "Control" || event.key === "Alt") return;

  activateKeyboardNavigation();
});

/* Enhance tab focus movement */
window.addEventListener("keyup", (event) => {
  if (event.key === "Tab") {
    const active = document.activeElement;

    if (active) {
      active.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }
});

/* Initialize on load */
document.addEventListener("DOMContentLoaded", () => {
  // If keyboard mode was previously active, restore it
  const saved = localStorage.getItem("nw-accessibility");
  if (saved) {
    const parsed = JSON.parse(saved);
    if (parsed.keyboardNav) {
      nwKeyboardActive = true;
      document.body.classList.add("keyboard-nav");
    }
  }
});
