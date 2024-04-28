const initSwiperReviews = (Swiper, Navigation) => {
  const swiper = new Swiper('.reviews-swiper', {
    modules: [Navigation],
    loop: false,
    // simulateTouch: false,
    virtualTranslate: true,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
    breakpoints: {
      320: {
        // slidesPerColumn: 1,
        // spaceBetween: 15,
        slidesPerView: 'auto'

      },
      768: {
        spaceBetween: 30,
        // virtualTranslate: true,

        // slidesPerColumn: 1,
        // centeredSlides: true,
        // slidesPerGroup: 1,
      },
      1440: {
        slidesPerView: 'auto',
        spaceBetween: 120,
        // slidesPerColumn: 1,
      },
    },
  });

  swiper.on("slideChangeTransitionStart", function () {
    let transformValue = 0;
    transformValue = `${this.activeIndex * -this.slidesSizesGrid[this.activeIndex]}px`;
    // console.log(-this.slidesSizesGrid[this.activeIndex]);
    console.log(transformValue);
    swiper.wrapperEl.style.transform = `translateX(${transformValue})`;
  });


  return swiper.init();
};

export {initSwiperReviews};


// TODO ! Докрутить последний слайд
