/* =============================================
   NIRMANDHARA — Global JavaScript
   ============================================= */

const WA_NUMBER = '8801620144641';

/* ─── WhatsApp helper ─── */
function openWhatsApp(message = '') {
  const url = `https://wa.me/${WA_NUMBER}${message ? '?text=' + encodeURIComponent(message) : ''}`;
  window.open(url, '_blank');
}

/* ─── Navbar scroll effect ─── */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ─── Mobile nav toggle ─── */
(function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.nav-mobile');
  if (!toggle || !mobileNav) return;
  toggle.addEventListener('click', () => {
    const open = toggle.classList.toggle('open');
    mobileNav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      mobileNav.classList.remove('open');
    });
  });
})();

/* ─── Active nav link ─── */
(function setActiveLink() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* ─── Scroll animations ─── */
(function initScrollAnimations() {
  const els = document.querySelectorAll('[data-animate]');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animation = 'fadeInUp 0.65s ease both';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => { el.style.opacity = '0'; observer.observe(el); });
})();

/* ─── WhatsApp float ─── */
document.addEventListener('DOMContentLoaded', () => {
  const waBtn = document.getElementById('wa-float');
  if (waBtn) waBtn.addEventListener('click', (e) => { e.preventDefault(); openWhatsApp(); });
});

