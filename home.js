var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay:{
    delay:2000,

  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});



let slideIndex = 0;

function showSlides(n) {
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slides img');
    
    if (n >= slideImages.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slideImages.length - 1;
    } else {
        slideIndex = n;
    }
    
    const offset = -slideIndex * 100; // Move by 100% for each slide
    slides.style.transform = `translateX(${offset}%)`;
}

function changeSlide(n) {
    showSlides(slideIndex + n);
}

// Initialize the slider to show the first slide
showSlides(slideIndex);
