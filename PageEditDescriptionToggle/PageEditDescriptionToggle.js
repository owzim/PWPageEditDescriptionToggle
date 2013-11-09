(function ($, window, undefined) { // own scope with self executing function

	$(function (){ // dom ready

		var $pageEditForm = $('#ProcessPageEdit');

		if($pageEditForm.length > 0) { // only do stuff when #ProcessPageEdit is present

			$pageEditForm.find('.Inputfield').each(function(iterator, element) {

				var $e = $(element), // wrap current element into jquery
					$description = $e.find('.description'),
					$header =  $e.find('.InputfieldHeader');

				if($description.length > 0) { // only do stuff when description is presend

					// create the questionmark
					var $qm = $('<div>').html('?').attr({
						title: 'Help',
						class: 'description-toggle',
					});
					
					// create the questionmark, ui-button-style, does not look too good
					// var $qm = $('<div>').html('<span class="ui-button-text">?</span>').attr({
					// 	title: 'Help',
					// 	class: 'description-toggle ui-button ui-widget ui-corner-all head_button_clone ui-state-default',
					// });

					// append the questionmark to the input field header
					$header.eq(0).append($qm);

					// hide description by default
					$description.hide();

					$qm.click(function(e) {
						// prevent header toggle to be fired
						e.stopImmediatePropagation();

						// show or hide description with a fast animation
						$description.toggle('fast');

					}); // click handler end

				} // if end

			});	// each end

		} // if end

	}); // dom ready end

})(jQuery, window); // self executing function end