if (Meteor.isClient) {

  Meteor.startup(function() {
    GoogleMaps.load();

     if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function (position) {
         initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
         GoogleMaps.maps.homePageMap.instance.setCenter(initialLocation);
     });
 }
  });

  Template.map.helpers({
    exampleMapOptions: function() {
      // Make sure the maps API has loaded
      if (GoogleMaps.loaded()) {
        // Map initialization options
        return {
          center: new google.maps.LatLng(-37.8136, 144.9631),
          zoom: 14
        };
      }
    }
  });


}



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
