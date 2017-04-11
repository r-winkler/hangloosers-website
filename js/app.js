'use strict';

//var $ = require('jquery');
//window.$ = $;
//require('bootstrap');

// document ready function
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
    
    $(".lazy").recliner({
    attrib: "data-src", // selector for attribute containing the media src
    throttle: 200,      // millisecond interval at which to process events
    threshold: 200,     // scroll distance from element before its loaded
    printable: true,    // be printer friendly and show all elements on document print
    live: true          // auto bind lazy loading to ajax loaded elements
});

	// load year calendar from separate file
	$('#year-calendar').load('calendar.html');

	// set content of vorstand
	$.getJSON('data/vorstand.json', function (data) {
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

	// set content of upcoming-events
	$.getJSON('data/events.json', function (data) {
		var events = [];
		$.each(data, function (key, val) {
			events.push(val);
		});

		// sort events in ascending order
		events.sort(function (a, b) {
			a.startDateFormatted = new Date(a.startDate.substring(6, 10), a.startDate.substring(3, 5) - 1, a.startDate.substring(0, 2));
			b.startDateFormatted = new Date(b.startDate.substring(6, 10), b.startDate.substring(3, 5) - 1, b.startDate.substring(0, 2));
			return a.startDateFormatted - b.startDateFormatted;
		});

		// remove past events
		events = events.filter(isInFuture);

		var $first_event = $('#first-event');
		$first_event.find('.event-name').html(events[0].name);
		$first_event.find('.event-location').html(events[0].location);
		$first_event.find('.event-date').html(events[0].startDate);

		var $second_event = $('#second-event');
		$second_event.find('.event-name').html(events[1].name);
		$second_event.find('.event-location').html(events[1].location);
		$second_event.find('.event-date').html(events[1].startDate);

		var $third_event = $('#third-event');
		$third_event.find('.event-name').html(events[2].name);
		$third_event.find('.event-location').html(events[2].location);
		$third_event.find('.event-date').html(events[2].startDate);

		var $fourth_event = $('#fourth-event');
		$fourth_event.find('.event-name').html(events[3].name);
		$fourth_event.find('.event-location').html(events[3].location);
		$fourth_event.find('.event-date').html(events[3].startDate);

		var $fifth_event = $('#fifth-event');
		$fifth_event.find('.event-name').html(events[4].name);
		$fifth_event.find('.event-location').html(events[4].location);
		$fifth_event.find('.event-date').html(events[4].startDate);

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

	// toggle "Show calendar... text
	$('#show-calendar').click(function () {
		var show = 'Show calendar...';
		var hide = 'Hide calendar';
		if ($(this).text() === show) {
			$(this).text(hide);
		}
		else {
			$(this).text(show);
		}
	});

	// carousel im xs layout
	$('#vorstand-xs-carousel').slick({
		infinite: true
		, slidesToShow: 1
		, slidesToScroll: 1
	});

	// countdown
	var dt = new Date();
	$('#flipcountdownbox1').flipcountdown({
		size: 'sm'
		, tick: function customTick(dateStr) {
			var nol = function (h) {
				return h > 9 ? h : '0' + h;
			}
			var beforeDateTime = Math.round((new Date('02/11/2017 00:00:00')).getTime() / 1000);
			var actualDateTime = Math.round((new Date()).getTime() / 1000);
			if (beforeDateTime < actualDateTime) {
				return [nol(0), nol(0), nol(0), nol(0)];
			}
			var range = Math.max(0, beforeDateTime - actualDateTime)
				, secday = 86400
				, sechour = 3600
				, days = parseInt(range / secday)
				, hours = parseInt((range % secday) / sechour)
				, min = parseInt(((range % secday) % sechour) / 60)
				, sec = ((range % secday) % sechour) % 60;
			return [nol(days), nol(hours), nol(min), nol(sec)];

		}
	});
	$('#flipcountdownbox2').flipcountdown({
		size: 'sm'
		, tick: function customTick(dateStr) {
			var nol = function (h) {
				return h > 9 ? h : '0' + h;
			}
			var beforeDateTime = Math.round((new Date('03/10/2017 00:00:00')).getTime() / 1000);
			var actualDateTime = Math.round((new Date()).getTime() / 1000);
			if (beforeDateTime < actualDateTime) {
				return [nol(0), nol(0), nol(0), nol(0)];
			}
			var range = Math.max(0, beforeDateTime - actualDateTime)
				, secday = 86400
				, sechour = 3600
				, days = parseInt(range / secday)
				, hours = parseInt((range % secday) / sechour)
				, min = parseInt(((range % secday) % sechour) / 60)
				, sec = ((range % secday) % sechour) % 60;
			return [nol(days), nol(hours), nol(min), nol(sec)];

		}
	});

	// gallery
	// This will create a single gallery from all elements that have class "gallery-item"
	$('.gallery-item').magnificPopup({
		type: 'image'
		, gallery: {
			enabled: true
		}
	});

});

function isInFuture(events) {
	var today = new Date();
	return events.startDateFormatted >= today;
}

// carousel im lg layout
$(function () {
	$('#vorstand-lg-carousel > div').each(function () {
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