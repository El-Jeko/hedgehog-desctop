let body = document.querySelector('body');
let burger = document.querySelector('.burger-menu');
let mobMenu = document.querySelector('.mob-menu-container');
let closeBtn = document.querySelector('.close-btn');

burger.onclick = function () { 
    mobMenu.classList.remove('hidden-mob-menu');
    body.classList.add('noscroll');
};

closeBtn.onclick = function () {
    mobMenu.classList.add('hidden-mob-menu');
    body.classList.remove('noscroll');
};