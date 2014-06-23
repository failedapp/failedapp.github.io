// jQuery
$(document).ready(function() {
	$(".fancybox").fancybox();
	// Animated Scroll
	$('body').plusAnchor({
        easing: 'easeInOutExpo',
        speed:  1000
    });
	/*** Quotes-Slider ***/
	$('.flexslider').flexslider({
        animation: "slide",
        touch: true,
        slideshow: true,
		slideshowSpeed: 5000,        
		animationSpeed: 2000,
		controlNav: false,
		directionNav: false,
     });
	// Nav-Menu
	$('#nav-menu a').click(function(){
		$('#nav-menu a.active').removeClass('active');
		$(this).addClass('active');
	});
	// Responsive Nav-Menu
	$('.menu-trigger').click(function() {
		$('#nav-menu').slideToggle('slow');
	});

});