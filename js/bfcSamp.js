/*===================================================================================================================
 * @name: bfcSamp
 * @desc: 
 * @type: jQuery
 * @author: Kim Gwang-Cheon (KGC), Korean
 * @demo: http:/....
 * @version: 1.0
 * @requires jQuery x.x.x
 * @since: 2017.06.26
 * @see: https://github.com/dinbror/bpopup/blob/master/jquery.bpopup.js
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
		$self.closeSamp = function() {
            close();
		};

		// Return
		return $self.each(function() {
            if($(this).data('bPopup')) return;		// already exists?
            init();
        });
		
		// Private Functions
		function init() {
		}
		function close() {
			triggerCall(o.onClose);
		}
		function triggerCall(func, arg) {
			$.isFunction(func) && func.call($self, arg);
		};

    };

    // Default Options
    $.fn.bfcSamp.defaults = {
        onClose: 			false		// callback function 초기
        , onOpen: 			false
		, loadCallback: 	false
    };
	
	
})(jQuery);
