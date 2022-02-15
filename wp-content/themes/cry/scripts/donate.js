var userIPAddress;
var isBirdfnActive = false;
var meregion = $('.me-region-code').attr('data-val');
//alert("MeRegion: "+meregion);
var donationpaymentgateway = $('.donate-payment-option.selected').attr('data-val');
//alert("Donation Payment Gateway: "+donationpaymentgateway);
$(document).ready(function () {
    clearBirdfnSessions();
    stickyDonateForm();
    initDonateOwlCarousel();
    selectDonationOption();
    selectDonatePaymentOption();
    getUserIPAddress();
    detectCurrency();
    detectUserDonationPage();
    clearMessage();
	//panpopupvalidate();
	//panpopupvalidate1();
	/*var pathName = window.location.pathname;
    var isForeignPage = pathName.indexOf("foreign-");
	if (isForeignPage >= 0) {
		$('select#citizenship').children('option[value="Indian Citizen"]').remove();
	} 
	else {
	    $('select#citizenship').children('option[value="Foreign Citizen"]').remove();	
	}*/
	
	
	selectedDonationAmount = getSelectedDonationAmount();
		var amo = selectedDonationAmount[5];

var url = window.location.href;  
//console.log("url"+url);		 
$('input#donation-page-url').attr("value",url); 	
});
$(window).load(function () {
    stickyDonateForm();
});


function pan_blink_text() {
    $('.pan-blink').fadeOut(500);
    $('.pan-blink').fadeIn(500);
}
setInterval(pan_blink_text, 5000);

function clearMessage() {
    $('body').on('mouseup', '.donate-form-option', () => $('.donation-amount-error').hide());
    $('body').on('mouseup', '.donate-form-option', () => $('.donation-amount-empty').hide());
}

function stickyDonateForm() {
    var scrollTop;
    var donateFormOffset = $('.donate-form-wrapper').offset().top;
    var headerHeight = $('header').outerHeight();
    var donateBannerOffset = $('.donate-bottom-img').offset().top - winHeight * 1.25;

    $(window).scroll(function () {

        console.log("donateFormOffset "+donateFormOffset);
        scrollTop = $(window).scrollTop();
        if (scrollTop > headerHeight - 24) {
            $('.donate-form-block').addClass('sticky');
            $('header').addClass('header-fixed');
        } else {
            $('.donate-form-block').removeClass('sticky');
            $('header').removeClass('header-fixed');
        }

        if (scrollTop > donateBannerOffset) {
            $('.donate-form-block').addClass('sticky-relative').css('margin-top', donateBannerOffset + 'px');
        } else {
            $('.donate-form-block').removeClass('sticky-relative').css('margin-top', '0px');
        }
    });
}

function initDonateOwlCarousel() {
    if ($('.home-children-item-wrapper').length)
        $('.home-children-item-wrapper').owlCarousel({
            items: 1,
            loop: !0,
            nav: false,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplayHoverPause: true,
            autoplaySpeed: 1000,
            navSpeed: 1500,
            responsive: !1,
            mouseDrag: !1,
        });
}

function selectDonationOption() {
    var ele, donateInfo;
    $(document).on('click', '.donate-form-option', function () {
        if (this.classList.contains('support_years_field')) return;
        ele = $(this);

        ele.closest('.donate-form-options').find('.donate-form-option').removeClass('selected');
        ele.addClass('selected');
        donateInfo = ele.find('.donate-form-info').html();
        $('.donate-form-details p').html(donateInfo);
    });


    var frequencyIndex;
    $(document).on('click', '.donate-steps-frequency', function () {
        ele = $(this);
        frequencyIndex = ele.index() + 1;

        $('.donate-steps-frequency, .donate-form-options, .donate-payment-options, .donate-form-field').removeClass('selected');
        $('.donate-steps-frequency:nth-child(' + frequencyIndex + ')').addClass('selected');
        $('.donate-form-options:nth-child(' + frequencyIndex + ')').addClass('selected');
        $('.donate-payment-options:nth-child(' + frequencyIndex + ')').addClass('selected');
        $('.donation-amount-error').hide();

        donateInfo = $('.donate-form-options.selected .donate-form-option.selected .donate-form-info').html();
        $('.donate-form-details p').html(donateInfo);
    });
    donateInfo = $('.donate-form-options.selected .donate-form-option.selected .donate-form-info').html();
    $('.donate-form-details p').html(donateInfo);

}

function selectDonatePaymentOption() {
    var ele;

    $(document).on('click', '.donate-payment-option', function () {
        ele = $(this);

        $('.donate-payment-option').removeClass('selected');
        ele.addClass('selected');

        $('.payment-method-error').removeClass('show');
    });
}

