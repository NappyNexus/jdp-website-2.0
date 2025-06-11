
  // const mobileMenuButton = document.getElementById('mobile-menu-button');
  // const mobileMenu = document.getElementById('mobile-menu');
  // const openIcon = mobileMenuButton.querySelector('svg:first-child');
  // const closeIcon = mobileMenuButton.querySelector('svg:last-child');

  // mobileMenuButton.addEventListener('click', () => {
  //   mobileMenu.classList.toggle('hidden');
  //   openIcon.classList.toggle('hidden');
  //   closeIcon.classList.toggle('hidden');
  // });


        // Back to Top button functionality
        const backToTopBtn = document.getElementById('backToTopBtn');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { // Show button after scrolling 300px
                backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
                backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
            } else {
                backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
                backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
