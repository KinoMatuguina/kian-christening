var church = {
    lat: 14.5618882,
    lng: 121.0031631
};
var reception = {
    lat: 14.564079,
    lng: 121.003200
};

function initMap() {
    var myLatLng = {
        lat: -25.363,
        lng: 131.044
    };
    var panoramas = [];
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
    var panorama1 = new google.maps.StreetViewPanorama(
            document.getElementById('pano'), {
              position: church,
              pov: {
                heading: 34,
                pitch: 0
              },
              visible: true

            });

    panoramas.push(panorama1);
    var map2 = new google.maps.Map(document.getElementById('map-reception'), {
        zoom: 18,
        center: reception,
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
    var marker2 = new google.maps.Marker({
        position: reception,
        map: map2,
        title: 'Reception'
    });
    var panorama2 = new google.maps.StreetViewPanorama(
            document.getElementById('pano-2'), {
              position: reception,
              pov: {
                heading: 34,
                pitch: 0
              },
              visible: true

            });

    panoramas.push(panorama2);

}
