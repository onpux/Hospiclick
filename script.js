const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a'); // Captura los enlaces del menú

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Cierra el menú cuando se hace clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
}
