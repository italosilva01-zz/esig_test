"use strict";

var menusandwich = document.querySelector('.navbar-brand');

menusandwich.onclick = function () {
  var menuSide = document.querySelector('.menu-side');
  menuSide.classList.toggle('menu-open');
};
