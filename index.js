(() => {
  // ============ THEME TOGGLE ============
  const root = document.documentElement;
  const THEME_KEY = 'jdp-theme';
  const setTheme = (mode) => {
    if (mode === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    try { localStorage.setItem(THEME_KEY, mode); } catch {}
    document.querySelectorAll('[data-theme-toggle]').forEach((b) => {
      b.setAttribute('aria-pressed', String(mode === 'dark'));
      b.setAttribute('aria-label', mode === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    });
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', mode === 'dark' ? '#0a1228' : '#00255b');
  };
  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = root.classList.contains('dark') ? 'light' : 'dark';
      setTheme(next);
    });
  });
  // Sync aria-pressed on load (theme is already applied by inline script in <head>)
  setTheme(root.classList.contains('dark') ? 'dark' : 'light');

  // ============ SCROLL REVEAL ============
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach((el) => io.observe(el));
  }

  // ============ COUNTERS ============
  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length && 'IntersectionObserver' in window) {
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.counter, 10) || 0;
        const duration = 1600;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          el.textContent = Math.round(easeOut(p) * target).toLocaleString('es-DO');
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        counterIO.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach((c) => counterIO.observe(c));
  }

  // ============ BACK TO TOP + NAV STATE ============
  const backToTopBtn = document.getElementById('backToTopBtn');
  const nav = document.querySelector('[data-nav]');
  const onScroll = () => {
    const y = window.scrollY;
    if (backToTopBtn) {
      const show = y > 400;
      backToTopBtn.classList.toggle('opacity-0', !show);
      backToTopBtn.classList.toggle('pointer-events-none', !show);
      backToTopBtn.classList.toggle('opacity-100', show);
      backToTopBtn.classList.toggle('pointer-events-auto', show);
      backToTopBtn.classList.toggle('translate-y-2', !show);
    }
    if (nav) nav.classList.toggle('is-scrolled', y > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ============ CONTACT FORM → WHATSAPP ============
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const statusEl = document.getElementById('contact-form-status');
    const gradeText = (sel) => sel?.options?.[sel.selectedIndex]?.text.trim() || '';

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(contactForm);
      const grade = gradeText(contactForm.querySelector('#contact-grade'));
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const phone = (data.get('phone') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();

      const lines = [
        `Hola, soy ${name}. Me interesa más información sobre el Colegio Jardín de Príncipes.`,
        '',
        `*Correo:* ${email}`,
      ];
      if (phone) lines.push(`*Teléfono:* ${phone}`);
      if (grade && grade !== 'Selecciona...') lines.push(`*Grado de interés:* ${grade}`);
      lines.push('', '*Mensaje:*', message);

      const number = contactForm.dataset.waNumber || '18292328384';
      const url = `https://wa.me/${number}?text=${encodeURIComponent(lines.join('\n'))}`;
      const opened = window.open(url, '_blank', 'noopener,noreferrer');

      if (statusEl) {
        statusEl.classList.remove('hidden');
        statusEl.innerHTML = opened
          ? '✓ Abrimos WhatsApp en otra pestaña. Solo te falta tocar <strong>Enviar</strong>.'
          : `Si WhatsApp no se abrió, <a class="underline text-jdporange" href="${url}" target="_blank" rel="noopener noreferrer">haz clic aquí</a>.`;
      }
    });
  }

  // ============ MOBILE MENU ============
  const mobileToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-menu]');
  if (mobileToggle && mobileMenu) {
    const closeMenu = () => {
      mobileMenu.dataset.open = 'false';
      mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };
    mobileToggle.addEventListener('click', () => {
      const open = mobileMenu.dataset.open === 'true';
      if (open) closeMenu();
      else {
        mobileMenu.dataset.open = 'true';
        mobileToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    });
    mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.dataset.open === 'true') closeMenu();
    });
  }
})();
