const initSwiperTours = (Swiper, Navigation) => {
  const swiper = new Swiper('.tours-swiper', {
    modules: [Navigation],
    loop: false,
    spaceBetween: 18,
    simulateTouch: false,
    navigation: {
      nextEl: '.tours__button--next',
      prevEl: '.tours__button--prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  return swiper.init();
};

export {initSwiperTours};
