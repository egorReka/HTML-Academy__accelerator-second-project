const initSwiperReviews = (Swiper, Navigation) => {
  const swiper = new Swiper('.reviews-swiper', {
    modules: [Navigation],
    loop: false,
    simulateTouch: false,
    slidesPerView: 'auto',
    // autoHeight: true, // TODO ждем ответа
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
    breakpoints: {
      768: {
        spaceBetween: 30,
      },
      1440: {
        spaceBetween: 120,
      },
    },
  });

  function updateTransformPadding () {
    const tabletWidth = window.matchMedia('(min-width: 768px) and (max-width: 1439px)');
    const desktopWidth = window.matchMedia('(min-width: 1440px)');
    const reviewsSwiper = document.querySelector('.reviews-swiper');
    const isActiveFirstSlide = this.activeIndex === 0;

    if (tabletWidth.matches) {
      if (isActiveFirstSlide) {
        reviewsSwiper.style.transform = 'translateX(45px)';
      } else {
        reviewsSwiper.style.transform = 'translateX(0)';
      }

      return;
    }

    if (desktopWidth.matches) {
      if (isActiveFirstSlide) {
        reviewsSwiper.style.transform = 'translateX(130px)';
      } else {
        reviewsSwiper.style.transform = 'translateX(0)';
      }

      return;
    }

    reviewsSwiper.style.transform = 'translateX(0)';
  }

  swiper.on('slideChangeTransitionStart', updateTransformPadding);
  swiper.on('resize', updateTransformPadding);

  return swiper.init();
};

export {initSwiperReviews};
