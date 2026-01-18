document.addEventListener('DOMContentLoaded', () => {

  const nav = document.querySelector('nav');
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  /* Scroll effect */
  window.addEventListener('scroll', () => {
    if (nav) {
      nav.classList.toggle('scrolled', window.scrollY > 100);
    }
  });

  if (hamburger && mobileMenu) {

    hamburger.addEventListener('click', (event) => {
      event.stopPropagation();
      mobileMenu.classList.toggle('open');
    });

    mobileMenu.addEventListener('click', (event) => {
      event.stopPropagation();
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });

    document.addEventListener('click', () => {
      if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        mobileMenu.classList.remove('open');
      }
    });
  }

});
