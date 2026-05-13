// Basic UI interactions: mobile toggle + modal
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  const signupOpen = document.querySelectorAll('#signupOpen, #signupOpen2');
  const modal = document.getElementById('signupModal');
  const modalCloses = document.querySelectorAll('.modal-close');
  const yearSpan = document.getElementById('yearSpan');

  // year
  if(yearSpan) yearSpan.textContent = new Date().getFullYear();

  // mobile nav
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // open modal
  signupOpen.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.setAttribute('aria-hidden','false');
    });
  });

  // close modal
  modalCloses.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.setAttribute('aria-hidden','true');
    });
  });

  // close when click outside panel
  modal.addEventListener('click', (e) => {
    if(e.target === modal) modal.setAttribute('aria-hidden','true');
  });

  // simple submit handlers (placeholder)
  document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! We received your signup. (demo)');
    modal.setAttribute('aria-hidden','true');
  });

  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent (demo).');
    e.target.reset();
  });
});
