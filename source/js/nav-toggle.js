
const headerContainer = document.querySelector('.header__container');
const navLinks = document.querySelectorAll('.nav__link');

const addFocusLinks = () => {
  navLinks.forEach((link) => {
    link.setAttribute('tabindex', 0);
  });
};

const removeFocusLinks = () => {
  navLinks.forEach((link) => {
    link.setAttribute('tabindex', -1);
  });
};

const closeNav = (burgerButton) => {
  burgerButton.classList.remove('header__burger--active');
  burgerButton.setAttribute('aria-label', 'Открыть меню');
  document.body.style.overflow = 'visible';
  removeFocusLinks();
};

const openNav = (burgerButton) => {
  burgerButton.classList.add('header__burger--active');
  burgerButton.setAttribute('aria-label', 'Закрыть меню');
  document.body.style.overflow = 'hidden';
  addFocusLinks();
};

const onDocumentKeydown = (evt) => {
  const isEscapeKey = evt.key === 'Escape';
  const button = headerContainer.querySelector('.header__burger');

  if (isEscapeKey) {
    evt.preventDefault();
    closeNav(button);
  }
};

const navToggle = (evt) => {
  const targetButton = evt.target.closest('.header__burger');
  const targetLink = evt.target.closest('.nav__link');
  const burgerButton = headerContainer.querySelector('.header__burger');
  const isButtonActive = burgerButton.classList.contains('header__burger--active');

  if (!targetButton && !targetLink) {
    return;
  }

  if (isButtonActive) {
    closeNav(burgerButton);
    document.removeEventListener('keydown', onDocumentKeydown);
  } else {
    openNav(burgerButton);
    document.addEventListener('keydown', onDocumentKeydown);
  }
};

const initNavToggle = () => {
  const desktop = window.matchMedia('(min-width: 1440px)');

  window.addEventListener('resize', () => {
    if (!desktop.matches) {
      headerContainer.addEventListener('click', navToggle);
    } else {
      headerContainer.removeEventListener('click', navToggle);
      addFocusLinks();
    }
  });

  window.addEventListener('load', () => {
    if (!desktop.matches) {
      headerContainer.addEventListener('click', navToggle);
      removeFocusLinks();
    }
  }, { once: true });
};

export { initNavToggle };
