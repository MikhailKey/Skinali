$(window).load(function() {
    $(".before-after").twentytwenty({
       before_label: 'Без скинали', // Set a custom before label
       after_label: 'С скинали', 
    });
    $('.before-slider').slick({
       draggable: false,
       dots: true,
       dotsClass: 'before-slider__dots',
       prevArrow: $('.arrow-left'),
       nextArrow: $('.arrow-right'),
    });
    $('.reviews-slider').slick({
        dots: true,
        dotsClass: 'before-slider__dots',
        prevArrow: $('.review-arrow-left'),
        nextArrow: $('.review-arrow-right'),
     });
    $('.menu-button').on('click', function(){
        $('.menu').toggleClass('menu_active');
    });
    $('.menu-button').on('click', function(go){
        $('.menu-button').toggleClass('decoration');
    });
    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top -100 + "px"});
    return false;
    });
    $('input[type="tel"]').mask("+7 (999) 999-99-99");
});
