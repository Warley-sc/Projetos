$(function() {
    // Exibe/oculta o menu e o ícone de saída ao clicar em #iconMenu
    $('#iconMenu').click(function() {
        $('#NavbarMobile-01').toggle(); // Alterna entre mostrar/esconder o menu
        $('#sair').toggle();
        $('#sair').hider()
    });

    // Esconde a barra de navegação mobile quando a tela for redimensionada para um tamanho maior   
    $(window).resize(function() {
        if ($(window).width() >= 750) {
            $('#NavbarMobile-01').hide(); // Esconde a barra de navegação mobile em telas maiores
            $('#sair').hide(); // Também esconde o ícone de saída
        }
    });
});

