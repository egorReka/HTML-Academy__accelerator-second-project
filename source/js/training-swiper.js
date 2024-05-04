import {disablesFocusHiddenSlides} from './utils';

const trainingSwiper = document.querySelector('.training-swiper');
const trainingLinkClass = 'training-card__link';

const initSwiperTraining = (Swiper, Navigation) => {
  const swiper = new Swiper('.training-swiper', {
    modules: [Navigation],
    loop: false,
    spaceBetween: 20,
    simulateTouch: false,
    preventClicks: true,
    watchSlidesProgress: true,
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
    on: {
      transitionEnd: function () {
        this.updateSlidesClasses();
        disablesFocusHiddenSlides(trainingSwiper, trainingLinkClass);
      }
    },
  });

  window.addEventListener('load', disablesFocusHiddenSlides(trainingSwiper, trainingLinkClass), {once: true});

  return swiper.init();
};


export {initSwiperTraining};
