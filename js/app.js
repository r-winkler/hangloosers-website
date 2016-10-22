'use strict';

//var $ = require('jquery');
//window.$ = $;
//require('bootstrap');

$(function() {
    $(window).on("load resize", function() {
        $(".fill-screen").css("height", window.innerHeight);
    });
    
    // add Bootstrap's scrollspy
    $('body').scrollspy({ 
        target: '.navbar',
        offset: 160        
    });
    
    // smooth scrolling
    $('nav a, .down-button a').bind('click', function() {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });
    
    // parallax scrolling with stellar.js
    $(window).stellar();
    
});

// vorstand carousel
$(function() {
	$('.image-carousel > div').each(function() {
		var $cfs = $(this);
		$cfs.carouFredSel({
			direction: 'up',
			circular: false,
			infinite: false,
			auto: false,
			scroll: {
				queue: 'last'
			},
			items: {
				visible: 1,
				width: 275,
				height: 200
			}
		});
		$cfs.hover(
			function() {
				$cfs.trigger('next');
			},
			function() {
				$cfs.trigger('prev');
			}
		);
	});
});