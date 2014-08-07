$(window).scroll(function() {
	$('.aptitude-bars').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+600) {
			$('.apt-bar').addClass("animate-apt-bars");
		}
	});
});
$(window).scroll(function() {
	$('.aptitude-bars-2').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+900) {
			$('.apt-bar-2').addClass("animate-apt-bars-2");
		}
	});
});
