$(document).ready(function() {
	$(".fancybox").fancybox( {
		openEffect : 'elastic',
		closeEffect : 'elastic',
	});
	$(".fancybox-iframe").fancybox({
        type: 'iframe',
        autoSize : false,
		 openEffect : 'elastic',
		 closeEffect : 'elastic',
        beforeLoad : function() {         
                this.width  = 650;
                this.height = 400;
		}
    });
	$(".fancybox-iframe-lg").fancybox({
        type: 'iframe',
        autoSize : false,
		 openEffect : 'fade',
		 closeEffect : 'fade',
        beforeLoad : function() {         
                this.width  = 1000;
                this.height = 680;
		}
    });
});


