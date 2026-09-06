// A10 — dyslexia-mode.js
// Logic for dyslexia-friendly reading mode

(function () {
  const html = document.documentElement;
  const STORAGE_KEY = "dyslexiaMode";

  // Apply saved mode on load
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "on") {
    html.classList.add("dyslexia-mode");
  }

  // Toggle dyslexia mode
  function toggleDyslexiaMode() {
    html.classList.toggle("dyslexia-mode");
    const isOn = html.classList.contains("dyslexia-mode");
    localStorage.setItem(STORAGE_KEY, isOn ? "on" : "off");
  }

  // Listen for a11y toolbar button
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".a11y-btn");
    if (!btn) return;

    if (btn.dataset.action === "dyslexia") {
      toggleDyslexiaMode();
    }
  });

  // Keyboard shortcut: Shift + D
  document.addEventListener("keydown", (e) => {
    if (e.shiftKey && e.key.toLowerCase() === "d") {
      toggleDyslexiaMode();
    }
  });

  // Expose globally
  window.DyslexiaMode = {
    toggle: toggleDyslexiaMode
  };
})();
