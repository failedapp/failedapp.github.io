$(document).ready(function() {

	$('body').plusAnchor({
		easing:'easeInOutExpo',
		speed:1000
	});

	$('#nav-menu a').click(function(){
		$('#nav-menu a.active').removeClass('active');
		$(this).addClass('active');
	});
});