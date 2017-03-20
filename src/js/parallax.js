(function($){

	$.fn.Parallax = function(options) {

		// cache selector
		var obj = $(this);

		// check if object exists
		if(obj.length <= 0) return;

		// merge defaults with custom vars
		options = $.extend({}, $.fn.Parallax.defaults, options);
		options.startPos = obj.offset().top + options.delay;

		// bind scroll event to update position
		$(window).bind('scroll', updatePosition);

		// listen for screen resize
		$(window).resize(function() { 

			if($(window).width() <= 400) {
				options.disable = false;
				obj.removeAttr('style');
			} else {
				options.disable = false;
				updatePosition();
			}

		});

		// update element position
		function updatePosition() {
			
			if(options.disable) return false;

			var scrollTop = $(window).scrollTop();

			if(scrollTop > options.startPos) {
				
				obj.css('-webkit-transform', 'translate3d(0,' + getPosition() + 'px,0)')
				   .css('transform', 'translate3d(0,' + getPosition() + 'px,0)');
			
			} else {
				
				obj.css('-webkit-transform', 'translate3d(0,' + getPosition() + 'px,0)')
				   .css('transform', 'translate3d(0,' + getPosition() + 'px,0)');
			
			}

		}

		// get new position
		function getPosition() {
	
			// Calculate new position based on speed / scroll position / start position
			return ($(window).scrollTop() * options.speed) - (options.startPos * options.speed) + options.start;

		};

		return obj.each(function(){

			updatePosition();

		});

	}

	$.fn.Parallax.defaults = {
		disable: false,
		property:'top', 
		speed:0.2, 
		start:0, 
		delay:0
	}; 


})(jQuery);