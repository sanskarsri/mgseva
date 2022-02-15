var winHeight;
var winWidth;
var isMobile = false;
$(document).ready(function () {
    initVariables();
    stickyHeader();
    getUserLocation();
    animateEleScroll();
    toggleAccordionItem();
    closeModal();
    scrollToTop();
    toggleMobileMenu();
    inputFunctions();
    contactFormSettings();
    exitIntentPopups();
    initFooterOwlCarousel();
    searchFunctions();
    checkForVideoLinks();
    initHomeChildrenCircle();
});

$(window).load(function () {
    internalLinkScroll();
    lookForSearchQuery();
});

function initVariables() {
    winWidth = $(window).width();
    winHeight = $(window).height();

    if (winWidth <= 800)
        isMobile = true;
}

function initHomeChildrenCircle() {
    var ele, clickedClassName;
    $(document).on('click', function (event) {
        ele = $(this);
        clickedClassName = event.target.className;
        if (clickedClassName == 'rel-wrapper' && $(event.target).closest('.approach-circle-wrapper').hasClass('approach-circle-wrapper')) {
            ele.find('.approach-circle-modal').removeClass('hide-circle-modal');
            ele.find('.approach-child-center').addClass('show-mobile');
        } else {
            ele.find('.approach-child-center').removeClass('show-mobile');
        }
    });
    $(window).scroll(function () {
        $('.approach-child-center').removeClass('show-mobile');
        $('.approach-circle-modal, .multiplier-adovcacy-circle-info').addClass('hide-circle-modal');
    });

    $(document).on('click', '.approach-circle-icon', function () {
        $(this).closest('.approach-circle-item').find('.approach-circle-modal').removeClass('hide-circle-modal');
    });
    
    $(document).on('click', '.multiplier-advocacy-circle-title', function () {
        $(this).closest('.multiplier-advocacy-circle').find('.multiplier-adovcacy-circle-info').removeClass('hide-circle-modal');
    });
}

function toggleMobileMenu() {
    $(document).on('click', '.menu-btn', function () {
        $('.nav-wrapper').toggleClass('show');
    });
}

function animateCursiveFont() {
    var ele, cursiveText;
    $('.cursive-text').each(function () {
        ele = $(this);
        cursiveText = ele.text();
        ele.html('<span class="cursive-text-main">' + cursiveText + '</span>');
        ele.append('<span class="cursive-text-hover">' + cursiveText + '</span>');
    })
}

function stickyHeader() {
    var scrollPos;
    $(window).scroll(function () {
        scrollPos = $(window).scrollTop();
        if (scrollPos > winHeight) {
            $('header').addClass('header-fixed');
            $('.chat-icon').addClass('show');
        } else {
            $('header').removeClass('header-fixed');
            $('.chat-icon').removeClass('show');
        }
    });

    //Focus functions
    $('.nav-search-wrapper input').focus(function () {
        $('.nav-item-wrapper').addClass('hide');
        setTimeout(function () {
            $('.nav-item-wrapper').hide();
        }, 500);
    }).focusout(function () {
        $('.nav-item-wrapper').show();
        $('.nav-item-wrapper').removeClass('hide');
    });
}

function animateEleScroll() {
    animateSection('.animate-section');
}
var imgIndex = 1;
var animatingIconsWrapper = false;

function animateSection(eleClass) {
    $(eleClass).addClass('animated');
    var time = 250;
    var eleLength = $(eleClass).find('.animate-ele').length;
    var i = 1;

    var animateEleIntervalVar = setInterval(function () {
        $(eleClass).find('.animate-ele-' + i).addClass('show');
        if (i == eleLength) {
            clearInterval(animateEleIntervalVar);
        }
        i++;
    }, time);


    if ($(eleClass).hasClass('home-approach-icons-wrapper')) {
        var tempImgSrc;
        if (animatingIconsWrapper == false) {
            animatingIconsWrapper = true;
            var imgInterval = setInterval(function () {

                tempImgSrc = $('.home-approach-icons-item:nth-child(' + imgIndex + ') img:first-child').attr('src');
                $('.home-approach-icons-item:nth-child(' + imgIndex + ') img:first-child').attr('src', '');

                var image = new Image();
                image.src = tempImgSrc;

                $('.home-approach-icons-item:nth-child(' + imgIndex + ') img:first-child').attr('src', image.src).css('opacity', '1');
                $('.home-approach-icons-item:nth-child(' + imgIndex + ') img:first-child').gifplayer('play');

                setTimeout(function () {
                    $('.home-approach-icons-item:nth-child(' + (imgIndex - 1) + ') img:last-child').addClass('show').gifplayer('play');
                    console.log(imgIndex);
                }, 500);


                imgIndex++;

                if (imgIndex == 5)
                    clearInterval(imgInterval);
            }, 550);
        }
    }
}

function toggleAccordionItem() {
    var ele;
    $(document).on('click', '.accordion-item', function (event) {
        var target = event.target.nodeName;
        if (target.toLowerCase() != 'a') {
            ele = $(this);
            $(ele).toggleClass('show');
        }
    });
}

