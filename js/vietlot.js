$(document).ready(function() {
    "use strict";
    if ($(window).width() > 768) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#btn_top').fadeIn(300);
                $('#header').addClass('active');
                $('#gnavi').addClass('fix');
            } else {
                $('#btn_top').fadeOut(300);
                $('#header').removeClass('active');
                $('#gnavi').removeClass('fix');
            }
        });
    }

    $('#btn_top').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });

    if( $('#slider').length) {
        $('.slide_list ul').slick({
            dots: false,
            arrows: true,
            slidesToShow: 1,
            speed: 500,
            pauseOnHover: false,
            pauseOnFocuse: false,
            margin: 0,
            fade: true,
            autoplay: true,
            autoplaySpeed: 5000
        });
    }

    $('.num_select span').click(function(){
        $('.box_pick_num').addClass('active');
    });

    $('.games_item').on('click', function() {
        var href = $(this).find('a').attr('href');
        location.href = href;
    });

    $('.btn_modal').click(function (){
        $('.box_modal, body').addClass('active');
    });

    $('.box_modal .close_modal').click(function (){
        $('.box_modal, body').removeClass('active');
    });

    $('.select_num li').click(function(){
        $(this).toggleClass('on');
    });

    $('.select_price li').click(function(){
        $('.select_price li').removeClass('on');
        $(this).toggleClass('on');
    });

    $('.box_bot a, .box_head p').click(function(){
        $('.box_pick_num').removeClass('active');
    });

    
});