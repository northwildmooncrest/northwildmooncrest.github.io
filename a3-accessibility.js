/* A3 — Accessibility Logic */
/* Updated for Northwild Mooncrest cinematic global-brand design */

/* High Contrast Mode */
function toggleHighContrast() {
  document.body.classList.toggle("high-contrast");
  localStorage.setItem(
    "highContrast",
    document.body.classList.contains("high-contrast")
  );
}

/* Dyslexia-Friendly Mode */
function toggleDyslexiaMode() {
  document.body.classList.toggle("dyslexia-mode");
  localStorage.setItem(
    "dyslexiaMode",
    document.body.classList.contains("dyslexia-mode")
  );
}

/* Screenreader Mode */
function toggleScreenreader() {
  document.body.classList.toggle("screenreader-mode");
  localStorage.setItem(
    "screenreaderMode",
    document.body.classList.contains("screenreader-mode")
  );
}

/* Keyboard Navigation Enhancements */
function enableKeyboardNavigation() {
  document.body.classList.add("keyboard-nav");
  localStorage.setItem("keyboardNav", true);
}

/* Restore Saved Settings */
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("highContrast") === "true") {
    document.body.classList.add("high-contrast");
  }

  if (localStorage.getItem("dyslexiaMode") === "true") {
    document.body.classList.add("dyslexia-mode");
  }

  if (localStorage.getItem("screenreaderMode") === "true") {
    document.body.classList.add("screenreader-mode");
  }

  if (localStorage.getItem("keyboardNav") === "true") {
    document.body.classList.add("keyboard-nav");
  }
});
