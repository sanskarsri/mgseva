$(document).ready(function () {
    initVolunteerOwlCarousel();
    animateHeroPhotos();
    showVolunteerCard();

    //Event to check if contact form has succeed
    captureVolunteerFormStatus();
});

function initVolunteerOwlCarousel() {
    var testimonialItems = 2;
    var volunteerItems = 2.5;
    if (isMobile) {
        testimonialItems = 1;
        volunteerItems = 1.3;
    }

    $('.home-children-item-wrapper').owlCarousel({
        items: testimonialItems,
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

    $('.home-news-list').owlCarousel({
        items: 1,
        stagePadding: .15 * winWidth,
        loop: !0,
        margin: 100,
        nav: !0,
        navSpeed: 700,
        responsive: !1,
        mouseDrag: !1,
        navText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"]
    });

    $('.volunteer-options-card-wrapper').owlCarousel({
        items: volunteerItems,
        loop: !0,
        margin: 20,
        nav: !0,
        navSpeed: 700,
        responsive: !1,
        mouseDrag: !1,
        navText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"]
    });

    if (isMobile) {
        $('.volunteer-team-block-wrapper > div.clear:last-child').remove();
        $('.volunteer-team-block-wrapper').owlCarousel({
            items: 1,
            margin: 0,
            nav: !0,
            navSpeed: 700,
            mouseDrag: !1,
            navText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"]
        });
    }

}

function showVolunteerFAQ() {
    $('.volunteer-faq-accordion-wrapper').addClass('show');
}


function animateHeroPhotos() {
    $('.impact-portrait-column').infiniteslide({
        'speed': 40,
        'pauseonhover': false
    });
}

(function ($) {
    $.fn.countTo = function (options) {
        options = options || {};

        return $(this).each(function () {
            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from: $(this).data('from'),
                to: $(this).data('to'),
                speed: $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals: $(this).data('decimals')
            }, options);

            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;

            // references & variables that will change with each update
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};

            $self.data('countTo', data);

            // if an existing interval can be found, clear it first
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);

            // initialize the element with the starting value
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;

                render(value);

                if (typeof (settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }

                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof (settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0, // the number the element should start at
        to: 0, // the number the element should end at
        speed: 1000, // how long it should take to count between the target numbers
        refreshInterval: 100, // how often the element should be updated
        decimals: 0, // the number of decimal places to show
        formatter: formatter, // handler for formatting the value before rendering
        onUpdate: null, // callback method for every time the element is updated
        onComplete: null // callback method for when the element finishes updating
    };

    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }
}(jQuery));


function showVolunteerCard() {
    var ele, volunteerHTML, volunteerImg, volunteerTitle;
    $(document).on('click', '.volunteer-options-card', function () {
        ele = $(this);
        volunteerHTML = ele.find('.volunteer-options-card-block')[0].outerHTML;
        volunteerImg = ele.find('.volunteer-options-icon').attr('src');

        $('.volunteer-modal .profile-img').attr('src', volunteerImg);
        $('.volunteer-modal-info-wrapper').html(volunteerHTML);

        $('.volunteer-modal').addClass('show');
        $('.bg-overlay').fadeIn();
    });

    $(document).on('click', '.volunteer-modal .fa-close, .bg-overlay, .volunteer-card-form .fa-close', function () {
        $('.volunteer-modal, .volunteer-card-form').removeClass('show');
        $('.bg-overlay').fadeOut();
    });

    //To show the form
    var formID;
    $(document).on('click', '.volunteer-modal .btn-primary', function () {
        ele = $(this);
        $('.volunteer-modal, .volunteer-card-form').removeClass('show');
        formID = ele.closest('.volunteer-modal').find('.volunteer-options-card-block').attr('data-form-val');
        showModal('.' + formID);
    });
    
}

var isFormProcessing = false;

function captureVolunteerFormStatus() {
    var ele;
    $(document).on('click', '.volunteer-card-form .btn-primary', function () {
        ele = $(this);
        if (isFormProcessing == false) {
            isFormProcessing = true;
            removeSiteMessage();
            ele.closest('.volunteer-card-form').find('.line-loader').addClass('animate');
        }
    });

    //Functions if the contact form has been successfully sent
    document.addEventListener('wpcf7mailsent', function (event) {
        removeSiteMessage();
        isFormProcessing = false;
        showModal('.modal-contact-success');
        $('.volunteer-card-form').removeClass('show');
        $('.volunteer-card-form').find('.line-loader').removeClass('animate');
    }, false);

    //Functions if the contact form has been failed
    document.addEventListener('wpcf7invalid', function (event) {
        console.log('Failed' + event);
        isFormProcessing = false;
        showErrorMessage('There seems to be some things you missed');
        setTimeout(function () {
            removeSiteMessage();
        }, 3500);
        $('.volunteer-card-form').find('.line-loader').removeClass('animate');
    }, false);

    //Functions if the contact form has been failed
    document.addEventListener('wpcf7mailfailed', function (event) {
        console.log('Failed' + event);
        isFormProcessing = false;
        showErrorMessage('There seems to be some things you missed');
        setTimeout(function () {
            removeSiteMessage();
        }, 3500);
        $('.volunteer-card-form').find('.line-loader').removeClass('animate');
    }, false);
}
