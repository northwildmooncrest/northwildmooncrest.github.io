// A5 — keyboard-navigation.js
// Enhanced keyboard navigation for accessibility

(function () {
  const focusableSelectors = [
    "a[href]",
    "button",
    "input",
    "textarea",
    "select",
    "[tabindex]:not([tabindex='-1'])"
  ];

  function getFocusableElements(container = document) {
    return Array.from(container.querySelectorAll(focusableSelectors.join(",")))
      .filter(el => !el.disabled && el.offsetParent !== null);
  }

  // Trap focus inside a container (used for modals, menus, panels)
  function trapFocus(container) {
    const elements = getFocusableElements(container);
    if (elements.length === 0) return;

    const first = elements[0];
    const last = elements[elements.length - 1];

    container.addEventListener("keydown", (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  // Global Escape key handler
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.dispatchEvent(new CustomEvent("globalEscape"));
    }
  });

  // Auto-focus skip link target
  const skipNav = document.querySelector(".skip-nav");
  if (skipNav) {
    skipNav.addEventListener("click", () => {
      const main = document.querySelector("#main-content");
      if (main) main.setAttribute("tabindex", "-1");
      main?.focus();
    });
  }

  // Expose utilities globally
  window.KeyboardNav = {
    getFocusableElements,
    trapFocus
  };
})();
