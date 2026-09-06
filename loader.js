// loader.js — clean include + dropdown initializer

async function loadIncludes() {
  const includeElements = document.querySelectorAll("[data-include]");

  const promises = Array.from(includeElements).map(async (el) => {
    const file = el.getAttribute("data-include");
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`Failed to load ${file}`);
      el.innerHTML = await response.text();
    } catch (err) {
      console.error(err);
      el.innerHTML = `<div style="color:red;">Error loading ${file}</div>`;
    }
  });

  // Wait for all includes to finish
  await Promise.all(promises);

  // Now load dropdown.js cleanly
  const script = document.createElement("script");
  script.src = "dropdown.js";
  document.body.appendChild(script);
}

// Run loader
document.addEventListener("DOMContentLoaded", loadIncludes);
