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
        var i = 0;
        d.tracks.map( function (x) {

          x.track.map( function (y) {

            $scope.marker = {id: i, coords: {latitude: y.latitude, longitude: y.longitude}};
            i++;
            $scope.trackMarkers.push($scope.marker);


          });
        
        });

       
console.log($scope.trackMarkers);
       
      };

/////////////////////////////////////////////////////////////////////

  }]);
  

}());

