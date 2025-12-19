const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Fechar menu ao clicar fora dele
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});
