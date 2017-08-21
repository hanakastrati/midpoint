var latAvg;
var lngAvg;
var map;
var service;
var infowindow;

function findmidpoint() {
  latAvg = (parseFloat(document.getElementById("lat").getAttribute("value")) + parseFloat(document.getElementById("lat1").getAttribute("value")))/2;
  lngAvg = (parseFloat(document.getElementById("long").getAttribute("value")) + parseFloat(document.getElementById("long1").getAttribute("value")))/2;
  var midpoint = new google.maps.LatLng(latAvg, lngAvg);

  console.log(latAvg);
  console.log(lngAvg);

  var marker3 = new google.maps.Marker({
    position: {lat: latAvg, lng: lngAvg},
    map: map
  });

  map.setZoom(15);
  map.setCenter(marker3.getPosition());

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
      location: midpoint,
      radius: '500',
      type: ['restaurant']
  }, callback);

}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
  });
}


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: 40.7128, lng: -74.0059}
  });

  google.maps.event.addDomListener(window, 'load', initialize);
}