// Simple fade-in animations for sections
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = 0;
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.6s ease-out";
});
