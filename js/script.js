document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          form.reset();
          successMessage.style.display = "block";
          successMessage.style.color = "green";
          successMessage.textContent = "✅ Thank you! Your message has been saved.";

          // Optional: Hide after 5 seconds
          setTimeout(() => {
            successMessage.style.display = "none";
          }, 5000);
        } else {
          throw new Error("Submission failed");
        }
      } catch (error) {
        successMessage.style.display = "block";
        successMessage.style.color = "red";
        successMessage.textContent = "❌ Submission failed. Please try again.";
      }
    });
  }
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
});