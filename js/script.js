$(document).ready(function () {
	$("#logo, #main-menu").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href');
		var	top = $(id).offset().top
		$('body,html').animate({
			scrollTop: top
		}, 1000);
	});
});

$(document).ready(function() {
		$('.menu-trigger').click(function() {
		$('header nav ul').slideToggle(500);
	});
});

$('.preview-slider').slick({
	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 3000,
	pauseOnFocus: false,
	pauseOnHover: false,
	dots: true, 
	arrows: false
});

$('.testimotials-slider').slick({
	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnFocus: false,
	dots: true, 
	arrows: true
});

lightbox.option({
	'wrapAround': true
})