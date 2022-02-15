$(document).ready(function () {
    initPartnersOwlCarousel();
});
$(window).load(function () {
    initBrandsMasonry();
});

function initPartnersOwlCarousel() {
    var testimonialItems = 2;
    if (isMobile)
        testimonialItems = 1;
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
        stagePadding: .15 * $(window).width(),
        loop: !0,
        margin: 100,
        nav: !0,
        navSpeed: 700,
        responsive: !1,
        mouseDrag: !1,
        navText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"]
    });
}

function initBrandsMasonry() {
    $('.partnership-case-stories-wrapper .legacy-card-col').masonry({
        // options
        itemSelector: '.legacy-card',
    });
}