function playVideoModal(videoEle) {
    $('.' + videoEle + ', .bg-overlay').fadeIn();
    $('.' + videoEle + ' .yt-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    $('.video-modal .fa-close, .bg-overlay').click(function () {
        $('.video-modal, .bg-overlay').fadeOut();
        $('.video-modal').each(function () {
            $(this).find('.yt-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        });
    });

}

function closeModal() {
    $(document).on('click', '.bg-overlay', function () {
        $('.modal, .bg-overlay').fadeOut();
        $('.profile-modal').removeClass('show');
        $('body').removeClass('no-scroll');
    })
}

function inputFunctions() {
    var ele;
    $(document).on('change paste keyup', '.form-field', function () {
        ele = $(this);
        if (ele.val()) {
            ele.addClass('form-field-has-val');
        } else {
            ele.removeClass('form-field-has-val');
        }
    });
}

function scrollToTop() {
    $(document).on('click', '.back-to-top', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });
}

function internalLinkScroll() {
    if (window.location.hash) {
        var hash, hashScrollTop;

        var bufferMargin = 85;
        if (isMobile)
            bufferMargin = 55;
        hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
        hash = '#' + hash;
        if ($(hash).length) {
            hashScrollTop = $(hash).offset().top;
            $('html, body').animate({
                scrollTop: hashScrollTop - ($('header').height() + bufferMargin)
            }, 800);
        }
    }
}


function contactFormSettings() {
    if ($('.wpcf7-form-control-wrap').length)
        $('.wpcf7-form-control-wrap').each(function () {
            var getLabel = $(this).next("label").detach();
            $(this).append(getLabel);
        });
}

function showModal(modalEle) {
    $('.bg-overlay, ' + modalEle).addClass('show').fadeIn();

    $(document).on('click', '.bg-overlay, .modal .fa-close', function () {
        $('.bg-overlay, .modal-popup').removeClass('show').fadeOut();
    });
}


//Function to trigger exit popups from the WP plugin POPUPMAKER
function exitIntentPopups() {
    setTimeout(() => {
        if ($('.exit-popup').length)
            $(document).on("mouseout", evt => {
                if (evt.toElement === null && evt.relatedTarget === null) {
                    //Stop triggering exit popups
                    $(evt.currentTarget).off("mouseout");

                    // An intent to exit has happened
                    if (typeof pum_popups !== 'undefined') {
                        var popupSelector, popupIndex;
                        $.each(pum_popups, function (index, value) {
                            popupSelector = value['triggers'][0]['settings']['extra_selectors'];
                            if (popupSelector.indexOf('exit-popup') != -1) {
                                popupIndex = value['id'];
                                PUM.open(popupIndex);
                            }
                        });
                    }
                }
            });
    }, 500);
}

function initFooterOwlCarousel() {
    if (isMobile) {
        $('.footer-usp-list').owlCarousel({
            items: 1,
            margin: 0,
            nav: false,
            dots: 1,
            navSpeed: 700,
            mouseDrag: !1
        });
    }
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName;

    for (var k = 0; k < sURLVariables.length; k++) {
        sParameterName = sURLVariables[k].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1];
        }
    }

    return "N/A";
}

function searchFunctions() {
    var ele, searchTerm;
    $('.nav-search-wrapper input').on("keypress", function (e) {
        if (e.keyCode == 13) {
            ele = $(this);
            searchTerm = ele.val();
            if (searchTerm != '') {
                window.location.href = '/?s=' + searchTerm;

            }
        }
    });
}

function showSuccessMessage(msg) {
    $('.site-message').removeClass('error');
    $('.site-message').html(msg).addClass('show');
}

function showErrorMessage(msg) {
    $('.site-message').addClass('error');
    $('.site-message').html(msg).addClass('show');
}

function removeSiteMessage() {
    $('.site-message').removeClass('show');
}


function checkForVideoLinks() {
    if ($('.home-news-item').length) {
        var ele, cardLink;
        $('.home-news-item').each(function () {
            ele = $(this);
            cardLink = ele.find('.btn').attr('href');
            if (cardLink.indexOf('window.onclick') >= 0)
                ele.find('.btn').removeAttr('target').removeAttr('rel');
        });
    }
}


function lookForSearchQuery() {
    var searchQuery = getUrlParameter('searchquery');
    if (searchQuery != 'N/A') {
        $('body').attr('id', 'body-search')
        var myHilitor = new Hilitor("#body-search"); // id of the element to parse
        myHilitor.apply(searchQuery);
        window.find(searchQuery, false);
    }
}


function getUserLocation() {
    foreignDonationURL = '/donation/foreign-donor/'
    $.getJSON('https://ipapi.co/json/', function (data) {
        detectedCountry = data.country;

        if (detectedCountry != 'IN')
            $('header .btn-primary').attr('href', foreignDonationURL);
    });
}

$(document).ready(function() {
	$('#filterOptions li a').click(function() {
		// fetch the class of the clicked item
		var ourClass = $(this).attr('class');
		
		// reset the active class on all the buttons
		$('#filterOptions li').removeClass('selected');
		// update the active state on our clicked button
		$(this).parent().addClass('selected');
		
		if(ourClass == 'all') {
			// show all our items
			$('#ourHolder').children('div.job-accordion').show();
			$('#ourHolder').children('div.job-accordion.Noopenings').hide();
		}
		else {
			// hide all elements that don't share ourClass
			$('#ourHolder').children('div:not(.' + ourClass + ')').hide();
			// show all elements that do share ourClass
			$('#ourHolder').children('div.' + ourClass).show();
		}
		return false;
	});
	
});
function myShowd() {
	document.getElementById('button1').style.display = 'none';
  var x = document.getElementsByClassName("cds")
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "block";
  }
  
}

