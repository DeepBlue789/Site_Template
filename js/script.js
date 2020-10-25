let menuBtn = document.getElementById('menuBtn');
let sideNav = document.getElementById('sideNav');

menuBtn.addEventListener('click', (e) => {
    sideNav.classList.toggle('toggle');
})



/********************* Smooth Scrolling *************************/

var scroll = new SmoothScroll('a[href*="#"]', {
    speed : 1000,
    speedAsDuration : true
});