(() => {
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-button]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const closeMenu = () => {
    menuButton?.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    mobileNav?.classList.remove('is-open');
    mobileNav?.setAttribute('aria-hidden', 'true');
    header?.classList.remove('menu-open');
    document.body.style.overflow = '';
  };

  menuButton?.addEventListener('click', () => {
    const open = !menuButton.classList.contains('is-open');
    menuButton.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    mobileNav?.classList.toggle('is-open', open);
    mobileNav?.setAttribute('aria-hidden', String(!open));
    header?.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobileNav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));

  const reveals = document.querySelectorAll('.reveal');
  if (reducedMotion) {
    reveals.forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });
    reveals.forEach((el) => revealObserver.observe(el));
  }

  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('.desktop-nav a')];
  const updateScroll = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 18);
    const y = window.scrollY + 120;
    let active = sections[0]?.id;
    sections.forEach((section) => {
      if (section.offsetTop <= y) active = section.id;
    });
    navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${active}`));
  };
  updateScroll();
  window.addEventListener('scroll', updateScroll, { passive: true });

  document.querySelectorAll('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const slides = [...carousel.querySelectorAll('.slide')];
    const prev = carousel.querySelector('[data-prev]');
    const next = carousel.querySelector('[data-next]');
    const counter = carousel.querySelector('[data-counter]');
    const interval = Number(carousel.dataset.autoplay || 4200);
    let index = 0;
    let timer;

    const render = () => {
      if (!track || !slides.length) return;
      track.style.transform = `translate3d(${-index * 100}%,0,0)`;
      if (counter) counter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    };
    const go = (step) => {
      index = (index + step + slides.length) % slides.length;
      render();
    };
    const stop = () => window.clearInterval(timer);
    const start = () => {
      stop();
      if (!reducedMotion && slides.length > 1) timer = window.setInterval(() => go(1), interval);
    };

    prev?.addEventListener('click', () => { go(-1); start(); });
    next?.addEventListener('click', () => { go(1); start(); });
    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);
    carousel.addEventListener('focusin', stop);
    carousel.addEventListener('focusout', start);

    let startX = 0;
    carousel.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; stop(); }, { passive: true });
    carousel.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
      start();
    }, { passive: true });

    render();
    start();
  });

  if (!reducedMotion) {
    const accent = document.querySelector('.hero-accent');
    window.addEventListener('pointermove', (event) => {
      if (!accent || window.innerWidth < 760) return;
      const x = (event.clientX / window.innerWidth - 0.5) * 12;
      const y = (event.clientY / window.innerHeight - 0.5) * 12;
      accent.style.transform = `translate3d(${x}px,${y}px,0)`;
    }, { passive: true });
  }
})();
