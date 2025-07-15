var menu = document.querySelector('.menu');
var btnMenu = document.querySelector('.btn-menu');

console.log(menu);
console.log(btnMenu);

function toggleMenu(){

    menu.classList.toggle('show');

}

btnMenu.addEventListener('click',toggleMenu);