var totalCount = 60;
var childrenCount = 1;
var childrenShown = false;

$(document).ready(function () {
    loadChildrenMap();
    initWhyChildrenOwlCarousel();
});

function loadChildrenMap() {

    var childHTML = '';
    for (var i = 0; i < totalCount; i++) {
        if (i < totalCount * .4)
            childHTML += "<img src='/wp-content/themes/cry/images/child-single-icon.png' class='child-show' alt='CRY Child' />";
        else
            childHTML += "<img src='/wp-content/themes/cry/images/child-single-icon.png' alt='CRY Child' />";
    }

    $('.children-map-icon-wrapper').html(childHTML);

    var winScroll,
        eleHeight = $('.home-approach-block').offset().top;
    $(window).scroll(function () {
        winScroll = $(window).scrollTop();
        if (winScroll > eleHeight - 550) {
            if (childrenShown == false) {
                childrenShown = true;
                showChildrenMap();
            }
        }
    });
}

function showChildrenMap() {
    var childShowInterval = setInterval(function () {
        $('.children-map-icon-wrapper img:nth-child(' + childrenCount + ')').addClass('show');
        childrenCount++;
        if (childrenCount == totalCount + 1) {
            clearInterval(childShowInterval);
            $('.children-map-wrapper').addClass('animated');
        }
    }, 30);

}

function initWhyChildrenOwlCarousel() {
    if (isMobile) {
        $('.children-stat-list-wrapper > div > div.clear').remove();
        $('.children-stat-list-wrapper > div').owlCarousel({
            items: 1,
            margin: 0,
            nav: !0,
            dots: 1,
            navSpeed: 700,
            mouseDrag: !1,
            navText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"]
        });
    }

}
