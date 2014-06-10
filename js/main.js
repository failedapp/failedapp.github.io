$(document).ready(function() {
	$(".fancybox").fancybox();
	
	$('body').plusAnchor({
		easing:'easeInOutExpo',
		speed:1000
	});

	$('#nav-menu a').click(function(){
		$('#nav-menu a.active').removeClass('active');
		$(this).addClass('active');
	});

	$('.flexslider').flexslider({
        animation: "slide",
        touch: true,
        slideshow: true,
		slideshowSpeed: 4000,        
		animationSpeed: 600,
		controlNav: false,
		directionNav: false,
     });
});