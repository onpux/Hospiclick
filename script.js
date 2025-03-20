const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
}
