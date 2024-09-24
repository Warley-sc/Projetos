$(function() {
    $('#iconMenu').click(function() {
        $('#NavbarMobile-01').toggle(); 
        $('#sair').toggle();
        $('#sair').hider()
    });
    $(window).resize(function() {
        if ($(window).width() >= 750) {
            $('#NavbarMobile-01').hide(); 
            $('#sair').hide(); 
        }
    });
});

