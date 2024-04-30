const desktop = window.matchMedia('(min-width: 1440px)');

function swiperSetup(Swiper, Navigation) {

  const swiper = new Swiper('.adv-swiper', {
    modules: [Navigation],
    // loop: true,
    // spaceBetween: 30,
    // slidesPerView: 'auto',
    // centeredSlides: true,
    // initialSlide: 3,
    // slidesPerGroup: 2,
    navigation: {
      nextEl: '.adv__button--next',
      prevEl: '.adv__button--prev',
    },
    breakpoints: {
      320: {
        enabled: false,

        init: false,
        loop: false,
        spaceBetween: 0,
        slidesPerView: 'auto',
        centeredSlides: false,
        initialSlide: 0,
        slidesPerGroup: 0,
        virtualTranslate: true,
      },
      768: {
        enabled: false,

        init: false,
        loop: false,
        spaceBetween: 0,
        slidesPerView: 'auto',
        centeredSlides: false,
        initialSlide: 0,
        slidesPerGroup: 0,
        virtualTranslate: true,
      },
      1440: {
        init: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 'auto',
        centeredSlides: true,
        initialSlide: 3,
        slidesPerGroup: 2,
        virtualTranslate: false,
      },
    }
    // on: {
    //   resize: function () {

    //     if (!desktop.matches) {
    //       console.log('2');
    //       return this.destroy();
    //     }
    //   }
    // }

  });

  // if (!desktop.matches) {
  //   if (isInit) {
  //     console.log('2');
  //     isInit = false;
  //     swiper.destroy();
  //   }
  //   return;
  // }

  // if (desktop.matches) {
  //   if (!isInit) {
  //     console.log('1');
  //     isInit = true;
  //     return swiper.init();
  //   }
  // }


  // if (desktop.matches) {
  //   if (!isInit) {
  //     isInit = true;
  //     return swiper.init();
  //   }
  // }

  // if (!desktop.matches) {
  //   if (isInit) {

  //   }
  // }
  return swiper.init();
}

// const debounce = (callback, timeoutDelay = 500) => {
//   let timeoutId;

//   return (...rest) => {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
//   };
// };

const initSwiperAdv = (Swiper, Navigation) => {
  swiperSetup(Swiper, Navigation);

  // window.addEventListener('load', () => {
  //   swiperSetup(Swiper, Navigation);
  // });

  // window.addEventListener('resize', () => {
  //   swiperSetup(Swiper, Navigation);
  // });

};

export {initSwiperAdv};


// TODO ждем ответа, пределать
