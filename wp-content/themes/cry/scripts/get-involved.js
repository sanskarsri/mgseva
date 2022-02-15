$(document).ready(function () {
    initVolunteerOwlCarousel();
    showCareerOption();
    captureCareersFormStatus();
});

function initVolunteerOwlCarousel() {
    var volunteerItems = 2;

    if (isMobile)
        volunteerItems = 1;

    $('.home-children-item-wrapper').owlCarousel({
        items: volunteerItems,
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

function showCareerOption() {
    var ele;
    $(document).on('click', '.job-title-wrapper', function (event) {
        var target = event.target.nodeName;
        if (target != 'button') {
            ele = $(this);
            ele.closest('.job-accordion').find('.job-desc').toggleClass('show');
			ele.closest('.job-accordion').find('.jtt-icon').toggleClass('fa-plus fa-minus');
        }
    });

    var roleName;
    $(document).on('click', '.job-apply-btn-wrapper .btn-primary', function (event) {
        ele = $(this);
        roleName = ele.closest('.job-accordion').find('.job-title-wrapper h4').text();
        $('.volunteer-options-title').html(roleName);
        $('#role-name').val(roleName);
        showModal('.careers-card-form');
    });
    
    $(document).on('click', '.bg-overlay, .careers-card-form .fa-close', function () {
        $('.careers-card-form').removeClass('show');
        $('.bg-overlay').fadeOut();
    });
}

isFormProcessing = false;
function captureCareersFormStatus() {
    var ele;
    $(document).on('click', '.careers-card-form .btn-primary', function () {
        ele = $(this);
        if (isFormProcessing == false) {
            isFormProcessing = true;
            removeSiteMessage();
            ele.closest('.careers-card-form').find('.line-loader').addClass('animate');
        }
    });

    //Functions if the contact form has been successfully sent
    document.addEventListener('wpcf7mailsent', function (event) {
        removeSiteMessage();
        isFormProcessing = false;
        showModal('.modal-contact-success');
        $('.careers-card-form').removeClass('show');
        $('.careers-card-form').find('.line-loader').removeClass('animate');
    }, false);

    //Functions if the contact form has been failed
    document.addEventListener('wpcf7invalid', function (event) {
        console.log('Failed' + event);
        isFormProcessing = false;
        showErrorMessage('There seems to be some things you missed');
        setTimeout(function () {
            removeSiteMessage();
        }, 3500);
        $('.careers-card-form').find('.line-loader').removeClass('animate');
    }, false);

    //Functions if the contact form has been failed
    document.addEventListener('wpcf7mailfailed', function (event) {
        console.log('Failed' + event);
        isFormProcessing = false;
        showErrorMessage('There seems to be some things you missed');
        setTimeout(function () {
            removeSiteMessage();
        }, 3500);
        $('.careers-card-form').find('.line-loader').removeClass('animate');
    }, false);
}