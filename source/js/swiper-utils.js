const disablesFocusHiddenSlides = (container, elementClass) => {
  const slides = container.querySelectorAll('.swiper-slide');

  slides.forEach((slide) => {
    const isActiveSlid = slide.classList.contains('swiper-slide-visible');

    if (isActiveSlid) {
      slide.querySelector(`.${elementClass}`).setAttribute('tabindex', 0);
    } else {
      slide.querySelector(`.${elementClass}`).setAttribute('tabindex', -1);
    }
  });
};

const appendCloneSlide = (list, item, count) => {
  for (let i = 0; i < count; i++) {
    const cloneItem = item.cloneNode(true);

    cloneItem.dataset.clone = true;
    list.appendChild(cloneItem);
  }
};

const removeCloneSlide = (swiper) => {
  const cloneSlides = swiper.querySelectorAll('[data-clone]');

  cloneSlides.forEach((slide) => {
    slide.remove();
  });
};

export { disablesFocusHiddenSlides, appendCloneSlide, removeCloneSlide };
