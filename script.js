// LOADER
window.addEventListener("load",()=>{
document.getElementById("loader").style.display="none";
});

// PAGE SWITCH
function showPage(id){
document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active");
});
document.getElementById(id).classList.add("active");
}

// TYPING EFFECT
const text="Alfin Sabil Khafifudin";
let i=0;

function typing(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,100);
}
}
typing();

 // 3D AUTO FOLLOW CURSOR
const card = document.getElementById("card");

function rotateCard(e){
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

// Desktop
card.addEventListener("mousemove", rotateCard);

card.addEventListener("mouseleave", () => {
    card.style.transition = "transform 0.5s ease";
    card.style.transform = "rotateX(0) rotateY(0)";
});

// Mobile
card.addEventListener("touchmove", (e) => {
    const touch = e.touches[0];
    const rect = card.getBoundingClientRect();

    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener("touchend", () => {
    card.style.transition = "transform 0.5s ease";
    card.style.transform = "rotateX(0) rotateY(0)";
});