function showDonateTab(donateIndex) {
    var selectedTitle, selectedDonationAmount;
    var ele = $('.donate-step:nth-child(' + donateIndex + ')');
    selectedDonationAmount = getSelectedDonationAmount();

    //alert("showDonateTab == "+selectedDonationAmount[0]+" == "+selectedDonationAmount[1]+" == "+selectedDonationAmount[2]+" == "+selectedDonationAmount[3]+" == "+selectedDonationAmount[4]+" == "+selectedDonationAmount[5]);
    
    if (selectedDonationAmount[2]=="") {
    	$('.donation-amount-empty').show();
        $('.donation-amount-empty').html("Please enter other Amount");
        return;
    } else if (selectedDonationAmount[5]) {
        $('.donation-amount-error').show();
        return;
    } else {
        $('.donation-amount-error').hide();
    }

    $('.donate-step').removeClass('selected');

    selectedTitle = ele.find('.donate-step-label').html();
    $('.donate-form-options-title span').html(selectedTitle);
    $('.selected-donation-amount span').html(Math.trunc(selectedDonationAmount[2])).attr('donate-amount-val', selectedDonationAmount[0]);
    $('.selected-donation-frequency').html(selectedDonationAmount[1] + ' Donation' + selectedDonationAmount[4]);

    //Populate hidden fields
    $('#donation-amount').val(selectedDonationAmount[0]);
    $('#donation-frequency').val(selectedDonationAmount[1]);
	$('#me-region').val(meregion);
	$('#donation-payment-gateway').val(donationpaymentgateway);

    changeDonateBullets(donateIndex);
    toggleDonateFrequencyOptions(donateIndex);

    if (donateIndex == 1) {
        $('.donate-form-bullets .btn').removeClass('show');
    } else {
        $('.donate-form-bullets .btn').addClass('show');
    }

    ele.addClass('selected');
}

function goBackDonateTab() {
    var donateIndex = $('.donate-step.selected').index() + 1;
    if (donateIndex == 3)
        populateDonorForm();

    if (donateIndex > 1) {
        donateIndex--;
        showDonateTab(donateIndex);
    }
    if (donateIndex == 1) {
        $('.donate-form-bullets .btn').removeClass('show');
    } else {
        $('.donate-form-bullets .btn').addClass('show');
    }
}


function changeDonateBullets(donateIndex) {
    $('.donate-form-bullets span').removeClass('selected');
    $('.donate-form-bullets span:nth-child(' + donateIndex + ')').addClass('selected');
}

function getSelectedDonationAmount() {
    var selectedDonationAmount = [];
    var minimumDonationAmount = parseInt($('.minimum-donation-amount').attr('data-val'));
    if (isBirdfnActive == true) {
        var birdfnAmount = parseInt($('.donate-form-options.selected .donate-form-amount').attr('data-amount-val'));
        var additionalAmount = parseInt($('.donate-form-options.selected .donate-form-field .form-field').val());

        if (isNaN(additionalAmount))
            additionalAmount = 0;

        selectedDonationAmount[0] = birdfnAmount + additionalAmount;
    } else {
        if (!$('.donate-form-field').hasClass('selected')) {
            selectedDonationAmount[0] = $('.donate-form-options.selected .donate-form-option.selected .donate-form-amount').attr('data-amount-val');
            selectedDonationAmount[2] = $('.donate-form-options.selected .donate-form-option.selected .donate-form-val').html();
        } else {
			if($('.donate-form-options.selected .donate-form-field .form-field-converted').attr('data-amount-val')!="")
			{	
            selectedDonationAmount[0] = $('.donate-form-options.selected .donate-form-field .form-field-converted').attr('data-amount-val');
            }
			else{selectedDonationAmount[0] = $('.donate-form-options.selected .donate-form-field .form-field').val();}
			selectedDonationAmount[2] = $('.donate-form-options.selected .donate-form-field .form-field').val();
			
			//selectedDonationAmount[0] = $('.donate-form-options.selected .donate-form-field .form-field-converted').attr('data-amount-val');
            //selectedDonationAmount[2] = $('.donate-form-options.selected .donate-form-field .form-field').val();
			
			//selectedDonationAmount[0] = $('.donate-form-options.selected .donate-form-field .form-field').val();
            //selectedDonationAmount[2] = $('.donate-form-options.selected .donate-form-field .form-field').val();
        }

        selectedDonationAmount[5] = parseInt(selectedDonationAmount[2]) < minimumDonationAmount;
        //alert("selectedDonationAmount == "+selectedDonationAmount[5]+" == "+selectedDonationAmount[0]+" == "+selectedDonationAmount[2]+" == "+minimumDonationAmount);
        
        if (['quaterly', 'half-yearly'].indexOf($('.donate-steps-frequency.selected').attr('data-val')) > -1) {
            var years = $('.donate-form-options.selected .donate-form-field .form-field.support_years').val();
            selectedDonationAmount[3] = years;
            selectedDonationAmount[4] = " for " + years + " years";
            selectedDonationAmount[0] = $('.donate-steps-frequency.selected').attr('data-val') == "quaterly" ? "" + parseInt(selectedDonationAmount[0]) / 4 : "" + parseInt(selectedDonationAmount[0]) / 2;
            selectedDonationAmount[2] = selectedDonationAmount[0];
        } else {
            selectedDonationAmount[3] = -1;
            selectedDonationAmount[4] = "";
         }
    }

    if ($('.donate-steps-frequency.selected').attr('data-val') == 'monthly') {
        selectedDonationAmount[1] = 'Monthly';
    } else if ($('.donate-steps-frequency.selected').attr('data-val') == 'quaterly') {
        selectedDonationAmount[1] = 'Quaterly';
    } else if ($('.donate-steps-frequency.selected').attr('data-val') == 'half-yearly') {
        selectedDonationAmount[1] = 'Half Yearly';
    } else
        selectedDonationAmount[1] = 'One Time';

    return selectedDonationAmount;
}

