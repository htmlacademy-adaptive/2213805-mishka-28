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
