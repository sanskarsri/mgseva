//Event to check if contact form has succeed
captureContactSubject();
captureContactFormStatus();

function captureContactFormStatus() {
    //Functions if the contact form has been successfully sent
    document.addEventListener('wpcf7mailsent', function (event) {
        showModal('.modal-contact-success');
    }, false);

    //Functions if the contact form has been failed
    document.addEventListener('wpcf7invalid', function (event) {
        console.log('Failed');
    }, false);
}

var map;
var mum = {
        lat: 18.9854293,
        lng: 72.8312272
    },
    del = {
        lat: 28.5179549,
        lng: 77.1972357
    },
    bglr = {
        lat: 12.9974674,
        lng: 77.6164133
    },
    kol = {
        lat: 22.500872,
        lng: 88.3923885
    };

// function to change position on button click
$(document).ready(function () {
    changeCityDetails();
    checkContactType();
});

function checkContactType() {
    var contactType = getUrlParameter('type');
    if (contactType !== 'undefined' && contactType != 'N/A') {
        var ele, optionValue, transformedOptionVal, subjectChanged = false;
        $('.contact-subject option').each(function () {
            ele = $(this);
            optionValue = ele.val();
            transformedOptionVal = optionValue.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').toLowerCase();
            if (transformedOptionVal.indexOf(contactType) != -1 && subjectChanged == false) {
                $('.contact-subject').val(optionValue).trigger('change');
                subjectChanged = true;
            }
        });
    }

    var location = getUrlParameter('location');
    if (location != 'N/A' && location != undefined) {
        $('.location-city-' + location).trigger('click');

        locationsScrollTop = $('#locations').offset().top;
        $('html, body').animate({
            scrollTop: locationsScrollTop - ($('header').height() + 85)
        }, 800);
    }

}

function changeCityDetails() {
    var ele, locationIndexm, newLocation;
    var address, phone, mail;
    $(document).on('click', '.contact-locations-tab-wrapper span', function () {
        ele = $(this);
        $('.contact-locations-tab-wrapper span').removeClass('selected');
        ele.addClass('selected');

        locationIndex = ele.index() + 1;

        newLocation = $('.contact-locations-info-wrapper .contact-locations-info:nth-child(' + locationIndex + ')');
        address = newLocation.find('div:nth-child(1)').html();
        mail = newLocation.find('div:nth-child(2)').html();
        phone = newLocation.find('div:nth-child(3)').html();

        $('.contact-locations-card:nth-child(1) div').html(address);
        $('.contact-locations-card:nth-child(2) div').html(mail);
        $('.contact-locations-card:nth-child(3) div').html(phone);

    });
}

function initMap() {
    map = new google.maps.Map(
        document.getElementById('contact-map'), {
            center: mum,
            zoom: 15,
            disableDefaultUI: true,
            mapTypeControl: false,
            scaleControl: false,
            scrollwheel: false,
            styles: [
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "on"
                          }
                        ]
                      },
                {
                    "featureType": "administrative.neighborhood",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                          }
                        ]
                      },
                {
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                          }
                        ]
                      },
                {
                    "featureType": "poi.attraction",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                          }
                        ]
                      },
                {
                    "featureType": "poi.business",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                          }
                        ]
                      },
                {
                    "featureType": "road",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                          }
                        ]
                      }
                    ]
        });

    var iconBase =
        'images/map-marker.png';

    var icons = {
        info: {
            icon: iconBase
        }
    };

    var features = [
        {
            position: mum,
            type: 'info'
              },
        {
            position: del,
            type: 'info'
              },
        {
            position: bglr,
            type: 'info'
              },
        {
            position: kol,
            type: 'info'
              }
            ];

    // Create markers.
    for (var i = 0; i < features.length; i++) {
        var marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map
        });
        marker.setCursor('grab');
    };
}

function newLocation(position) {
    map.setCenter({
        lat: position['lat'],
        lng: position['lng']
    });
}


function captureContactSubject() {
    $('#contact-subject').on('change', function (e) {
        var optionSelected = $("#contact-subject:selected", this);
        var valueSelected = this.value;
        
        $('#selected-subject').val(valueSelected);
    });
}
