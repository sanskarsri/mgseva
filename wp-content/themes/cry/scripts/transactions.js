var dataObject = {};
var userCountryLocation;
initDonateForm();
processDonateForm();

function initDonateForm() {
    setEndDate();
    var wpcf7Elm = document.querySelector('.wpcf7');

    dataObject['additionalNote'] = 'N/A';

    wpcf7Elm.addEventListener('wpcf7submit', function (event) {
        event.preventDefault();
        if (event.detail.status != 'validation_failed') {
            captureDonorDetails();
            showDonateTab(3);
        }
    }, false);
}

function processDonateForm() {
    $(document).off().on('click', '.btn-donate', function (e) {
        $('.payment-method-error').removeClass('show');
        if ($('.donate-payment-options.selected .donate-payment-option').hasClass('selected') && endDateIsValid()) {
            dataObject = createDataObject();
            sendDonateData(JSON.stringify(dataObject));
        } else {
            $('.payment-method-error').addClass('show');
        }
    });
}

function setEndDate() {
    if ($('.recurring-end-date').length) {
        var dtToday = new Date();

        var month = dtToday.getMonth() + 1;
        var day = dtToday.getDate();
        var year = dtToday.getFullYear();
        if (month < 10)
            month = '0' + month.toString();
        if (day < 10)
            day = '0' + day.toString();

        var maxDate = year + '-' + month + '-' + day;
        $('.recurring-end-date').attr('min', maxDate);
    }
}

function endDateIsValid() {
    if ($('.donate-payment-option.selected').attr('data-end-date') == 'true') {
        var fieldVal = $('.donate-payment-option.selected .recurring-end-date').val();
        if (fieldVal) {
            if (isFutureDate(fieldVal)) {
                dataObject['endDate'] = fieldVal;
                return true;
            } else
                return false;
        } else
            return false;
    } else
        return true;
}

function isFutureDate(value) {
    dateNow = new Date();
    dateInput = new Date(value)
    return dateNow.getTime() <= dateInput.getTime();
}

function captureDonorDetails() {
    //Donor Details
    dataObject['title'] = $('#title').val();
    dataObject['firstName'] = $('#first-name').val();
    dataObject['lastName'] = $('#last-name').val();
    dataObject['location'] = $('#location').val();
    dataObject['citizenship'] = $('#citizenship').val();
    dataObject['dateOfBirth'] = $('#date-of-birth').val();
    dataObject['email'] = $('#email').val();
    dataObject['address1'] = $('#address-1').val();
    dataObject['address2'] = $('#address-2').val();
    dataObject['address'] = $('#address-1').val() + ' ' + $('#address-2').val();
    dataObject['city'] = $('#city').val();
    if (dataObject['location'] == 'Within India')
        dataObject['country'] = "INDIA";
    else
        dataObject['country'] = $('#country').val();
    dataObject['aadhar'] = $('#aadhar').val();

    if (dataObject['location'] == "Within India") {
        dataObject['state'] = $('#indian-states').val();
        dataObject['pincode'] = $('#pincode-india').val();
        dataObject['phoneNumber'] = $('#phone-number').val();
        dataObject['pan'] = $('#pan').val();
    } else {
        dataObject['state'] = $('#international-state').val();
        dataObject['pincode'] = $('#pincode-international').val();
        dataObject['phoneNumber'] = $('#phone-number-international').val();
        dataObject['pan'] = $('#pan-international').val();
    }
}

function populateDonorForm() {
    //Donor Details
    $('#title').val(dataObject['title']);
    $('#first-name').val(dataObject['firstName']);
    $('#last-name').val(dataObject['lastName']);
    $('#location').val(dataObject['location']);
    $('#citizenship').val(dataObject['citizenship']);
    $('#date-of-birth').val(dataObject['dateOfBirth']);
    $('#email').val(dataObject['email']);
    $('#phone-number').val(dataObject['phoneNumber']);
    $('#phone-number-international').val(dataObject['phoneNumber']);
    $('#address-1').val(dataObject['address1']);
    $('#address-2').val(dataObject['address2']);
    $('#city').val(dataObject['city']);
    $('#country').val(dataObject['country']);
    $('#pincode-india').val(dataObject['pincode']);
    $('#pincode-international').val(dataObject['pincode']);
    $('#pan').val(dataObject['pan']);
    $('#pan-international').val(dataObject['pan']);
    $('#indian-states').val(dataObject['state']);
    $('#international-state').val(dataObject['state']);
    $('#citizenship').val(dataObject['citizenship']);

    if (dataObject['location'] == "Within India") {
        $('#indian-states').val(dataObject['state']);
    } else {
        $('#international-state').val(dataObject['state']);
    }

    var ele;
    $('.form-field').each(function () {
        ele = $(this);
        if (ele.val())
            ele.addClass('form-field-has-val');
    });

}

