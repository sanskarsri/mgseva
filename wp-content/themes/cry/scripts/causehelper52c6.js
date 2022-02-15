jQuery(function() {
    var $ = jQuery;
    $('select.causes').on('change', function(e) {
        var causeIndex = e.target.value;
        var frequency = $('.donate-steps-frequency.selected').data("val");
        $('.donate-form-options[data-val='+ frequency +'] .donate-form-option').removeClass('selected');
        $('.donate-form-options[data-val='+ frequency +'] .donate-form-option[data-cause]').hide();
        $('.donate-form-options[data-val='+ frequency +'] .donate-form-option[data-cause='+causeIndex+']').show();
        $('.donate-form-options[data-val='+ frequency +'] .donate-form-option[data-cause='+causeIndex+']:nth-child(1)').addClass("selected");
    });
    $('.donate-form-options .donate-form-option[data-cause]:not([data-cause=0])').hide();
});