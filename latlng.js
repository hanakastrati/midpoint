<script>
  function initialize() {
    var address = (document.getElementById('my-address'));
    var address1 = (document.getElementById('my-address1'));
    var autocomplete = new google.maps.places.Autocomplete(address);
    var autocomplete1 = new google.maps.places.Autocomplete(address1);

    autocomplete.setTypes(['geocode']);
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
      var place = autocomplete.getPlace();
        if (!place.geometry) {
          return;
        }

      var address = '';
        if (place.address_components) {
          address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || ''),
            (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }
    });

    autocomplete1.setTypes(['geocode']);
    google.maps.event.addListener(autocomplete1, 'place_changed', function() {
      var place1 = autocomplete1.getPlace();
        if (!place1.geometry) {
          return;
        }

      var address1 = '';
        if (place1.address_components) {
          address1 = [
            (place1.address_components[0] && place1.address_components[0].short_name || ''),
            (place1.address_components[1] && place1.address_components[1].short_name || ''),
            (place1.address_components[2] && place1.address_components[2].short_name || '')
            ].join(' ');
        }
    });
  }


  function codeAddress() {
    geocoder = new google.maps.Geocoder();
    var address = document.getElementById("my-address").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        document.getElementById("lat").setAttribute("value", Number(results[0].geometry.location.lat()));
        document.getElementById("long").setAttribute("value", Number(results[0].geometry.location.lng()));
        var marker = new google.maps.Marker({
            position: {lat: Number(results[0].geometry.location.lat()), lng: Number(results[0].geometry.location.lng()) },
            map: map
        });
      }

      else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }

  function codeAddress1() {
    geocoder1 = new google.maps.Geocoder();
    var address1 = document.getElementById("my-address1").value;
    geocoder1.geocode( { 'address': address1}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        
        document.getElementById("lat1").setAttribute("value", Number(results[0].geometry.location.lat()));
        document.getElementById("long1").setAttribute("value", Number(results[0].geometry.location.lng()));

        var marker = new google.maps.Marker({
            position: {lat: Number(results[0].geometry.location.lat()), lng: Number(results[0].geometry.location.lng()) },
            map: map
        });
      }

      else {
        alert("Geocode was not successful for the following reason: " + status);
        }
    });
  }
</script>