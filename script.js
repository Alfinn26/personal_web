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

const card = document.getElementById("card");

let isDragging = false;

function rotateCard(x, y) {
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

// DESKTOP
card.addEventListener("mousedown", () => {
    isDragging = true;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    card.style.transform = "rotateX(0) rotateY(0)";
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        rotateCard(e.clientX, e.clientY);
    }
});

// MOBILE TOUCH
card.addEventListener("touchstart", () => {
    isDragging = true;
});

document.addEventListener("touchend", () => {
    isDragging = false;
    card.style.transform = "rotateX(0) rotateY(0)";
});

document.addEventListener("touchmove", (e) => {
    if (isDragging) {
        const touch = e.touches[0];
        rotateCard(touch.clientX, touch.clientY);
    }
});

const card = document.querySelector(".card-inner");

document.querySelector(".profile-card").addEventListener("mousemove", (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

document.querySelector(".profile-card").addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
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
