// typing effect

const text=["Web Developer","Programmer","Tech Enthusiast"]
let count=0
let index=0
let current=""
let letter=""

function type(){

if(count===text.length){
count=0
}

current=text[count]
letter=current.slice(0,++index)

document.querySelector(".typing").textContent=letter

if(letter.length===current.length){

count++
index=0

setTimeout(type,1500)

}

else{

setTimeout(type,100)

}

}

type()



// scroll top

const btn=document.getElementById("scrollTop")

btn.onclick=()=>{

window.scrollTo({

top:0,
behavior:"smooth"

})

}
