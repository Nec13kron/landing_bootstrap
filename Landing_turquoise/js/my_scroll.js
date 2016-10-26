$('body').scrollspy({
    target: '.navbar-fixed-top'
})
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

$(document).ready(function () {
    // = Вешаем событие прокрутки к нужному месту
    //	 на все ссылки якорь которых начинается на #
    $('a[href^="#"]').bind('click.smoothscroll', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

});
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.navbar-inverse').addClass('navbar-scroll');
    } else if ($(this).scrollTop() < 50) {
        $('.navbar-inverse').removeClass('navbar-scroll');
    }
});