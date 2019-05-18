import menu from './menu';

const container = document.querySelector('.container');
const about = document.querySelector('.home__about');
const project = document.querySelector('.home__project');
const contact = document.querySelector('.home__contact');

about.addEventListener('mouseover', () => {
  container.style.backgroundColor = '#BDADEA';
});

project.addEventListener('mouseover', () => {
  container.style.backgroundColor = '#BEA2C2';
});

contact.addEventListener('mouseover', () => {
  container.style.backgroundColor = '#CCB5B1';
});

window.onscroll = function() {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById('myBar').style.height = scrolled + '%';
}
