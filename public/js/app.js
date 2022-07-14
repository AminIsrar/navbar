const humburger =document.querySelector(".humburger");
const navMenu = document.querySelector(".nav-menu");
humburger.addEventListener("click",() =>{
  humburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-item").forEach(n =>n.addEventListener("click",()=>{
  humburger.classList.remove("active");
  navMenu.classList.remove("active");
}))