// TODO убрать фокус со сктытого слайдера на ссылку vk

const initSwiperTraining = (Swiper, Navigation) => {
  const swiper = new Swiper('.training-swiper', {
    modules: [Navigation],
    loop: false,
    spaceBetween: 20,
    simulateTouch: false,
    navigation: {
      nextEl: '.training__button--next',
      prevEl: '.training__button--prev',
    },
    breakpoints: {
      320: {
        initialSlide: 2,
        slidesPerView: 1,
      },
      768: {
        initialSlide: 0,
        slidesPerView: 3,
      },
      1440: {
        initialSlide: 0,
        slidesPerView: 4,
      },
    },
  });

  return swiper.init();
};

export {initSwiperTraining};
