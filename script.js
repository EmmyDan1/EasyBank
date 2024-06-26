document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.overlay');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.add('active');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        overlay.style.display = "block"
    });
    
    closeIcon.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        overlay.style.display = "none"
    }); 

    overlay.addEventListener('click', function () {
        navLinks.classList.remove('active');
        overlay.style.display = 'none';
    });


});