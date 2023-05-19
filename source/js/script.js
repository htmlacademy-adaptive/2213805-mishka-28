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
if (modalWindow) {
  const cardOpenButton = document.querySelector('.button-modal-open');

  cardOpenButton.addEventListener('click', function () {
    modalWindow.classList.remove('modal--close');
    modalWindow.addEventListener('click', function() {
      modalWindow.classList.add('modal--close');
    });
  });
}
