;(function (){
  
  'use strict';

  angular.module('DayMap')

  .controller('MapController', ['$scope', 'MapFactory', '$location','uiGmapGoogleMapApi',

    function ($scope, MapFactory, $location, uiGmapGoogleMapApi) {

///////////////////////////////////////////////////////////////////
////////get a array of all day objects
        $scope.days = [];

       MapFactory.get().success( function (response) {

        ///////Render Map on page with start location
    $scope.map = {
      center: {
        latitude: 33.7550,
        longitude: -84.3900
      },
      zoom: 1,
      bounds: {}
    };
        
        
        // array of day objects
        $scope.days = response.results;

      });

        ////get day from list on page
        $scope.getDay = function (d) {
        
        MapFactory.getD(d);


        ////empty array to hold markers
        $scope.trackMarkers = [];
        ////object to hold current marker
        $scope.marker = {};
        ////variable needed to set id so idKey will have vaule.
        var i = 0;
        //////get array of tracks from day
        d.tracks.map( function (x) {
          ////get array of track from tracks
          x.track.map( function (y) {
            ////set marker value
            $scope.marker = {id: i, coords: {latitude: y.latitude, longitude: y.longitude}};
            //increment id var
            i++;
            ////push marker into trackMarkers model which is an array
            $scope.trackMarkers.push($scope.marker);
          });
        
        });

        console.log($scope.trackMarkers[0].coords, 'tup');
        $scope.tempCenter = $scope.trackMarkers[0].coords;
        $scope.map = {center: $scope.tempCenter};
        console.log($scope.map);

        $scope.map = {
          center: {
            latitude: 0,//$scope.trackMarkers[0].coords.latitude,
            longitude: 0//$scope.trackMarkers[0].coords.longitude
          },
          zoom: 1,
          bounds: {}
        };

      //   $scope.markerClicked = $scope.trackMarkers[5];
      //   console.log($scope.markerClicked.coords);
      // var latLng = $scope.markerClicked.getPosition(); 
       
      };

         // Creates the polyline object
          var polyline = new google.maps.Polyline({
            map: map,
            path: path,
            strokeColor: '#0000FF',
            strokeOpacity: 0.7,
            strokeWeight: 1
          });


      // returns LatLng object
// map.setCenter(latLng); // setCenter takes a LatLng object

/////////////////////////////////////////////////////////////////////

  }]);
  

}());

