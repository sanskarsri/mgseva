$(document).ready(function () {
    initBlogCarousel();
});

function initBlogCarousel() {
    $('.blog-main-list').owlCarousel({
        items: 1,
        //        stagePadding: .1 * winWidth,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplaySpeed: 1500,
        autoplayHoverPause: true,
        loop: !0,
        margin: 100,
        nav: !0,
        navSpeed: 700,
        responsive: !1,
        mouseDrag: !1,
        navText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"]
    });
}
