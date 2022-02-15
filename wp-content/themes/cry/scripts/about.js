$(document).ready(function () {
    initAboutOwlCarousel();
    closeProfileModal();
    showProfileModal();
});

function initAboutOwlCarousel() {
    var items = 3.3;

    if (isMobile)
        items = 1.5;

    $('.donate-options-card-wrapper').owlCarousel({
        items: items,
        loop: !0,
        margin: 0,
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

function showHiddenAwards() {
    $('.award-hidden-wrapper').addClass('show');
    $('.awards-wrapper .btn').fadeOut();
}

var hiddenArticlesShown = false;
function showHiddenArticles() {
    if (!$('.articles-wrapper-hidden .articles-block').hasClass('show') && hiddenArticlesShown == true) {
        $('.articles-main-wrapper .btn').fadeOut();
    } else {
        var counter = 0;
        var articleLimit = 6;
        $('.articles-wrapper-hidden .articles-block').each(function () {
            hiddenArticlesShown = true;
            if (counter < articleLimit) {
                if (!$(this).hasClass('show')) {
                    $(this).addClass('show');
                    counter++;
                }
            }
        });
    }
	if($('.last-article').hasClass('show')){
		$('.articles-main-wrapper .btn').hide();
	}
	else{
		$('.articles-main-wrapper .btn').show();
	}

}


function closeProfileModal() {
    $(document).on('click', '.profile-modal .fa-close', function () {
        $('.bg-overlay').fadeOut();
        $('.profile-modal').removeClass('show');
        $('body').removeClass('no-scroll');
    })
}

function showProfileModal() {
    var ele, profileImg, profileTitle, profileDesignation, profilePara;
    $(document).on('click', '.donate-card', function () {
        ele = $(this);
        profileImg = ele.find('.donate-card-img').attr('src');
        profileTitle = ele.find('.donate-card-title').html();
        profileDesignation = ele.find('.donate-card-designation').html();
        profilePara = ele.find('.donate-card-description').html();

        $('.profile-modal .profile-img').attr('src', profileImg);
        $('.profile-modal .title-primary').html(profileTitle);
        $('.profile-modal .small-cap-title').html(profileDesignation);
        $('.profile-modal .profile-info-block p').html(profilePara);

        $('.bg-overlay').fadeIn();
        $('.profile-modal').addClass('show');
        $('body').addClass('no-scroll');
    });
}