function createDataObject() {
    //Payment Details
    dataObject['donateFrequency'] = $('.donate-steps-frequency.selected').attr('data-val');
    dataObject['donateYears'] = $('.donate-form-options.selected .donate-form-field .form-field.support_years').val();
    dataObject['donateAmount'] = $('#donation-amount').val();	
    dataObject['paymentMethod'] = $('.donate-payment-option.selected').attr('data-val');
    dataObject['donatePurpose'] = $('.donate-form-details p').html();
	dataObject['meRegion'] = $('#me-region').val();	

    //UTM Details
    dataObject['campaign'] = getUrlParameter('utm_campaign');
    dataObject['utmSource'] = getUrlParameter('utm_source');
    dataObject['utmMedium'] = getUrlParameter('utm_medium');
    dataObject['utmCampaign'] = getUrlParameter('utm_campaign');
    dataObject['utmTerm'] = getUrlParameter('utm_term');
    dataObject['utmContent'] = getUrlParameter('utm_content');

    //Misc Details
    var purl = window.location.pathname;
	//alert(purl);
	var purlstr = purl.toString();
    purlstr = purlstr.split("%20").join("");
    //alert("URL without spaces:- "+purlstr);
    //dataObject['pageURL'] = window.location.pathname;
	dataObject['pageURL'] = purlstr;
    dataObject['ipAddress'] = userIPAddress;
    dataObject['deviceOS'] = navigator.platform;
    dataObject['deviceDetails'] = navigator.userAgent;

    return dataObject;
}



function getUserIPAddress() {
    //Get IP Address
    $.getJSON("https://api.ipify.org?format=json", function (data) {
        userIPAddress = data.ip;
    });
}


var currentCurrencyRate = 1;
var baseRate = 1;

