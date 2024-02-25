const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu--close');

menuBtn.addEventListener('click', ()=> {
  menuList.classList.toggle('open');
  menuShadow.classList.toggle('open');
});
menuClose.addEventListener('click', ()=> {
  menuList.classList.remove('open')
  menuShadow.classList.remove('open');
});
