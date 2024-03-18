let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.toggle('active');
}
let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.toggle('active');
}
let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
       loginForm.classList.toggle('active');
}
window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}
var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
    display: 7500,
    disableOnInteraction: false,
    },
    centeredSlides: true,
    
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });
  var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
    display: 7500,
    disableOnInteraction: false,
    },
    centeredSlides: true,
    
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });