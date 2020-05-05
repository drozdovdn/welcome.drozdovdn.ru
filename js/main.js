$(function(){
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });



    // $('.menu-open').click(function () {
    //     $('.menu-collapse').toggleClass('d-none');
    //     $('.menu-collapse').toggleClass('opened');
    // });





});

function diplay_hide (blockId){
    if ($(blockId).css('display') == 'none')
    {
        $(blockId).animate({height: 'show'}, 800);
    }
    else {
        $(blockId).animate({height: 'hide'}, 800);
    }
};
$(window).on('load',function () {
    var $praloader = $('#preloader');
    $praloader.delay(1900).fadeOut('slow');
})
