;(function (){
  
  'use strict';

  angular.module('DayMap')

  .controller('CMapController', ['$scope', 'CMapFactory', '$location','uiGmapGoogleMapApi',

    function ($scope, CMapFactory, $location, uiGmapGoogleMapApi) {

      $scope.centerOnMe= function(){
      $scope.positions = [];


    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      $scope.positions.push({lat: pos.k,lng: pos.B});
      console.log(pos);
      $scope.map.setCenter(pos);

      var directionsDisplay = new google.maps.DirectionsRenderer();
      var directionsService = new google.maps.DirectionsService();


      console.log($scope.map);
      directionsDisplay.setMap($scope.map);

      function calcRoute() {
        var start = "37.891586,-4.7844853";
        var end = pos.k + "," + pos.B;



        var request = {
          origin: start,
          destination: end,
          optimizeWaypoints: true,
          travelMode: google.maps.TravelMode.DRIVING
        };

        directionsService.route(request, function(response, status) {
          console.log('before status');
          console.log(status, 'status');
          if (status == google.maps.DirectionsStatus.OK) {

            directionsDisplay.setDirections(response);            
            console.log('enter!');  
          }
    });


      }

      calcRoute();


    });

};

      ////polyline on map  Not the best way for directions
    //   var poly = new google.maps.Polyline({
    //   strokeColor: '#000000',
    //   strokeOpacity: 1.0,
    //   strokeWeight: 3
    // });
    // $scope.$on('mapInitialized', function(evt, map) {
    //   poly.setMap(map);
    // });
    // $scope.addMarkerAndPath = function(event) {
    //   var path = poly.getPath();
    //   var marker = new google.maps.Marker({
    //     position: event.latLng, 
    //     title: "#"+ path.getLength(), 
    //     map: $scope.map
    //   });
    //   path.push(event.latLng);
    // };



   
  }]);
  

}());

