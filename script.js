// Toggle mobile navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// Accordion behaviour
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  header.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    accordionItems.forEach(i => i.classList.remove('active'));
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Apri il primo pannello all'avvio
if (accordionItems.length > 0) {
  accordionItems[0].classList.add('active');
}
