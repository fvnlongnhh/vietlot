$(document).ready(function () {
	"use strict";
    var pos_gnavi = $('#gnavi').offset().top;

    $(window).scroll(function () {
        if ($(this).scrollTop() > pos_gnavi) {
            $('#gnavi').addClass('fix');
        }
        else{
            $('#gnavi').removeClass('fix');
        }
    });

    $('.slide_list').slick({
    	dots: false,
    	arrows: false,
		slidesToShow: 1,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocuse : false,
        margin: 0,
        fade: true,
  		cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000
        
    });
    

    $(window).load(function(){
        AOS.init({ 
            easing: 'ease',
            once: true,
            duration: 1000,
            disable: 'mobile',
        }); 
    });
});







