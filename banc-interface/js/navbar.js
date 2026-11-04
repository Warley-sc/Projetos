
// ========================================
// FREE BANK - JAVASCRIPT
// ========================================


// MENU MOBILE
const menuToggle = document.querySelector('#menu-toggle');
const navbar = document.querySelector('#navbar');

menuToggle.addEventListener('click', () => {

    const menuAberto = navbar.classList.toggle('active');

    menuToggle.classList.toggle('active');

    menuToggle.setAttribute('aria-expanded', menuAberto);

    menuToggle.setAttribute(
        'aria-label',
        menuAberto ? 'Fechar menu' : 'Abrir menu'
    );

});


// FECHAR MENU AO CLICAR EM UM LINK
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {

    link.addEventListener('click', () => {

        navbar.classList.remove('active');
        menuToggle.classList.remove('active');

        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');

    });

});


// FECHAR MENU AO CLICAR FORA DELE
document.addEventListener('click', (event) => {

    const clicouNoMenu = navbar.contains(event.target);
    const clicouNoBotao = menuToggle.contains(event.target);

    if (!clicouNoMenu && !clicouNoBotao) {

        navbar.classList.remove('active');
        menuToggle.classList.remove('active');

        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');

    }

});


// ANIMAÇÃO DE ENTRADA DAS SEÇÕES
const elementosAnimados = document.querySelectorAll(
    '.about-content, .service-card, .benefits-content, .cta-content'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('visible');

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

elementosAnimados.forEach(elemento => {

    elemento.classList.add('reveal');

    observer.observe(elemento);

});


// ATUALIZAR ANO AUTOMATICAMENTE NO RODAPÉ
const footerText = document.querySelector('.footer-bottom p');

if (footerText) {

    footerText.textContent =
        `© ${new Date().getFullYear()} Free Bank. Projeto demonstrativo.`;

}


// DESTAQUE DOS LINKS DE NAVEGAÇÃO
const sections = document.querySelectorAll(
    'main section[id], main section'
);

const navObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const id = entry.target.id;

            if (!id) return;

            navLinks.forEach(link => {

                link.classList.toggle(
                    'active-link',
                    link.getAttribute('href') === `#${id}`
                );

            });

        }

    });

}, {
    rootMargin: '-30% 0px -60% 0px'
});

sections.forEach(section => {

    if (section.id) {
        navObserver.observe(section);
    }

});
