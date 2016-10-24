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

// toggle "Read more..." text
$(document).ready(function(){
    $('#read-more').click(function() { 
        var readmore = 'Read more...';
        var readless = 'Read less...';
        if ($(this).text() === readmore) {
            $(this).text(readless);
        }
        else {
            $(this).text(readmore);
        }
    });
});

// Vorstand carousel
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

// Facebook like us plugin
(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v2.8&appId=1595978190662701";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));