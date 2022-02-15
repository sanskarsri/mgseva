$(document).ready(function () {
    donateClick();
    animateHome();
    initHomeOwlCarousel();
});

function donateClick() {
    var ele;
    $(document).on('click', '.donate-form-list li', function () {
        ele = $(this);
        ele.toggleClass('selected');
    });

    var donateLink;
    $('.donate-card').each(function () {
        ele = $(this);
        donateLink = ele.find('.donate-btn').attr('href');
        ele.find('img').wrap('<a href="' + donateLink + '" />');
        ele.attr('onclick', "window.location.href='" + donateLink + "'");
    });

    $(document).on('click', '.donate-options-wrapper .btn-primary', function () {
        ele = $(this);
        ele.addClass('show');
        $('.donate-options-wrapper .btn-loader').addClass('animate');
        setTimeout(function () {
            $('.home-donate-main-wrapper').addClass('hide');
            $('.donate-options-cards').addClass('show');
            setTimeout(function () {
                $('.donate-options-cards').addClass('show-full');
            }, 200);
        }, 1000);
    });
}

function initLoadingCookie() {
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000 * 36000;
    now.setTime(expireTime);
    document.cookie = 'loaded-intro=true;expires=' + now.toGMTString() + ';path=/';
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function animateHome() {
    if (getCookie('loaded-intro') == 'true') {
        $('.loading-wrapper').addClass('show').fadeOut(300);
        $('body').addClass('animate-home');
    } else {
        initLoadingCookie();
        var img = new Image();
        var bufferTime = 0;
        if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) 
            bufferTime = 600;
        // 'load' event
        $(img).on('load', function () {
            setTimeout(function () {
                $('.loading-wrapper, .loading-icon').show();
                setTimeout(function () {
                    $('.loading-wrapper').addClass('show');
                    setTimeout(function () {
                        $('.loading-wrapper').addClass('hide');
                        setTimeout(function () {
                            $('body').addClass('animate-home');
                            $('.loading-wrapper').addClass('black');
                            setTimeout(function () {
                                $('.loading-wrapper').hide();
                            }, 1000);
                        }, 00);
                        window.scrollTo(0, 0);
                    }, 2400);
                    setTimeout(function () {
                        $('.loading-icon').addClass('hide');
                        animateEleScroll();
                    }, 2200);
                }, 2800 + bufferTime); // fire when image loads
            }, 500);
        });
        img.src = "/wp-content/themes/cry/images/cry.gif";
    }

}

function initHomeOwlCarousel() {
    var donateItems = 2.5;
    var stagePadding = .15 * winWidth
    if (isMobile) {
        donateItems = 1.3;
        stagePadding = .08 * winWidth
    }
    $('.home-children-item-wrapper').owlCarousel({
        items: 2,
        loop: !0,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        navSpeed: 1500,
        responsive: !1,
        mouseDrag: !1,

    });

    //Randomly sort the Owl Carousel cards
    //    randomCarouselSort('.donate-options-card-wrapper');
    $('.donate-options-card-wrapper').owlCarousel({
        items: donateItems,
        loop: !0,
        margin: 0,
        nav: !0,
        navSpeed: 700,
        responsive: !1,
        mouseDrag: !1,
        navText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"]
    });

    $('.home-news-list').owlCarousel({
        items: 1,
        stagePadding: stagePadding,
        loop: !0,
        margin: 100,
        nav: !0,
        navSpeed: 700,
        responsive: !1,
        mouseDrag: !1,
        navText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"]
    });

    if (isMobile) {
        $('.home-approach-icons-wrapper > div.clear:last-child').remove();
        $('.home-approach-icons-wrapper').owlCarousel({
            items: 1,
            margin: 0,
            nav: !0,
            navSpeed: 700,
            mouseDrag: !1,
            navText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"]
        });
    }
}

function randomCarouselSort(owlSelector) {
    owlSelector = $(owlSelector);
    owlSelector.children().sort(function () {
        return Math.round(Math.random()) - 0.5;
    }).each(function () {
        $(this).appendTo(owlSelector);
    });
}

function showApproachDetails() {
    var ele, eleIndex;
    $(document).on('mouseenter', '.approach-circle-item img', function () {
        ele = $(this).closest('.approach-circle-item');
        eleIndex = ele.index() + 1;

        $('.approach-circle-info').removeClass('selected');
        $('.approach-circle-info:nth-child(' + eleIndex + ')').addClass('selected');

    });

}
