// CURSOR GLOW
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// DARK LIGHT TOGGLE
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggle.textContent = 
    document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});

// HAMBURGER MENU
function toggleMenu(){
  document.getElementById("nav-menu").classList.toggle("active");
}
// INIT AOS
AOS.init({
duration:1200,
once:true
});

// PARTICLES CONFIG
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    color: { value: "#00f7ff" },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00f7ff",
      opacity: 0.4,
      width: 1
    },
    move: { enable: true, speed: 2 }
  }
});
