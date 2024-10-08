const icone = document.getElementById('ham-icon');
const menumobile = document.getElementById('navmobile');
const fechar = document.getElementById('fechar');

// Alterna a visibilidade do menu
const toggleMenu = () => {
    const isMenuOpen = menumobile.style.display === 'block';
    icone.style.display = isMenuOpen ? 'block' : 'none';  // Mostra ou esconde o ícone hamburguer
    fechar.style.display = isMenuOpen ? 'none' : 'block'; // Mostra ou esconde o ícone de fechar
    menumobile.style.display = isMenuOpen ? 'none' : 'block'; // Alterna o menu
};

// Adiciona os eventos de clique
icone.addEventListener('click', toggleMenu);
fechar.addEventListener('click', toggleMenu);

// Ajusta o menu com base na largura da tela
const adjustMenuForScreenSize = () => {
    if (window.innerWidth > 800) {
        menumobile.style.display = 'none'; // Esconde o menu no desktop
        fechar.style.display = 'none';      // Esconde o ícone de fechar
        icone.style.display = 'none';       // Esconde o ícone hamburguer
    } else {
        icone.style.display = 'block';      // Mostra o ícone hamburguer no mobile
        fechar.style.display = 'none';       // Garante que o ícone de fechar está escondido
        menumobile.style.display = 'none';  // Garante que o menu está escondido por padrão
    }
};

// Ajusta o menu ao carregar a página e ao redimensionar
window.addEventListener('load', adjustMenuForScreenSize);
window.addEventListener('resize', adjustMenuForScreenSize);
