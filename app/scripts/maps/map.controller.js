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

        $scope.trackPoly = [];

        
        ////object to hold current marker
        $scope.marker = {};
        ////variable needed to set id so idKey will have vaule.
        var i = 0;
        //////get array of tracks from day
        d.tracks.map( function (x) {
          Date.parse(d.startTime);
          console.log(d.startTime);
          ////get array of track from tracks
          x.track.map( function (y) {
            ////set marker value
            $scope.marker = {id: i, coords: {latitude: y.latitude, longitude: y.longitude}};

            $scope.tracker = {latitude: y.latitude, longitude: y.longitude};
            //increment id var
            i++;
            ////push marker into trackMarkers model which is an array
            $scope.trackMarkers.push($scope.marker);
            $scope.trackPoly.push($scope.tracker);
            console.log();
          });

          /////////////////////////draw lines on the map//////////////////////////
        $scope.polylines = [
            {
                id: 1,
                path: $scope.trackPoly,
                stroke: {
                    color: '#6060FB',
                    weight: 3
                },
                editable: true,
                draggable: true,
                geodesic: false,
                visible: true,
                icons: [{
                    icon: {
                       // path: google.maps.SymbolPath.BACKWARD_OPEN_ARROW
                    },
                    // offset: '25px',
                    // repeat: '50px'
                }]
            }
        ];///////////////////////////End of drawing lines on map


           // console.log($scope.trackMarkers, 'no way');
        });


        // console.log($scope.trackMarkers[0].coords, 'tup');
        // $scope.tempCenter = $scope.trackMarkers[0].coords;
        // $scope.map = {center: $scope.tempCenter};
        // console.log($scope.map);

       

      //   $scope.markerClicked = $scope.trackMarkers[5];
      //   console.log($scope.markerClicked.coords);
      // var latLng = $scope.markerClicked.getPosition(); 
       
      };

         // Creates the polyline object
          

      // returns LatLng object
// map.setCenter(latLng); // setCenter takes a LatLng object

/////////////////////////////////////////////////////////////////////

  }]);
  

}());

