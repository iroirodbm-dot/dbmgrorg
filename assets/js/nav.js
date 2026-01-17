document.addEventListener('DOMContentLoaded', () => {

  const nav = document.querySelector('nav');
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  /* Scroll effect (safe for all pages) */
  window.addEventListener('scroll', () => {
    if (nav) {
      nav.classList.toggle('scrolled', window.scrollY > 100);
    }
  });

  /* Mobile menu toggle */
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  }

});

