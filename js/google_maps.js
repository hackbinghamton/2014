function initialize_maps() {
  google.maps.visualRefresh = true;
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: new google.maps.LatLng(42.0887882, -75.9719421),
    zoom: 18,
    mapTypeControl: true,
    scrollwheel:false,
    navigationControl: false,
    streetViewControl: false,
    disableDefaultUI: true,
    styles: [
      {"stylers":[{"hue":"#57A757"}]},
      {"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},
      {"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},
      {"visibility":"simplified"}]}]
  });

  var academicAMarker = new google.maps.Marker({ 
    position: new google.maps.LatLng(42.088639, -75.972411),
    map: map,
    title: "HackBU @ Academic A"
  });

  google.maps.event.addListener(academicAMarker, 'click', function() {
    window.open("https://www.google.com/maps/place/Academic+Bldg+A/@42.0886312,-75.9723588,17z/data=!3m1!4b1!4m2!3m1!1s0x89daeeb84ab6343d:0x7aabe0021d7b218e","_blank");
  });
}

google.maps.event.addDomListener(window, 'load', initialize_maps);