/* D3 — gallery.js */
/* Interactive behavior for the cinematic gallery */

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".gallery-item img");

  // Create lightbox container
  const lightbox = document.createElement("div");
  lightbox.className = "gallery-lightbox";
  lightbox.innerHTML = `
    <div class="lightbox-inner">
      <img class="lightbox-img" src="" alt="">
    </div>
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector(".lightbox-img");

  // Open lightbox when clicking an image
  items.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("open");
    });
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener("click", (e) => {
    if (!e.target.classList.contains("lightbox-img")) {
      lightbox.classList.remove("open");
    }
  });

  // Escape key closes lightbox
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.classList.remove("open");
    }
  });
});
