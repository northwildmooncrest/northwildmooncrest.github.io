/* H3 — contact.js */
/* Reveal animation + basic form validation for the Northwild Mooncrest Contact section */

document.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.querySelector(".contact");
  const form = document.querySelector(".contact-form");

  /* Reveal animation */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contactSection.classList.add("contact-visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  if (contactSection) revealObserver.observe(contactSection);

  /* Form validation + success message */
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields before sending.");
        return;
      }

      alert("Your message has been sent. Thank you for reaching out to Northwild Mooncrest.");
      form.reset();
    });
  }
});
