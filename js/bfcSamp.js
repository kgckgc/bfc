/*===================================================================================================================
 * @name: bfcSamp
 * @desc: 
 * @type: jQuery
 * @author: Kim Gwang-Cheon (KGC), Korean
 * @demo: http:/....
 * @version: 1.0
 * @requires jQuery x.x.x
 * @since: 2017.06.26
 *==================================================================================================================*/
;(function($) {
	'use strict';
	
	$.fn.bfcSamp = function(options, callback) {
  
		// Parameter Arrange
		if($.isFunction(options)) {
			callback = options;
			options = null;
		}

		// Options
		var o = $.extend({}, $.fn.bfcSamp.defaults, options);


		// Variables
		var $self     	= this
			, d			= $(document)
			, w 		= window
			, $w		= $(w)
			, wH		= windowHeight()
			, wW		= windowWidth()
		;

		// Public Functions
		$popup.close = function() {
			close();
		};
    
  };

  // Default Options
  $.fn.bfcSamp.defaults = {
      onClose: 		false
    , onOpen: 		false
  };
})(jQuery);
