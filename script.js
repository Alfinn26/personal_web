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

// 3D CARD
const card=document.getElementById("card");
let drag=false;

function rotate(x,y){
const rect=card.getBoundingClientRect();
const centerX=rect.left+rect.width/2;
const centerY=rect.top+rect.height/2;
const rotateX=-(y-centerY)/15;
const rotateY=(x-centerX)/15;
card.style.transform=`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

card.addEventListener("mousedown",()=>{drag=true;card.classList.add("active");});
document.addEventListener("mouseup",()=>{drag=false;card.classList.remove("active");card.style.transform="rotateX(0) rotateY(0)";});
document.addEventListener("mousemove",e=>{if(drag)rotate(e.clientX,e.clientY);});

card.addEventListener("touchstart",()=>{drag=true;card.classList.add("active");});
document.addEventListener("touchend",()=>{drag=false;card.classList.remove("active");card.style.transform="rotateX(0) rotateY(0)";});
document.addEventListener("touchmove",e=>{
if(drag){
const t=e.touches[0];
rotate(t.clientX,t.clientY);
}
});
