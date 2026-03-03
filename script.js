const card = document.getElementById("profile");

card.addEventListener("mousemove", (e) => {
let rect = card.getBoundingClientRect();
let x = e.clientX - rect.left;
let y = e.clientY - rect.top;

let centerX = rect.width / 2;
let centerY = rect.height / 2;

let rotateX = -(y - centerY) / 20;
let rotateY = (x - centerX) / 20;

card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
card.style.boxShadow = "0 0 40px #00ffff";
});

card.addEventListener("mouseleave", () => {
card.style.transform = "rotateX(0) rotateY(0)";
card.style.boxShadow = "0 0 20px #00ffff";
});
