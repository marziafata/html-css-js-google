$(document).ready(function() {
    // intercetto il click sull'icona
    $('#page-wrapper > header > div.header-right > ul > li.dropdown > a').click(function(){
        // alert('ciao');
        // recupero il div con classe sottomenu che è suo fratello
        var sottomenu = $(this).next('.sottomenu');
        // visualizzo il sottomenù
        sottomenu.toggle();
    });
});
