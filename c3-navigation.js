/* C3 — navigation.js */
/* Interactive behavior for global navigation */

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("site-nav");
  const toggle = document.querySelector(".nav-toggle");
  const drawer = document.querySelector(".nav-drawer");

  if (!toggle || !drawer) return;

  // Toggle mobile drawer
  toggle.addEventListener("click", () => {
    const isOpen = drawer.getAttribute("aria-hidden") === "false";

    drawer.setAttribute("aria-hidden", isOpen ? "true" : "false");
    drawer.classList.toggle("open", !isOpen);
    toggle.classList.toggle("open", !isOpen);
  });

  // Close drawer when clicking a link
  drawer.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      drawer.setAttribute("aria-hidden", "true");
      drawer.classList.remove("open");
      toggle.classList.remove("open");
    });
  });

  // Add shadow when scrolling
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });
});