function showDonateFAQ() {
    $('.contact-faq-wrapper.donate-page-block').addClass('show');
}

function toggleDonateFrequencyOptions(donateIndex) {
    if (donateIndex == 1) {
        $('.donate-steps-frequency-block').show();
    } else {
        $('.donate-steps-frequency-block').hide();
    }
}


function clearBirdfnSessions() {
    sessionStorage.removeItem('birdfnTransactionID');
    sessionStorage.removeItem('birdfnAmount');
}
/*
function panpopupvalidate() {

	var wpcf7Elm = document.querySelector( '.wpcf7' );
 
wpcf7Elm.addEventListener( 'wpcf7submit', function( event ) {

  var panpopup = $('#pan').val();
if (panpopup=="") {
            $('#PanConfirmModal').show();
			return false;
        }
		else{
			$('#PanConfirmModal').hide();
		//	return true;
		}
		
		
}, false );
  
}*/





/*function panpopupvalidate1() {
	$(document).on('click', '.pacc-button2', function ()
	{
		
	$('#PanConfirmModal').hide();
    	});
	$(document).on('click', '.pacc-button1', function ()
	{
		$('#PanConfirmModal').hide();
	goBackDonateTab();
	$('#pan').focus();
	});
	
  
}*/




function detectUserDonationPage() {
    userCountryLocation;
    var urlArguments = window.location.search;
    $('select#citizenship, select#location').change(function () {
        var selectedVal = $('select#citizenship').val();
		var LselectedVal = $('select#location').val();
		//alert(LselectedVal);
        var tempURL;
        var pathName = window.location.pathname;
        var isForeignPage = pathName.indexOf("foreign-");

        var indianURL, foreignURL;
        if (isForeignPage >= 0) {
            indianURL = pathName.replace('foreign-', '');
            foreignURL = pathName;
        } else {
            indianURL = pathName;
            
            var slashIndex = pathName.lastIndexOf('/', pathName.lastIndexOf('/')-1);
            foreignURL = pathName.substring(0, slashIndex) + '/foreign-' + pathName.substring(slashIndex + 1);
        }

        $('.donor-confirmation-india, .donor-confirmation-indiaC, .donor-confirmation-foreign, .donor-confirmation-foreignC, .donor-confirmation-foreign1').removeClass('show');

         if (isForeignPage >= 0 && selectedVal == 'Indian Citizen') {
            tempURL = indianURL + urlArguments;
            $('.donor-confirmation-india a').attr('href', tempURL);
            $('.donor-confirmation-india').addClass('show');
			$('.donor-confirmation-indiaC').addClass('show');
        } else if (isForeignPage >= 0 && selectedVal == 'Foreign Citizen') {           
			$('.donor-confirmation-foreignC').addClass('show');
        } else if (isForeignPage < 0 && selectedVal == 'Foreign Citizen') {
            tempURL = foreignURL + urlArguments;
            $('.donor-confirmation-foreign a').attr('href', tempURL);
            $('.donor-confirmation-foreign').addClass('show');
			$('.donor-confirmation-foreignC').addClass('show');
        } else if ( isForeignPage < 0 && selectedVal == 'Indian Citizen' ) {
           $('.donor-confirmation-indiaC').addClass('show');
        } else if ( isForeignPage < 0 && selectedVal == 'Non Resident Indian' ) {
           $('.donor-confirmation-foreign1').addClass('show');
        } else{
          
			$('.donor-confirmation-foreign1').removeClass('show');
        }
			
		if (selectedVal == 'Indian Citizen') {
			$('#pan').addClass('wpcf7-validates-as-required');
		}
		
    });
}
$('#first-name, #last-name').keypress(function (e) {
			var regex = new RegExp("^[a-zA-Z]+$");
			var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
			if (regex.test(str)) {
				return true;
			}
			else
			{
			e.preventDefault();
			
			return false;
			}
		});
		$('#international-state').keypress(function (e) {
			var regex = new RegExp("^[a-zA-Z0-9]+$");
			var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
			if (regex.test(str)) {
				return true;
			}
			else
			{
			e.preventDefault();
			
			return false;
			}
		});
$('.form-field').keyup(function (event) {          //This is to protect if user copy-pastes some character value ,..
    valKeyUp = this.value;                          //In that case, pasted text is replaced with old value,
    if (!new RegExp('^[0-9]*$').test(valKeyUp)) {   //which is stored in 'valKeyDown' at keydown event.
        $(this).val(valKeyDown);                    //It is   possible to check this inside 'integerOnly' function as,
    }                                               //one cannot get the text printed by keydown event 
});   
