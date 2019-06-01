'use strict'

window.onload = function() {
    console.log('javascripts work!!!');
}

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});