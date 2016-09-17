var church = {
    lat: 14.5618882,
    lng: 121.0031631
};
var reception = {
    lat: 51.261797,
    lng: 1.087446
};

function initMap() {
    var myLatLng = {
        lat: -25.363,
        lng: 131.044
    };
    var map1 = new google.maps.Map(document.getElementById('map-church'), {
        zoom: 18,
        center: church,
        styles: [
            {
              featureType: 'all',
              stylers: [
                { saturation: -80 }
              ]
            },{
              featureType: 'road.arterial',
              elementType: 'geometry',
              stylers: [
                { hue: '#00ffee' },
                { saturation: 50 }
              ]
            },{
              featureType: 'poi.business',
              elementType: 'labels',
              stylers: [
                { visibility: 'off' }
              ]
            }
          ]
    });
    var marker1 = new google.maps.Marker({
        position: church,
        map: map1,
        title: 'Church'
    });
    var map2 = new google.maps.Map(document.getElementById('map-reception'), {
        zoom: 14,
        center: reception
    });
    var marker2 = new google.maps.Marker({
        position: reception,
        map: map2,
        title: 'Reception'
    });

}
google.maps.event.addDomListener(window, 'load', initMap);