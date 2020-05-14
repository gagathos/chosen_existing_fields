(function ($) {
	Drupal.behaviors.toggleChosen = {
			attach: function (context, settings) {
				$('.chosen-existing-fields-toggle', context).click((evt) => {
					if($(evt.target).hasClass('chosen-existing-fields-enabled')) {
						//remove chosen
						$(evt.target).removeClass('chosen-existing-fields-enabled');
						$('#edit-fields-add-existing-field-field-name', context).chosen('destroy');

					} else {
						//add chosen
						$('#edit-fields-add-existing-field-field-name', context).chosen();
						$(evt.target).addClass('chosen-existing-fields-enabled');
					}
				});
				
			}
	};

})(jQuery);