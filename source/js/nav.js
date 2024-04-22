// TODO исправить табиндекс при первой загрузке страницы, пред открытием меню
// откыть закырыть меню в мобильной версии, ресайз до десктопа (табинтех -1 остается)
// Мобильное меню при выборе пункта автоматически закрывается.
// При открытом мобильном меню скрол страницы блокируется.

const burger = document.querySelector('.header__burger');
const navLinks = document.querySelectorAll('.nav__link');

const toggleNav = () => {
  burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger--active');

    if (!burger.classList.contains('header__burger--active')) {
      burger.setAttribute('aria-label', 'Открыть меню');

      navLinks.forEach((link) => {
        link.setAttribute('tabindex', '-1');
      });

      return;
    }

    burger.setAttribute('aria-label', 'Закрыть меню');

    navLinks.forEach((link) => {
      link.removeAttribute('tabindex', 0);
    });
  });
};

export { toggleNav };
