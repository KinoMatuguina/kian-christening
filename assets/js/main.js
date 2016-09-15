
(function($) {
    'use strict';


    $.fn.christening = function(options) {
    	var _this = this,
            defaults = {
                //Basic variables
                nav: $('.burger-navigation'),
                nav_collapse: $('.head-collapse'),
                THIS: $(this)
            },
            x = this.config = $.extend(defaults, options),

        	main = {

	        	slick: function() {

	        		$('.single-item').slick({
						  slide: 'div',
						  dots: false,
						  infinite: true,
						  autoplay: true,
						  slidesToShow: 1,
						  prevArrow: false,
						  nextArrow: false
					});

	        	},

	        	toggle: function() {

	        		x.nav.on('click', function(){
	        			x.nav.toggleClass('active');
	        				if (x.nav.is('.active')) {
	        					x.nav_collapse.slideDown('fast');
	        				} else {
	        					x.nav_collapse.slideUp('fast');
	        				}
	        		});
	        	}

        }

        
        	main.slick();
        	main.toggle();

    }

}(jQuery));