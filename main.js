$(document).ready(function() {

    // // menu dropdown che si aprono e chiudono solo cliccando sulla propria icona
    // // intercetto il click sull'icona
    // $('#page-wrapper > header > div.header-right > ul > li.dropdown > a').click(function(){
    //     // alert('ciao');
    //     // recupero il div con classe sottomenu che è suo fratello
    //     var sottomenu = $(this).next('.sottomenu');
    //     // visualizzo il sottomenù
    //     sottomenu.toggle();
    // });

    //quando clicco nel form, l'icona della lente sparisce
    $('#page-wrapper > main > div > div.input > input').click(function(){
        $('.fa-search').hide();
    });


    // menù dropdown che si aprono e si chiudono al click su entrambi
    //aggancio il click sull'icona
    $('.dropdown').click(function(){
        // valuto se il sottomenu è già aperto o no
        if ($(this).next('.sottomenu').is(':visible')) {
            // il sottomenù è già aperto => la chiudo
            $(this).next('.sottomenu').hide();
        } else {
            // la risposta è chiusa => la devo aprire dopo aver nascosto altri menù aperti in precedenza
            // chiudo tutte le eventuali cose aperte
            $('.sottomenu').hide();
            $(this).next('.sottomenu').show();
        }

    })



});
