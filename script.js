const menuIcon = document.querySelector('.menu-icon')
const closeNav = document.querySelector('.close-icon')
const nav = document.querySelector('nav')
const cart = document.querySelector('.cart')
const cartContainer = document.querySelector('.cart-container')
let countElement = document.querySelector('.count')
const increment = document.querySelector('.increment')
const decrement = document.querySelector('.decrement')
const cartTotalElement = document.querySelector('.cart-total')
const addToCart = document.querySelector('.right button')
const empty = document.querySelector('.empty')
const cartItem = document.querySelector('.cart-item')
const rateElement = document.querySelector('.rate')
const actualAmount = document.querySelector('.actual-price del')
let discountedPrice;

let counter = 0;

menuIcon.addEventListener('click', () => {
    nav.classList.add('active')
})
closeNav.addEventListener('click', () => {
    nav.classList.remove('active')
})

cart.addEventListener('click', () => {
    cartContainer.classList.toggle('active')
})

increment.addEventListener('click', () => {

    counter++
    countElement.textContent = counter;

    if (counter > 0) {
        cartTotalElement.innerText = counter
        cartTotalElement.style.padding = '2px 8px'
        cartTotalElement.style.display = 'block'
        empty.style.display = 'none'
        cartItem.style.display = 'flex'
        let price = 80;

        actualAmount.innerText ="$" + (price * counter).toFixed(2);
         discountedPrice = (parseFloat(actualAmount.innerText.replace('$', '')) * 0.5).toFixed(2);
        rateElement.innerText="$" + discountedPrice

        cartItem.innerHTML = `<img src="images/image-product-1-thumbnail.jpg" alt="">
          <div class="cart-item-details">
            <p class="title">Fall Limited Edition Sneakers</p>
            <p class="item-rate">$80.00 x <span class="qty">${counter}</span></p> <span class="total-item-price">$80.00</span>
          </div>
          <img src="images/icon-delete.svg" class="delete-item">`

    }
})
decrement.addEventListener('click', () => {
    if (counter > 0) {
        counter--
        countElement.textContent = counter;
        cartTotalElement.innerText = counter
        let price = 80;
        let currentAmount = parseFloat(actualAmount.innerText.replace('$', "")); 
        actualAmount.innerText = "$" + (currentAmount - price).toFixed(2);
        discountedPrice = (parseFloat(actualAmount.innerText.replace('$', '')) * 0.5).toFixed(2);
        rateElement.innerText="$" + discountedPrice
    }
    if (counter === 0) {
        cartTotalElement.style.display = 'none'
        empty.style.display = 'block'
        cartItem.style.display = 'none'
        rateElement.innerText = "$" + (0).toFixed(2);

    }
})

addToCart.addEventListener('click', () => {

})