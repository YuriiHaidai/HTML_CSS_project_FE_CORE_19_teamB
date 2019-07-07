"use strict";

var burger = document.querySelector('.header__bugger');
var close = document.querySelector('.overlay__close');
var overlay = document.querySelector('.overlay');
burger.addEventListener('click', function () {
  overlay.classList.add('overlay_open');
});
close.addEventListener('click', function () {
  overlay.classList.remove('overlay_open');
});