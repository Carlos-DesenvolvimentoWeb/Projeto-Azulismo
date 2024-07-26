const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //Responsive break points
  breakpoints: {
    0: {
      slidesPerView:1
    },
    768: {
      slidesPerView:2
    },
    1024: {
      slidesPerView:3
    },

  }
});