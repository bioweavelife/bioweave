document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  // Add "scrolled" class to header on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Toggle mobile nav
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
});
