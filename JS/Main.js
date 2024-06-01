let burger=document.querySelector('.burger')
let nav=document.querySelector('.nav')
let navbarItem=document.querySelector('.navbar-items')

burger.addEventListener('click',()=>{
    navbarItem.classList.toggle('h-class')
    nav.classList.toggle('v-class')
})