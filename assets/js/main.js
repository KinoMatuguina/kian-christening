
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
						   speed: 1000,
						  fade: true,
						  cssEase: 'linear',
						  infinite: true,
						  autoplay: true,
						  slidesToShow: 1,
						  prevArrow: false,
						  nextArrow: false
					});

					$('#about').slick({
						  slide: 'div',
						  dots: false,
						  infinite: true,
						  autoplay: true,
						  // centerMode: true,
  						  // centerPadding: '',
						  slidesToShow: 3,
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
	        	backToTop:function() {
	        		$('header #title').on('click', function() {
								$('html, body').animate({
								    scrollTop: ($('.intro').offset().top)
								},500);
	        		});
	        	},

	        	scrolled: function() {
	        		$('.head-collapse ul li').each(function() {
	        			// console.log($(this));
	        			var getClass = '';
	        			$(this).on('click', function() {
	        				$('.head-collapse').hide();
	        				$('.burger-navigation').removeClass('active');
	        				x.nav.attr('data-icon','a');
	        				getClass = $(this).children('a').attr('class');
	        				// console.log(getClass);
	        				$('.head-collapse ul li').removeClass('active');
	        				$(this).addClass('active');
	        				$('html, body').animate({
								    scrollTop: ($('#' + getClass).offset().top - 70)
								},500);
	        			});
	        		});
	        	}

        }

        
        	main.slick();
        	main.toggle();
        	main.backToTop();
        	main.scrolled();

    }

}(jQuery));