$(document).ready(function () {
    animateHeroPhotos();
});

function animateHeroPhotos() {
    $('.impact-portrait-column').infiniteslide({
        'speed': 40,
        'pauseonhover': false
    });
}