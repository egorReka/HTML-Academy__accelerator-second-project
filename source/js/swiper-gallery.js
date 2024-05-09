const gallerySwiper = document.querySelector('.gallery-swiper');
const gallerySwiperWrapper = document.querySelector('.adv-swiper__list');

function initSwiperGallery(Swiper, Navigation) {
  const desktop = window.matchMedia('(min-width: 1440px)');

  let swiper = undefined;

  function setupSwiper() {
    if (!desktop.matches && swiper === undefined) {
      swiper = new Swiper('.gallery-swiper', {
        modules: [Navigation],
        loop: true,
        simulateTouch: false,
        slidesPerView: 'auto',
        spaceBetween: 5,
        navigation: {
          nextEl: '.gallery__button--next',
          prevEl: '.gallery__button--prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        },
      });
    } else if (desktop.matches && swiper !== undefined) {
      swiper.destroy();
      swiper = undefined;
      gallerySwiper.removeAttribute('style');
      gallerySwiperWrapper.removeAttribute('style');
    }
  }

  window.addEventListener('load', setupSwiper, { once: true });
  window.addEventListener('resize', setupSwiper);
}


export {initSwiperGallery};
