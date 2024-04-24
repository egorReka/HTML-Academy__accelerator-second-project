
// TODO убрать табы со скрытых с button a
// добавить табы на пагинацию, узнать должен ли табаться?

const initSwiperHiro = (Swiper, Pagination) => {
  const swiper = new Swiper('.hero__container', {
    modules: [Pagination],
    loop: true,
    simulateTouch: false,
    calculateHeight: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      bulletElement: 'li',
      clickable: true,
      renderBullet: function (index, className) {
        return `<li class="${className}"><span class="visually-hidden">Слайд ${index + 1}></span></li>`; // TODO visibleted-hidden 1 2 3
      },
    },
  });

  return swiper.init();
};

export {initSwiperHiro};


