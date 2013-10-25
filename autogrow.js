(function($) {
	$.fn.autoGrow = function() {
		
		//create the text holder element if it doesn't exist
		if ($('#textarea_height_holder_box').length == 0) {
			$('body').append('<div id="textarea_height_holder_box">test</div>')
			$('#textarea_height_holder_box').css('display', 'none')
		}
		
		//set textarea precondition values
		//first make sure the holder box has matched css rules to make sure min-height is properly set
		$('#textarea_height_holder_box').css({
			width: $(this).css('width'),
			padding: $(this).css('padding'),
			'font-size': $(this).css('font-size'),
			'font-family': $(this).css('font-family'),
			'font-weight': $(this).css('font-weight'),
			'letter-spacing': $(this).css('letter-spacing'),
			'word-spacing': $(this).css('word-spacing'),
			'line-height': $(this).css('line-height'),
			'text-indent': $(this).css('text-indent'),
			'white-space': $(this).css('white-space'),
			'word-wrap': $(this).css('word-wrap'),
			'text-align': $(this).css('text-align')
		})
		//then set the textareas values
		this.css({
			overflow: 'hidden',
			resize: 'none',
			'min-height': $('#textarea_height_holder_box').height() + 'px',
			'height': $('#textarea_height_holder_box').height() + 'px',
			'vertical-align': 'top'
		})
		
		//create listeners to set heights equal
		
		this.live('focus', function() {
			//set holder elements text properties to match those of the textarea
			$('#textarea_height_holder_box').css({
				width: $(this).css('width'),
				padding: $(this).css('padding'),
				'font-size': $(this).css('font-size'),
				'font-family': $(this).css('font-family'),
				'font-weight': $(this).css('font-weight'),
				'letter-spacing': $(this).css('letter-spacing'),
				'word-spacing': $(this).css('word-spacing'),
				'line-height': $(this).css('line-height'),
				'text-indent': $(this).css('text-indent'),
				'white-space': $(this).css('white-space'),
				'word-wrap': $(this).css('word-wrap'),
				'text-align': $(this).css('text-align')
			})
			currentVal = $(this).val()
			$('#textarea_height_holder_box').html(currentVal)
			boxheight = $('#textarea_height_holder_box').height()
			$(this).css('height', boxheight + 'px')
		})
		
		//also use keypress to avoid setting vars every time key is pressed  --  keypress doen't catch backspace on all browsers
		this.live('keypress', function(e) {
			var keyCode = e.which
			//prevent doubled space characters
			//CHANGE THIS TO CHECK VALUE AGAINST CHARACTERS TO LEFT&RIGHT OF CARAT, NOT AT END OF STRING
			if (keyCode == 32 && $(this).val().substr($(this).val().length - 1) == ' ') {
				e.preventDefault()
				console.log('trig')
			}
			//prevent return press
			else if (keyCode == 13) {
				e.preventDefault()
			}
			else {
				var currentVal = $(this).val() + String.fromCharCode(e.which)
				if (currentVal != '') {
					$('#textarea_height_holder_box').html(currentVal)
					boxheight = $('#textarea_height_holder_box').height()
					$(this).css('height', boxheight + 'px')
				}
				else {
					$(this).height($(this).css('min-height'))
				}
			}
		})
		this.live('keyup', function(e) {
			var keyCode = e.which
			if (keyCode == 8) {
				var currentVal = $(this).val()
				$('#textarea_height_holder_box').html(currentVal)
				boxheight = $('#textarea_height_holder_box').height()
				$(this).css('height', boxheight + 'px')
			}
		})
	}
})(jQuery)
