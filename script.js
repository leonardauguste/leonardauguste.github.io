// reveal animation
const items = document.querySelectorAll(".reveal")

window.addEventListener("scroll",()=>{
items.forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight-100){
el.classList.add("active")
}
})
})

// cursor glow
const cursor=document.querySelector(".cursor")

document.addEventListener("mousemove",e=>{
cursor.style.left=e.clientX+"px"
cursor.style.top=e.clientY+"px"
})

// FILTER
function filter(cat){
document.querySelectorAll(".event").forEach(e=>{
e.style.display =
(cat=="all"||e.classList.contains(cat))
?"flex":"none"
})
}

// MODAL IMAGE
function openModal(el){
document.getElementById("modal").style.display="flex"
document.getElementById("modalImg").src=
el.querySelector("img").src
}

function closeModal(){
document.getElementById("modal").style.display="none"
}