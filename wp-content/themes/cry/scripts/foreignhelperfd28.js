function foreignHelper(hide) {
	var hide = hide === undefined ? false : hide;

	var itemsToHide = ['.donate-form-tax', '.testtest', '.donate-push-wrapper', '.donate-form-options-title', '.btn-donate', '.donate-payment-options'];
	var itemsToShowWhenHidden = ['.foreign_monthly_message', '.foreign_monthly_message .btn-donate'];

	var init = () => {
		var frequency = jQuery('span.donate-steps-frequency.selected').data('val');
		if (frequency != "one-time") {
			frequency = "recurring";
		}
		jQuery('.wpcf7-submit').val(hide ? 'Submit' : 'Continue to Payment');
		for(var idx in itemsToHide) {
			var item = itemsToHide[idx];
			if (hide) {
				$(item).hide();
			} else {
				$(item).show();
			}
		}
		if (!hide) {
			$('.donate-payment-options').hide().removeClass('selected');
			$('.donate-payment-options[data-frequency=' + frequency + ']').show().addClass('selected');
		}
		for(var idx in itemsToShowWhenHidden) {
			var item = itemsToShowWhenHidden[idx];
			if (hide) {
				$(item).show();
			} else {
				$(item).hide();
			}
		}
	};
	setTimeout(init, 100);

}

function foreignHelperInit(complete) {
	var complete = complete === undefined ? false : complete;
	if (complete) {
		jQuery('body').on('click', 'span.donate-steps-frequency', () => {
			setTimeout(() => {
				var frequency = jQuery('span.donate-steps-frequency.selected').data('val');
				foreignHelper(frequency != "one-time")
			}, 100);
		});
	} else {
		jQuery('body').on('change', '#citizenship', (e) => {
			setTimeout(() => {
				var frequency = jQuery('span.donate-steps-frequency.selected').data('val');
				foreignHelper(e.target.value != "Indian Citizen" && frequency != "one-time");
			}, 100);
		});
		jQuery('body').on('click', 'span.donate-steps-frequency', () => {
			setTimeout(() => {
				var citizenship = jQuery('#citizenship').val();
				var isForeign = ['', "Indian Citizen"].indexOf(citizenship) < 0;
				var frequency = jQuery('span.donate-steps-frequency.selected').data('val');
				// console.log(frequency, citizenship, ['', "Indian Citizen"].indexOf(citizenship) < 0, frequency != "one-time");
				foreignHelper([isForeign, frequency != "one-time"].indexOf(false) < 0); // my editor is having problems if i put &&., some work around for now.
			}, 200);
		});
	}
}

// jQuery(() => foreignHelper(jQuery('span.donate-steps-frequency.selected').data('val') == "monthly"));