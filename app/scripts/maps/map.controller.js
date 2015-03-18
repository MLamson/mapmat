;(function (){
  
  'use strict';

  angular.module('DayMap')

  .controller('MapController', ['$scope', 'MapFactory', '$location','uiGmapGoogleMapApi',

    function ($scope, MapFactory, $location, uiGmapGoogleMapApi) {

///////////////////////////////////////////////////////////////////
////////get a array of all day objects
        $scope.days = [];


        $scope.map = {
          center: {
            latitude: 0,
            longitude: 0
          },
          zoom: 2,
          draggable: false,
        };
        $scope.options = { scrollwheel: false };

       MapFactory.get().success( function (response) {

        
        // array of day objects
        $scope.days = response.results;

        //////////render map with start location
/////////////////////////////////////////////////////////////////////

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
                    weight: 4
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

        }); 

      $scope.map = {
          center: {
            latitude: $scope.trackMarkers[1].coords.latitude,
            longitude: $scope.trackMarkers[1].coords.longitude
          },
          zoom: 18,
          draggable: false,
          
      };

       
      };


//////////////////////zoom to area of markers



// $scope.click = function(marker) {
   
    // console.log('in click marker zoom');
    //   $scope.map.setZoom(8);
    //   $scope.map.setCenter(marker.getPosition());
      
    // };
// $scope.map.addListener($scope.marker,'click',function() {
//   map.setZoom(9);
//   map.setCenter(marker.getPosition());
//   });

// google.maps.event.addListener(marker,'click',function() {
//   map.setZoom(9);
//   map.setCenter(marker.getPosition());
//   });

/////////////////////////////////////////////////////////////////////////////////

  }]);
  

}());

