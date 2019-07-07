let burger = document.querySelector('.header__bugger');
let close = document.querySelector('.overlay__close');
let overlay = document.querySelector('.overlay');

burger.addEventListener('click', () => {
    overlay.classList.add('overlay_open');
});

close.addEventListener('click', () => {
    overlay.classList.remove('overlay_open');
});