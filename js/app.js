'use strict';

//var $ = require('jquery');
//window.$ = $;
//require('bootstrap');

$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    // add Bootstrap's scrollspy
    $('body').scrollspy({
        target: '.navbar'
        , offset: 160
    });

    // smooth scrolling
    $('nav a, .down-button a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });

    // parallax scrolling with stellar.js
    $(window).stellar();

});

// document ready function
$(function () {

    // load year calendar from separate file
    $('#year-calendar').load('calendar.html');

    // set content of vorstand
    $.getJSON('data/vorstand.json', function (data) {
        var items = [];
        $.each(data, function (key, val) {
            items.push(val);
        });
        var $president = $('.president');
        $president.find('.title').html(data[0].function);
        $president.find('.name').html(data[0].name);
        $president.find('.description').html(data[0].description);

        var $vize = $('.vize');
        $vize.find('.title').html(data[1].function);
        $vize.find('.name').html(data[1].name);
        $vize.find('.description').html(data[1].description);

        var $sportchef = $('.sportchef');
        $sportchef.find('.title').html(data[2].function);
        $sportchef.find('.name').html(data[2].name);
        $sportchef.find('.description').html(data[2].description);

        var $sekretaer = $('.sekretaer');
        $sekretaer.find('.title').html(data[3].function);
        $sekretaer.find('.name').html(data[3].name);
        $sekretaer.find('.description').html(data[3].description);

        var $kassier = $('.kassier');
        $kassier.find('.title').html(data[4].function);
        $kassier.find('.name').html(data[4].name);
        $kassier.find('.description').html(data[4].description);

        var $description = $('.description');
        $description.find('.description').html(data[5].description);
    });

    // set text bold of active nav item
    $("#navbar-main").on("activate.bs.scrollspy", function () {
        $(".nav li > a").css('font-weight', 'normal'); // reset all
        $(".nav li.active > a").css('font-weight', 'bold');
    });

    // close navbar on click
    $(function () {
        var navMain = $("#navbar-main");
        navMain.on("click", "a", null, function () {
            navMain.collapse('hide');
        });
    });

    // toggle "Read more... text
    $('#read-more').click(function () {
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
$(function () {
    $('.vorstand-lg-carousel > div').each(function () {
        var $cfs = $(this);
        $cfs.carouFredSel({
            direction: 'up'
            , circular: false
            , infinite: false
            , auto: false
            , scroll: {
                queue: 'last'
            }
            , items: {
                visible: 1
                , width: 275
                , height: 200
            }
        });
        $cfs.hover(
            function () {
                $cfs.trigger('next');
            }
            , function () {
                $cfs.trigger('prev');
            }
        );
    });
});

// Facebook like us plugin
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v2.8&appId=1595978190662701";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));