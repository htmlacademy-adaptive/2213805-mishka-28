const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-header__toggle');
const navToggleNoJs = document.querySelector('.main-header__toggle--nojs');

navToggle.classList.remove('main-header__toggle--nojs');
navMain.classList.add('main-nav--closed');
navMain.classList.remove('main-nav--opened');
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  navToggle.classList.add('active');
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


const modalWindow = document.querySelector('.modal');
const cardOpenButton = document.querySelector('.catalog-card__button');
const modalOpen = document.querySelector('.modal--open');
const modalClose = document.querySelector('.modal--close');

modalWindow.classList.remove('modal--close');
modalWindow.classList.add('modal--open');

cardOpenButton.addEventListener('click', function () {
  modalOpen.classList.add('modal--open');
  if (document.classList.contains('modal--close')) {
    modalWindow.classList.remove('modal--close');
    modalWindow.classList.add('modal--open');
  } else {
    modalWindow.classList.add('modal--close');
    modalWindow.classList.remove('modal--open');
  }
});
