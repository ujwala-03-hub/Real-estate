// ======================= HERO BUTTON RIPPLE & LOADING EFFECT =======================
document.addEventListener('click', function (e) {
  const btn = e.target.closest('.explore-btn');
  if (!btn) return;

  // Ripple Effect
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement('span');
  ripple.style.position = 'absolute';
  ripple.style.borderRadius = '50%';
  ripple.style.background = 'rgba(255,255,255,0.3)';
  ripple.style.pointerEvents = 'none';
  ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
  ripple.style.left = e.clientX - rect.left - rect.width/2 + 'px';
  ripple.style.top = e.clientY - rect.top - rect.height/2 + 'px';
  ripple.style.transform = 'scale(0)';
  ripple.style.opacity = '1';
  ripple.style.transition = 'transform 600ms cubic-bezier(.2,.9,.3,1), opacity 600ms linear';
  btn.appendChild(ripple);
  requestAnimationFrame(()=> ripple.style.transform = 'scale(2)');
  setTimeout(() => {
    ripple.style.opacity = '0';
    setTimeout(() => ripple.remove(), 600);
  }, 300);

  // Loading effect demo
  if (btn.dataset.loadingDemo !== undefined) {
    btn.classList.add('loading');
    setTimeout(() => btn.classList.remove('loading'), 1500);
  }
});

// ======================= SMOOTH SCROLL FOR NAV LINKS =======================
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// ======================= HERO PARALLAX EFFECT =======================
window.addEventListener('scroll', function() {
  const hero = document.querySelector('.hero');
  if(hero) {
    let offset = window.scrollY * 0.5; // slower parallax
    hero.style.backgroundPosition = `center ${offset}px`;
  }
});

// ======================= CARD HOVER ANIMATION =======================
const cards = document.querySelectorAll('.card, .service-card, .features-card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px) scale(1.03)';
    card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});

// ======================= CONTACT FORM SUBMIT SIMULATION =======================
const contactForm = document.querySelector('.contact-form');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button');
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    setTimeout(()=>{
      alert("Thank you! Your message has been sent.");
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
      contactForm.reset();
    }, 1500);
  });
}

// ======================= FEATURES CARD HOVER EFFECT =======================
const featureCards = document.querySelectorAll('.features-card');
featureCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.querySelector('.card-icon').style.transform = 'scale(1.2)';
  });
  card.addEventListener('mouseleave', () => {
    card.querySelector('.card-icon').style.transform = 'scale(1)';
  });
});
