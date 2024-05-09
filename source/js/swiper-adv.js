import { appendCloneSlide, removeCloneSlide } from './swiper-utils';

const desktop = window.matchMedia('(min-width: 1440px)');
const advSwiper = document.querySelector('.adv-swiper');
const advSwiperWrapper = advSwiper.querySelector('.adv-swiper__list');
const advSwiperSlides = advSwiper.querySelectorAll('.adv-swiper__item');

function initSwiperAdv(Swiper, Navigation) {
  let swiper = undefined;

  function setupSwiper() {

    if (desktop.matches && swiper === undefined) {
      swiper = new Swiper('.adv-swiper', {
        modules: [Navigation],
        navigation: {
          nextEl: '.adv__button--next',
          prevEl: '.adv__button--prev',
        },
        loop: true,
        simulateTouch: false,
        spaceBetween: 30,
        slidesPerView: 'auto',
        centeredSlides: true,
        initialSlide: 3,
        slidesPerGroup: 2,
        on: {
          beforeInit: () => {
            appendCloneSlide(advSwiperWrapper, advSwiperSlides[0], 3);
          },
        },
      });
    }

    if (!desktop.matches && swiper !== undefined) {
      swiper.destroy();
      swiper = undefined;
      advSwiper.removeAttribute('style');
      advSwiperWrapper.removeAttribute('style');
      removeCloneSlide(advSwiper);
    }
  }

  window.addEventListener('load', setupSwiper, { once: true });
  window.addEventListener('resize', setupSwiper);
}

export {initSwiperAdv};
