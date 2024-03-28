function zoomImage() {
    var image = document.getElementById('zoomImage');
    image.classList.toggle('zoomed');
}

// JavaScript to toggle nav-menu visibility when burger menu is clicked
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  burger.classList.toggle('active');
});




