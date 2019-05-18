const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const container = document.querySelector('.container');
const sidebarMemu = document.querySelector('.sidebar-menu');
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('open');
    sidebarMemu.style.width = '7.5rem';

    container.style.backgroundColor = 'rgba(0,0,0,0.2)';
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('open');
    sidebarMemu.style.width = '0';

    container.style.backgroundColor = '4381C1';
    showMenu = false;
  }
}
