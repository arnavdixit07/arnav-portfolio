// script.js

// Smooth section reveal on scroll
const sections = document.querySelectorAll(".section");
const options = {
  threshold: 0.1
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, options);

sections.forEach(section => {
  section.classList.add("hidden");
  revealOnScroll.observe(section);
});

// Mobile Nav Toggle (if future mobile nav is added)
// Example feature for progressive enhancement
// const toggleNav = () => {
//   document.querySelector('.nav-container ul').classList.toggle('show');
// };

// Optional smooth scroll polyfill for older browsers
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });
