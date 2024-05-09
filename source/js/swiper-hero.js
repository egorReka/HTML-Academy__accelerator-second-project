import {disablesFocusHiddenSlides} from './swiper-utils';

const heroSwiper = document.querySelector('.hero__container');
const heroButtonClass = 'hero-card__button';

const initSwiperHiro = (Swiper, Pagination) => {
  const swiper = new Swiper('.hero__container', {
    modules: [Pagination],
    loop: true,
    simulateTouch: false,
    calculateHeight: true,
    preventClicks: true,
    watchSlidesProgress: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      bulletElement: 'li',
      clickable: true,
      renderBullet: function (index, className) {
        return `<li class="${className}"><button class="hero-pagination__button" type="button"><span class="visually-hidden">Слайд ${index + 1}></span></button></li>`;
      },
    },
    on: {
      transitionEnd: function () {
        this.updateSlidesClasses();
        disablesFocusHiddenSlides(heroSwiper, heroButtonClass);
      }
    },
  });

  window.addEventListener('load', disablesFocusHiddenSlides(heroSwiper, heroButtonClass), { once: true });

  return swiper.init();
};


export {initSwiperHiro};
