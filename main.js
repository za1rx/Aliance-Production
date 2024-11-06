const burgerBtn = document.querySelector('.header__burger-btn')
const burgerClose = document.querySelector('.burger__close');
const burgerMenu = document.querySelector('.header__burger-menu');

burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('header__burger-menu_active')
})

burgerClose.addEventListener('click', () => {
    burgerMenu.classList.toggle('header__burger-menu_active')    
})