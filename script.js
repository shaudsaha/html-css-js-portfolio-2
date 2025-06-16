function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  // Arrow behavior
  document.addEventListener("DOMContentLoaded", () => {
    const arrow = document.getElementById("section-arrow");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY < 100) {
        arrow.style.display = "none";
      } else {
        arrow.style.display = "block";
      }
    });
  
    arrow.addEventListener("click", () => {
      const sections = Array.from(document.querySelectorAll("section"));
      const current = window.scrollY;
      const nextSection = sections.find(sec => sec.offsetTop > current + 50);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
