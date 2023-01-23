
const menu = document.querySelector('#menu');

document.querySelector('#menu-button').onclick = () => {
  menu.classList.toggle('header__menu-active');
  document.body.classList.toggle('active-menu');
};