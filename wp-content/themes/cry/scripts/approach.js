$(document).ready(function () {
    loadMap();
    initMapToggleOptions();
    mapToggleOptions();
});

function loadMap() {
    simplemaps_countrymap.hooks.ready = function () {
        // optionally update simplemaps_countrymap.mapdata
        simplemaps_countrymap.load();
    }
}

function reloadMap() {
    simplemaps_countrymap.mapdata.locations = mapLocationsArray;
    simplemaps_countrymap.refresh();
}

function initMapToggleOptions() {
    var statesArray = [];
    var stateVal;
    var statesHTML = "";
    for (var i = 0; i < Object.keys(globalMapLocationsArray).length; i++) {
        stateVal = globalMapLocationsArray[i]["state"];

        if ($.inArray(stateVal, statesArray) == -1) {
            statesArray.push(stateVal);
        }
    }
    statesArray.sort();

    for (var j = 0; j < statesArray.length; j++) {
        statesHTML += '<li class="form-dropdown-item"><i></i>' + statesArray[j] + '</li>';
    }
    $('.heat-map-card-options .form-dropdown-list').append(statesHTML);
}

function mapToggleOptions() {
    var ele, stateName;
    var mapLocationsCount = 0,
        optionsArrayCount = 0,
        optionsName,
        statesArray = [],
        optionsArray = [];
    var tempMapLocationsArray = {};

    //To enable selected states
    $(document).on('click', '.heat-map-card-options .form-dropdown-list li:not(:first-child)', function () {
        ele = $(this);
        ele.toggleClass('selected');

        $('.heat-map-card-options .form-dropdown-list li:first-child').removeClass('selected');

        updateMapLocations();
        $('.heat-map-card-options .form-multiselect-dropdown input').attr('placeholder', statesDropDownHTML);
        reloadMap();
    });

    //To enable all states
    $(document).on('click', '.heat-map-card-options .form-dropdown-list li:first-child', function () {
        ele = $(this);

        $('.heat-map-card-options .form-dropdown-list li').removeClass('selected');
        ele.addClass('selected');
        $('.heat-map-card-options .form-multiselect-dropdown input').attr('placeholder', 'All States');

        updateMapLocations();
        reloadMap();
    });

    //To enable toggle options
    $(document).on('click', '.heat-map-option', function () {
        ele = $(this);

        ele.toggleClass('selected');

        optionsArray = [];
        optionsArrayCount = 0;
        $('.heat-map-option.selected').each(function () {
            optionsName = $(this).attr('data-heat-map-option');
            optionsArray.push(optionsName);
        });

        updateMapLocations();

        mapLocationsCount = 0;
        tempMapLocationsArray = {};

        for (var i = 0; i < optionsArray.length; i++) {
            optionsName = optionsArray[i];
            for (var j = 0; j < Object.keys(mapLocationsArray).length; j++) {
                if (mapLocationsArray[j]["description"].indexOf(optionsName) != -1) {
                    tempMapLocationsArray[mapLocationsCount] = mapLocationsArray[j];
                    mapLocationsCount++;
                }
            }
        }
        mapLocationsArray = tempMapLocationsArray;
        reloadMap();
    })
}
var statesDropDownHTML = "";

function updateMapLocations() {
    var statesArray = [];
    var stateName, mapLocationsCount;
    if (!$('.heat-map-card-options .form-dropdown-list li:first-child').hasClass('selected')) {
        statesDropDownHTML = "";
        $('.heat-map-card-options .form-dropdown-list li.selected').each(function () {
            stateName = $(this).text();
            statesDropDownHTML += stateName + ", ";
            statesArray.push(stateName);
        });
        if (statesDropDownHTML == "") {
            statesDropDownHTML = "All States";
        } else {
            statesDropDownHTML = statesDropDownHTML.substring(0, statesDropDownHTML.length - 2);
        }
        mapLocationsArray = {};
        mapLocationsCount = 0;
        for (var i = 0; i < statesArray.length; i++) {
            stateName = statesArray[i];
            for (var j = 0; j < Object.keys(globalMapLocationsArray).length; j++) {
                if (stateName == globalMapLocationsArray[j]["state"]) {
                    mapLocationsArray[mapLocationsCount] = globalMapLocationsArray[j];
                    mapLocationsCount++;
                }
            }
        }
    } else {
        mapLocationsArray = globalMapLocationsArray;
    }
}
