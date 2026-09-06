/* A3 — Cinematic Accessibility Logic */
/* World of Northwild Mooncrest */
/* Creator: John Robert */

/* Accessibility State */
const nwState = {
  screenreader: false,
  contrast: false,
  dyslexia: false,
  keyboardNav: false
};

/* Save State */
function saveNWState() {
  localStorage.setItem("nw-accessibility", JSON.stringify(nwState));
}

/* Load State */
function loadNWState() {
  const saved = localStorage.getItem("nw-accessibility");
  if (!saved) return;
  const parsed = JSON.parse(saved);

  nwState.screenreader = parsed.screenreader;
  nwState.contrast = parsed.contrast;
  nwState.dyslexia = parsed.dyslexia;
  nwState.keyboardNav = parsed.keyboardNav;

  applyNWState();
}

/* Apply State to the World */
function applyNWState() {
  const body = document.body;

  body.classList.toggle("screenreader-mode", nwState.screenreader);
  body.classList.toggle("high-contrast-mode", nwState.contrast);
  body.classList.toggle("dyslexia-mode", nwState.dyslexia);
  body.classList.toggle("keyboard-nav", nwState.keyboardNav);

  announceNWState();
}

/* ARIA Live Announcer */
function announceNWState() {
  const region = document.getElementById("nw-live-region");
  if (!region) return;

  let message = "Accessibility updated.";

  if (nwState.screenreader) message = "Screenreader mode activated.";
  if (nwState.contrast) message = "High contrast mode enabled.";
  if (nwState.dyslexia) message = "Dyslexia-friendly mode enabled.";
  if (nwState.keyboardNav) message = "Keyboard navigation active.";

  region.textContent = message;
}

/* Toggle Functions */
function toggleScreenreader() {
  nwState.screenreader = !nwState.screenreader;
  saveNWState();
  applyNWState();
}

function toggleContrast() {
  nwState.contrast = !nwState.contrast;
  saveNWState();
  applyNWState();
}

function toggleDyslexia() {
  nwState.dyslexia = !nwState.dyslexia;
  saveNWState();
  applyNWState();
}

function toggleKeyboardNav() {
  nwState.keyboardNav = !nwState.keyboardNav;
  saveNWState();
  applyNWState();
}

/* Keyboard Detection */
window.addEventListener("keydown", () => {
  if (!nwState.keyboardNav) {
    nwState.keyboardNav = true;
    saveNWState();
    applyNWState();
  }
});

/* Initialize the World */
document.addEventListener("DOMContentLoaded", () => {
  loadNWState();
});
