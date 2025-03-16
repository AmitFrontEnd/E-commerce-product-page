const menuIcon = document.querySelector(".menu-icon");
const closeNav = document.querySelector(".close-icon");
const nav = document.querySelector("nav");
const cart = document.querySelector(".cart");
const cartContainer = document.querySelector(".cart-container");
let countElement = document.querySelector(".count");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const cartTotalElement = document.querySelector(".cart-total");
const addToCart = document.querySelector(".right button");
const empty = document.querySelector(".empty");
const cartItem = document.querySelector(".cart-item");
const rateElement = document.querySelector(".rate");
const actualAmount = document.querySelector(".actual-price del");
const productImage = document.querySelector(".product-image");
const imageGallery = document.querySelector(".image-gallery");
const wrapper = document.querySelector(".wrapper");
const closeGallery = document.querySelector(".close-gallery");
let discountedPrice = null;

let counter = 0;

menuIcon.addEventListener("click", () => {
    nav.classList.add("active");
});
closeNav.addEventListener("click", () => {
    nav.classList.remove("active");
});

cart.addEventListener("click", () => {
    cartContainer.classList.toggle("active");
});

increment.addEventListener("click", () => {
    cartContainer.classList.remove("active");
    counter++;
    countElement.textContent = counter;

    if (counter > 0) {
        let price = 80;

        actualAmount.innerText = "$" + (price * counter).toFixed(2);
        discountedPrice = (
            parseFloat(actualAmount.innerText.replace("$", "")) * 0.5
        ).toFixed(2);
        rateElement.innerText = "$" + discountedPrice;
    }
});
decrement.addEventListener("click", () => {
    cartContainer.classList.remove("active");
    if (counter > 0) {
        counter--;
        countElement.textContent = counter;
        let price = 80;
        let currentAmount = parseFloat(actualAmount.innerText.replace("$", ""));
        actualAmount.innerText = "$" + (currentAmount - price).toFixed(2);
        discountedPrice = (
            parseFloat(actualAmount.innerText.replace("$", "")) * 0.5
        ).toFixed(2);
        rateElement.innerText = "$" + discountedPrice;
    }
    if (counter === 0) {
        cartTotalElement.style.display = "none";
        empty.style.display = "block";
        cartItem.style.display = "none";
        rateElement.innerText = "$" + (0).toFixed(2);
    }
});

let cartImage = "images/image-product-1-thumbnail.jpg";

const removeProduct = () => {
    counter = 0;
    countElement.innerText = 0;
    rateElement.innerText = `$0.00`;
    actualAmount.innerText = `$0.00`;
    cartTotalElement.innerText = 0;
    empty.style.display = "flex";
    cartItem.style.display = "none";
}

addToCart.addEventListener("click", () => {
    empty.style.display = "none";
    cartItem.style.display = "flex";
    cartTotalElement.innerText = counter;
    cartTotalElement.style.padding = "2px 8px";
    cartTotalElement.style.display = "block";

    cartItem.innerHTML = `<img src=${cartImage} alt="">
    <div class="cart-item-details">
      <p class="title">Fall Limited Edition Sneakers</p>
      <p class="item-rate">$40.00 x <span class="qty">${counter}</span></p> 
     ${discountedPrice ? `<span class="total-item-price">${discountedPrice}</span>` : ''}
    </div>
    <img src="images/icon-delete.svg" class="delete-item">`;
    const deleteProduct = document.querySelector(".delete-item");
    deleteProduct.addEventListener('click', removeProduct)

});

const productSection = document.querySelector(".product-section");
const thumbnails = productSection.querySelectorAll(".thumbnail-container img");
const mainImages = productSection.querySelectorAll(".main-img");

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        cartImage = thumbnail.src;

        thumbnails.forEach((thumb) => thumb.classList.remove("active"));
        thumbnail.classList.add("active");
        mainImages.forEach((img) => {
            img.removeAttribute("id");
        });
        mainImages[index].setAttribute("id", "show-img");
    });
});

closeGallery.addEventListener("click", () => {
    imageGallery.style.display = "none";
});

mainImages.forEach((images) => {
    images.addEventListener("click", (e) => {
        cartContainer.classList.remove('active')
        imageGallery.style.display = "flex";
        document.querySelector(".gallery-main-image").src = `${e.target.src}`;
    });
});


const galleryThumbnail = document.querySelectorAll('.image-gallery .thumb-image')

let sliderImageCounter = 1;
const totalImages = 4;

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const galleryMainImage = document.querySelector(".gallery-main-image");

nextBtn.addEventListener('click', () => {
    if (sliderImageCounter >= totalImages) {
        sliderImageCounter = 1;
    } else {
        sliderImageCounter++;
    }
    galleryMainImage.src = `images/image-product-${sliderImageCounter}.jpg`;
});

prevBtn.addEventListener('click', () => {
    if (sliderImageCounter <= 1) {
        sliderImageCounter = totalImages;
    } else {
        sliderImageCounter--;
    }
    galleryMainImage.src = `images/image-product-${sliderImageCounter}.jpg`;
});

const galleryThumbnails = document.querySelectorAll('.thumb-image')

galleryThumbnails.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {

        galleryThumbnails.forEach((t) => t.classList.remove("active"));

        thumb.classList.add("active");

        galleryMainImage.src = mainImages[index].src;
    });
});
