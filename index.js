function zoomImage() {
    var image = document.getElementById('zoomImage');
    image.classList.toggle('zoomed');
}

const burger = document.querySelector('.burger');
const navmenu = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
  navmenu.classList.toggle('nav-menu');

});

console.log('hello')


