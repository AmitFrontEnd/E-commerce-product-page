const menuIcon=document.querySelector('.menu-icon')
const closeNav=document.querySelector('.close-icon')
const nav=document.querySelector('nav')
const cart=document.querySelector('.cart')
const cartContainer=document.querySelector('.cart-container')

menuIcon.addEventListener('click',()=>{
    nav.classList.add('active')
})
closeNav.addEventListener('click',()=>{
    nav.classList.remove('active')
})

cart.addEventListener('click',()=>{
    cartContainer.classList.toggle('active')
})