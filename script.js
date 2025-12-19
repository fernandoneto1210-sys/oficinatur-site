// Menu Hamburger Mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        // Abrir/Fechar menu ao clicar no hamburger
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Fechar menu ao clicar fora dele
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
});

// Função para gerar PDF (placeholder - você pode implementar depois)
function gerarPDF(nomeRoteiro) {
    alert('Função de gerar PDF será implementada em breve para: ' + nomeRoteiro);
}


