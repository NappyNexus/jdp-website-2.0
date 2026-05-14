// Back-to-top button — fades in after 300px of scroll, scrolls to top on click.
(() => {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  const showClasses = ['opacity-100', 'pointer-events-auto'];
  const hideClasses = ['opacity-0', 'pointer-events-none'];

  const update = () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.remove(...hideClasses);
      backToTopBtn.classList.add(...showClasses);
    } else {
      backToTopBtn.classList.remove(...showClasses);
      backToTopBtn.classList.add(...hideClasses);
    }
  };

  window.addEventListener('scroll', update, { passive: true });
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
