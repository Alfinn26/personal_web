// typing effect

const words=["Web Developer","Single Era","Tech Enthusiast"]
let i=0
let j=0
let current=""
let isDeleting=false

function type(){

current=words[i]

if(!isDeleting){
document.getElementById("typing").textContent=current.slice(0,++j)
if(j==current.length)isDeleting=true
}

else{
document.getElementById("typing").textContent=current.slice(0,--j)
if(j==0){
isDeleting=false
i=(i+1)%words.length
}
}

setTimeout(type,120)
}

type()



// scroll top

document.getElementById("scrollTop").onclick=()=>{
window.scrollTo({
top:0,
behavior:"smooth"
})
}



// reveal animation

window.addEventListener("scroll",()=>{

document.querySelectorAll(".reveal").forEach(el=>{

const top=el.getBoundingClientRect().top

if(top<window.innerHeight-100){

el.style.opacity=1
el.style.transform="translateY(0)"

}

})

})



// counter animation

const counters=document.querySelectorAll(".counter")

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target
const c=+counter.innerText

const inc=target/100

if(c<target){
counter.innerText=Math.ceil(c+inc)
setTimeout(update,20)
}

}

update()

})
