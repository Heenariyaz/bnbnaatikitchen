/* ═══════════════════════════════════════
   BNB Naati Kitchen — script.js
   ═══════════════════════════════════════ */

// ── Navbar: add shadow when scrolled ──
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 60);
});

// ── Mobile menu toggle ──
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

// ── Menu filter tabs ──
function fil(cat, btn) {
  // Update active tab
  document.querySelectorAll('.tab').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');

  // Show/hide cards
  document.querySelectorAll('.card').forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// ── Smooth scroll for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ── Close mobile menu when clicking outside ──
document.addEventListener('click', e => {
  const menu = document.getElementById('mobileMenu');
  const ham = document.getElementById('ham');
  if (menu.classList.contains('open') && !menu.contains(e.target) && !ham.contains(e.target)) {
    menu.classList.remove('open');
  }
});

console.log('BNB Naati Kitchen — bnbnaatikitchen.in');
