$(document).ready(function () {

	redrawDotNav();

	/* Scroll event handler */
	$(window).bind('scroll', function (e) {
		parallaxScroll();
		redrawDotNav();
	});

	/* Next/prev and primary nav btn click handlers */
	$('a.introduction').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000, function () {
			parallaxScroll(); // Callback is required for iOS
		});
		return false;
	});
	$('a.appearance').click(function () {
		$('html, body').animate({
			scrollTop: $('#appearance').offset().top
		}, 1000, function () {
			parallaxScroll(); // Callback is required for iOS
		});
		return false;
	});
	$('a.develop-history').click(function () {
		$('html, body').animate({
			scrollTop: $('#develop-history').offset().top
		}, 1000, function () {
			parallaxScroll(); // Callback is required for iOS
		});
		return false;
	});
	$('a.features').click(function () {
		$('html, body').animate({
			scrollTop: $('#features').offset().top
		}, 1000, function () {
			parallaxScroll(); // Callback is required for iOS
		});
		return false;
	});

	/* Show/hide dot lav labels on hover */
	$('nav#primary a').hover(
		function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
	);

});

/* Scroll the background layers */
function parallaxScroll() {
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top', (0 - (scrolled * .25)) + 'px');
	$('#parallax-bg2').css('top', (0 - (scrolled * .5)) + 'px');
	$('#parallax-bg3').css('top', (0 - (scrolled * .75)) + 'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav() {
	var section1Top = 0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top = $('#appearance').offset().top - (($('#develop-history').offset().top - $('#appearance').offset().top) / 2);
	var section3Top = $('#develop-history').offset().top - (($('#features').offset().top - $('#develop-history').offset().top) / 2);
	var section4Top = $('#features').offset().top - (($(document).height() - $('#features').offset().top) / 2);;
	$('nav#primary a').removeClass('active');
	if ($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top) {
		$('nav#primary a.introduction').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top) {
		$('nav#primary a.appearance').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top) {
		$('nav#primary a.develop-history').addClass('active');
	} else if ($(document).scrollTop() >= section4Top) {
		$('nav#primary a.features').addClass('active');
	}

}
