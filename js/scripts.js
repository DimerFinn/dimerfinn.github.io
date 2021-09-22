const swiper = new Swiper('.achivment-slider', {
    // Optional parameters
   slidesPerView: 4,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 40,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  

  });