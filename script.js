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