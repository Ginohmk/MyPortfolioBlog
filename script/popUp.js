const hamMenu = document.querySelector('.ham-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.getElementById('nav-close');

/*-----------------------------
|          FUNCTIONS          |
|                             |
------------------------------*/

function openCloseMenu() {
  mobileMenu.classList.toggle('hide');
  hamMenu.classList.toggle('hide');
}

// Close & Open Mobile Menu
hamMenu.addEventListener('click', openCloseMenu);
closeMenu.addEventListener('click', openCloseMenu);