/*
	Marvel Theme Scripts
*/

(function($){ "use strict";
             
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

/*=========================================================================
    Isotope Active
=========================================================================*/
	$('.portfolio-items').imagesLoaded(function() {

		 // Add isotope click function
		$('.portfolio-filter li').click(function(){
	        $(".portfolio-filter li").removeClass("active");
	        $(this).addClass("active");
	 
	        var selector = $(this).attr('data-filter');
	        $(".portfolio-items").isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false,
	            }
	        });
	        return false;
	    });

	    $(".portfolio-items").isotope({
	        itemSelector: '.single-item',
	        layoutMode: 'masonry',
	    });
	});
/*=========================================================================
    Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});

/*=========================================================================
    Active venobox
=========================================================================*/
	var vbSelector = $('.img-popup');
	vbSelector.venobox({
		numeratio: true,
		infinigall: true
	});      
 
/*=========================================================================
    wow Settings
=========================================================================*/
    var wow = new WOW( {
        mobile: false,
        offset: 0
    });
    wow.init();
				 
/*=========================================================================
    Scroll To Top
=========================================================================*/     
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

});


/* Disable button 
 $(document).ready(function() {
          $("body").on("contextmenu", function(e) {
              return false;
            });
        });
*/ 
