$(document).ready(function() {
    // intercetto il click sull'icona
    $('body > header > div.header-right > ul > li.dropdown > a').click(function(){
        // recupero il div con classe sottomenu che è suo fratello
        var sottomenu = $(this).next('.sottomenu');
        // visualizzo il sottomenù
        sottomenu.toggle();
    })



});
