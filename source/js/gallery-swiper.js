const initSwiperGallery = (Swiper, Navigation) => {
  const swiper = new Swiper('.gallery-swiper', {
    modules: [Navigation],
    loop: true,
    // simulateTouch: false,
    slidesPerView: 'auto',
    spaceBetween: 5,
    navigation: {
      nextEl: '.gallery__button--next',
      prevEl: '.gallery__button--prev',
    },
    breakpoints: {
      320: {
        // slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
        enabled: true,
      },
      1440: {
        slidesPerView: 5,
        enabled: false,
      },
    },
  });

  return swiper.init();
};

export {initSwiperGallery};
