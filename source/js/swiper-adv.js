const advSwiperWrapper = document.querySelector('.adv-swiper__list');
const advSwiper = document.querySelector('.adv-swiper');

function initSwiperAdv(Swiper, Navigation) {
  const desktop = window.matchMedia('(min-width: 1440px)');

  let swiper = undefined;

  function setupSwiper() {
    if (desktop.matches && swiper === undefined) {
      swiper = new Swiper('.adv-swiper', {
        modules: [Navigation],
        loop: true,
        simulateTouch: false,
        spaceBetween: 30,
        slidesPerView: 'auto',
        centeredSlides: true,
        initialSlide: 3,
        slidesPerGroup: 2,
        navigation: {
          nextEl: '.adv__button--next',
          prevEl: '.adv__button--prev',
        },
      });
    } else if (!desktop.matches && swiper !== undefined) {
      swiper.destroy();
      swiper = undefined;
      advSwiper.removeAttribute('style');
      advSwiperWrapper.removeAttribute('style');
    }
  }

  window.addEventListener('load', setupSwiper, { once: true });
  window.addEventListener('resize', setupSwiper);
}

export {initSwiperAdv};
