// A3 — accessibility.js
// Core accessibility logic

(function () {
  const html = document.documentElement;

  const actions = {
    "increase-text": () => {
      let size = parseFloat(getComputedStyle(html).fontSize);
      html.style.fontSize = size + 1 + "px";
    },
    "decrease-text": () => {
      let size = parseFloat(getComputedStyle(html).fontSize);
      html.style.fontSize = Math.max(size - 1, 12) + "px";
    },
    "high-contrast": () => {
      html.classList.toggle("high-contrast");
    },
    "reset": () => {
      html.style.fontSize = "";
      html.classList.remove("high-contrast");
    }
  };

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".a11y-btn");
    if (!btn) return;

    const action = btn.dataset.action;
    if (actions[action]) actions[action]();
  });
})();
