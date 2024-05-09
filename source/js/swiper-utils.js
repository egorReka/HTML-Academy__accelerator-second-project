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

export { disablesFocusHiddenSlides };
