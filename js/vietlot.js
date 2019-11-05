$(document).ready(function () {
	"use strict";
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

    $('#btn_top').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });

    $('.slide_list ul, .box03_list ul').slick({
    	dots: false,
    	arrows: true,
		slidesToShow: 1,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocuse : false,
        margin: 0,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('.box04_img ul').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocuse : false,
        margin: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: 0
    });

    $('.box05_list ul').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocuse : false,
        margin: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: 0
    });

    $('.box08_ct ul').slick({
        dots: true,
        arrows: false,
        slidesToShow: 7,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocuse : false,
        margin: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: 0
    });

});

// anchor animation
$(window).bind('load',function(){
    "use strict";
    $(function(){
        $('a[href^="#"]').click(function(){
            if ($($(this).attr('href') ).length ) {
                var p = $( $(this).attr('href') ).offset();
                if($(window).width() > 769){
                    $('html,body').animate({ scrollTop: p.top - 80}, 400);
                }
                else {
                    $('html,body').animate({ scrollTop: p.top - 80}, 400);
                }
            }
            return false;
        });
    });
});







