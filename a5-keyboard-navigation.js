/* A5 — Enhanced Keyboard Navigation */
/* Updated for Northwild Mooncrest cinematic global-brand design */

/* Add keyboard navigation class when user presses Tab */
document.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    document.body.classList.add("keyboard-nav");
    localStorage.setItem("keyboardNav", true);
  }
});

/* Remove keyboard navigation class when user clicks */
document.addEventListener("mousedown", () => {
  document.body.classList.remove("keyboard-nav");
  localStorage.setItem("keyboardNav", false);
});

/* Restore saved keyboard navigation preference */
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("keyboardNav");
  if (saved === "true") {
    document.body.classList.add("keyboard-nav");
  }
});

/* Improve focus ring visibility */
function applyFocusRing() {
  const elements = document.querySelectorAll(
    "a, button, input, textarea, select, [tabindex]"
  );

  elements.forEach((el) => {
    el.addEventListener("focus", () => {
      el.classList.add("focus-ring");
    });

    el.addEventListener("blur", () => {
      el.classList.remove("focus-ring");
    });
  });
}

applyFocusRing();
