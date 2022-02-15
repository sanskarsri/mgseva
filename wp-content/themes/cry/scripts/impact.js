$(document).ready(function () {
    initImpactOwlCarousel();
    animateHeroPhotos();
    detectMultiplierSection();
});

function initImpactOwlCarousel() {
    var stagePaddingVal = .15 * winWidth;
    if (isMobile)
        stagePaddingVal = .05 * winWidth;
    
    $('.home-news-list').owlCarousel({
        items: 1,
        stagePadding: stagePaddingVal,
        loop: !0,
        margin: 100,
        nav: !0,
        navSpeed: 700,
        responsive: !1,
        mouseDrag: !1,
        navText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"]
    });
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

function animateNumbers() {
    // custom formatting example
    $('.count-number').data('countToOptions', {
        formatter: function (value, options) {
            var tempVal = value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
            tempVal = tempVal.toString().replace(',', '');
            var lastThree = tempVal.substring(tempVal.length - 3);
            var otherNumbers = tempVal.substring(0, tempVal.length - 3);
            if (otherNumbers != '')
                lastThree = lastThree;
            var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
            return res;
        }
    });

    // start all the timers
    $('.timer').each(count);

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }
}

var feetIntervalVar;
var feetIndex = 1;

function animateFeet() {
    var feetCount = $('.multiplier-feet-infographic img').length;
    var totalTime = 2000;
    var intervalTime = totalTime / feetCount;
    feetIntervalVar = setInterval(function () {
        showFeet();
    }, intervalTime);
}

function showFeet() {
    var feetCount = $('.multiplier-feet-infographic img').length;

    if (feetIndex <= feetCount / 2)
        $('.multiplier-initial:not(.multiplier-result) img:nth-child(' + feetIndex + ')').addClass('show');
    else
        $('.multiplier-result img:nth-child(' + (feetIndex - (feetCount / 2)) + ')').addClass('show');

    feetIndex++;
    if (feetCount + 1 == feetIndex) {
        clearInterval(feetIntervalVar);
        setTimeout(function () {
            feetIndex = 1;
            $('.multiplier-initial img').removeClass('show');
            animateFeet();
        }, 2500);
    }
}
var numbersAnimated = false;

function detectMultiplierSection() {
    var scrollPos;
    var multiplierWrapperPos = $('.multiplier-wrapper').offset().top;
    $(window).scroll(function () {
        scrollPos = $(window).scrollTop();

        if (scrollPos > multiplierWrapperPos - 550 && numbersAnimated == false) {
            animateNumbers();
            animateFeet();
            numbersAnimated = true;
        }
    });
}
