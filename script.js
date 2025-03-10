const menuIcon=document.querySelector('.menu-icon')
const closeNav=document.querySelector('.close-icon')
const nav=document.querySelector('nav')

menuIcon.addEventListener('click',()=>{
    nav.classList.add('active')
})
closeNav.addEventListener('click',()=>{
    nav.classList.remove('active')
})