function detectCurrency() {
	var minimumDonationAmountINR = parseInt($('.minimum-donation-amount').attr('data-val'));
	//alert("minimumDonationAmountINR "+minimumDonationAmountINR);
    var detectedCurrency;
	
	$(document).on('change', '.donate-form-options.selected .donate-form-field .form-field', function () {
        		indianAmount = $(this).val();
        		//alert('2 other amount form-field onchange  == '+indianAmount+" == "+detectedCurrency);
        		$('.donate-form-options.selected .donate-form-field .form-field-converted').attr('data-amount-val', indianAmount);
        	});
	
	//commented currency conversion option on Aug 26 2020
	/* $.getJSON('https://ipapi.co/json/', function (data) {
        detectedCurrency = data.currency;
        userCountryLocation = data.country;
		
		// https://openexchangerates.org/api/latest.json?app_id=6f049e58d360468fa24f76f8b9f2f69e  OpenExchangeRates app id provided by Ankeet
		// https://openexchangerates.org/api/latest.json?app_id=1504d93581b84e88829886dddacae311  OpenExchangeRates app id provided by CRY
        if (detectedCurrency != 'INR') {
            $.getJSON(
                'https://openexchangerates.org/api/latest.json?app_id=6f049e58d360468fa24f76f8b9f2f69e',
                function (currencyRates) {
                    var ele;
                    baseRate = currencyRates.rates.INR;
                    currentCurrencyRate = currencyRates.rates[detectedCurrency];
                    var indianAmount, calculatedCurrency;

                    var currencyOptions = {};
                    currencyOptions['INR'] = currencyRates.rates['INR'];
                    currencyOptions['USD'] = currencyRates.rates['USD'];
                    currencyOptions['EUR'] = currencyRates.rates['EUR'];
                    currencyOptions['GBP'] = currencyRates.rates['GBP'];
                    currencyOptions['AED'] = currencyRates.rates['AED'];
                    currencyOptions['AUD'] = currencyRates.rates['AUD'];
                    currencyOptions['SGD'] = currencyRates.rates['SGD'];

                    $.each(currencyOptions, function (key, value) {
                        $('.currency-select').append('<option value="' + value + '">' + key + '</option>')
                    });
                    $('.currency-select').addClass('show')
						
                    var currencyOption;
                    $(document).on('change', '.currency-select', function () {
                        currencyOption = $(this).find(":selected");
                        currentCurrencyRate = currencyOption.val();
                        detectedCurrency = currencyOption.text();
                        //alert('other amount form-field onchange == '+otherAmount+" == "+currentCurrencyRate+" == "+baseRate+" == "+calculatedCurrency+" == "+detectedCurrency);
                        
                        $('.donate-form-amount').each(function () {
                            ele = $(this);

                            indianAmount = ele.attr('data-amount-val');
							//alert("indianAmount "+indianAmount);
                            calculatedCurrency = (parseInt(indianAmount) * (currentCurrencyRate / baseRate));
						    //alert("calculatedCurrency "+calculatedCurrency);
							
							
				
							
                            ele.find('em').html(detectedCurrency + ' ');
                            $('.donate-form-field label.other-amount').html(detectedCurrency).addClass('small-label');
                            ele.find('.donate-form-val').html(Math.trunc(calculatedCurrency)).attr('donate-amount-val', calculatedCurrency);
                            $('.selected-donation-amount em').html(detectedCurrency + ' ');
                        });
						
						var minAmountcalculatedCurrency = parseInt(Math.round((minimumDonationAmountINR) * (currentCurrencyRate / baseRate)));
						$('.minimum-donation-amount').attr('data-val', minAmountcalculatedCurrency);
						//$('.donation-amount-error').html("Transactions below "+detectedCurrency+" "+minAmountcalculatedCurrency+" is not financially viable for us to process.");
						//alert("1 minAmountcalculatedCurrency "+minAmountcalculatedCurrency);
						
						//onchange currency selection otherAmount field value converting to detected currecny
						var otherAmount = $('.donate-form-options.selected .donate-form-field .form-field').val();
						if(otherAmount){  
                    		calculatedCurrency = parseInt(Math.ceil(otherAmount * ( baseRate / currentCurrencyRate )));
                    		//alert('other amount form-field onchange == '+otherAmount+" == "+currentCurrencyRate+" == "+baseRate+" == "+calculatedCurrency+" == "+detectedCurrency);
                    		$('.donate-form-options.selected .donate-form-field .form-field-converted').attr('data-amount-val', calculatedCurrency);
                    	}
                    });

                    $('.donate-form-amount').each(function () {
                        ele = $(this);

                        indianAmount = ele.find('.donate-form-val').html();
                        calculatedCurrency = (parseInt(indianAmount) * (currentCurrencyRate / baseRate));

                        ele.find('em').html(detectedCurrency + ' ');
                        ele.find('.donate-form-val').html(Math.trunc(calculatedCurrency)).attr('donate-amount-val', calculatedCurrency);
                        $('.foreign-currency-disclaimer').removeClass('hide');
                    });
					
                    //For other Amount field converting INR to other currency
                    $(document).on('change', '.donate-form-options.selected .donate-form-field .form-field', function () {
                    	indianAmount = $(this).val();
                    	calculatedCurrency = parseInt(Math.ceil(indianAmount * ( baseRate / currentCurrencyRate )));
                    	//alert('1 other amount form-field onchange == '+indianAmount+" == "+currentCurrencyRate+" == "+baseRate+" == "+calculatedCurrency+" == "+detectedCurrency);
                    	$('.donate-form-options.selected .donate-form-field .form-field-converted').attr('data-amount-val', calculatedCurrency);
                    	
                    });

					 var minAmountcalculatedCurrency = parseInt(Math.round((minimumDonationAmountINR) * (currentCurrencyRate / baseRate)));
					 $('.minimum-donation-amount').attr('data-val', minAmountcalculatedCurrency);
					 //$('.donation-amount-error').html("Transactions below "+detectedCurrency+" "+minAmountcalculatedCurrency+" is not financially viable for us to process.");
					 //alert("2 minAmountcalculatedCurrency "+minAmountcalculatedCurrency);
				
                }
            );
            $('.selected-donation-amount em').html(detectedCurrency + ' ');
            $('.donate-form-field label.other-amount').html(detectedCurrency).addClass('small-label');
        }else{
        	//For other Amount field, keep INR value as it is
        	$(document).on('change', '.donate-form-options.selected .donate-form-field .form-field', function () {
        		indianAmount = $(this).val();
        		//alert('2 other amount form-field onchange  == '+indianAmount+" == "+detectedCurrency);
        		$('.donate-form-options.selected .donate-form-field .form-field-converted').attr('data-amount-val', indianAmount);
        	});
        }

    }); */ //end of currency conversion Aug 26 2021
}

function sendDonateData(dataObject) {
    dataObject = JSON.parse(dataObject);

    var $form = $('<form>', {
        action: '/redirect',
        method: 'post'
    });

    $.each(dataObject, function (key, val) {
        $('<input>').attr({
            type: "hidden",
            name: key,
            value: val
        }).appendTo($form);
    });

    $form.appendTo('body').submit();
}
$(document).ready(function() {
$(".donate-form-option-new").click(function() {
	//alert("");
$('.btn.btn-primary').prop('disabled', false);
$("#low-donation-warning").hide();
});
});
$('.otheramo').keyup(function() {
	//alert("");
$('#donationvalue').val($(this).val());
var donationamount = $(".otheramo").val();
if (donationamount < '500') {
$("#low-donation-warning").show();
$('.btn.btn-primary').prop('disabled', true);
}
if (donationamount > 50 && donationamount < 100) {
$("#low-donation-warning").show();
$('.btn.btn-primary').prop('disabled', true);
}
if (donationamount > 499) {
$("#low-donation-warning").hide();
$('.btn.btn-primary').prop('disabled', false);
}
});
