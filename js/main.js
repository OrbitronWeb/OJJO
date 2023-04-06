let elSidebar = document.querySelector(".sidebar")
let elBurger = document.querySelector(".burger-btn")
let elFir = elBurger.querySelector(".fir")
let elSec = elBurger.querySelector(".sec")
let elThr = elBurger.querySelector(".thr")
elBurger.addEventListener("click", ()=>{
  elSidebar.classList.toggle("action")
  elBurger.classList.toggle("action2")
  elFir.classList.toggle("active1")
  elSec.classList.toggle("active2")
  elThr.classList.toggle("active3")
})


let elBig = document.querySelector(".big")
let elSm = document.querySelectorAll(".sm")
let elBigRed = document.querySelector(".big_red")

