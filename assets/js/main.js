
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
	        					x.nav.attr('data-icon','M');
	        					x.nav_collapse.slideDown('fast');
	        				} else {
	        					x.nav.attr('data-icon','a');
	        					x.nav_collapse.slideUp('fast');
	        				}
	        		});
	        	},

	        	fadeinSlideUp: function() {
	        		var about = $('#about'),
	        			offset = about.offset();

	        		$(window).scroll(function(e){
	        			var counter = 0;
						var imagesCount = setInterval(function(){
						  $('#about').children('div').eq(counter).addClass('fadeInUp');
						  counter++;
						  $('.fadeInUp').animate({opacity: "1"}, 1000);

						  if (counter === 3) {
						  	$('#about').children('div').removeClass('fadeInUp').addClass('stick');
						    clearInterval(imagesCount);
						
						  }
						}, 1000);
	        		})
					
	        	}

        }

        
        	main.slick();
        	main.toggle();
        	main.fadeinSlideUp();

    }

}(jQuery));