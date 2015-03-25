;(function (){
  
  'use strict';

  angular.module('DayMap')

  .controller('SharedController', ['$scope', 'SharedFactory', '$location','uiGmapGoogleMapApi',

    function ($scope, SharedFactory, $location, uiGmapGoogleMapApi) {

          //moment().format();



       
//////////initial map//////////////

        $scope.map = {
          center: {
            latitude: 33.7518790,
            longitude: -84.3914470
          },
          zoom: 13,
          draggable: false,
        };
        $scope.options = { scrollwheel: false };

        ///////////////////////////////////////////////////////////////////
////////get a array of all day objects


       $scope.days = [];
       SharedFactory.get().success( function (response) {
        // array of day objects
        $scope.days = response.results;
      });

    
        ////get day from list on page
        $scope.getDay = function (d) {

        var dayDate = moment(d.startTime.iso).format("dddd, MMMM Do YYYY, h:mm:ss a");



        
        SharedFactory.getD(d);
        // moment().format();
        // console.log('utu');

        ////empty array to hold markers
        $scope.trackMarkers = [];

        $scope.startFinishMarkers = [];

        $scope.trackPoly = [];

          // ///////get photos tied to day
          $scope.getPhotos = function (p) {
            SharedFactory.getP(p).success( function (response) {
              $scope.photos = response;
            });
           
          };
          $scope.getPhotos(d.photos);

/////////////////////////////////////////////////////////////////////
//////////getting text, venue, and stats from day

        /////get text field
        //  $scope.getText = function (t) {
        //   MapFactory.getT(t).success( function (response) {
        //     // array of day objects
        //     $scope.dayText = response;
        //     //console.log($scope.photos.image.url);
        //   });
         
        // };

         /////get venue field
        //  $scope.getVenue = function (v) {
        //   MapFactory.getV(v).success( function (response) {
        //     // array of day objects
        //     $scope.dayVenue = response;
        //     //console.log($scope.photos.image.url);
        //   });
         
        // };

         /////get stats field
        //  $scope.getStats = function (s) {
        //  // MapFactory.getS(s).success( function (response) {
        //     // array of day objects
        //   //  $scope.dayStats = response;
        //     //console.log($scope.photos.image.url);
        //   //});
         
        // };
        // $scope.getText(d.text);
        // $scope.getVenue(d.venues);
        // $scope.getStats(d.stats);

        // console.log(d.text);
        // console.log(d.venues);
        // console.log(d.stats);

//////////////////////////////////////////////////////////////////////////
        
        ////object to hold current marker
        $scope.marker = {};
        ////variable needed to set id so idKey will have vaule.
        var i = 0;
        //////get array of tracks from day
        d.tracks.map( function (x) {



          // Date.parse(d.startTime);
          
          // var dayDate = moment(d.startTime.iso).format("dddd, MMMM Do YYYY, h:mm:ss a");
          ////get array of track from tracks
          x.track.map( function (y) {
            ////set marker value
            $scope.marker = {id: i, coords: {latitude: y.latitude, longitude: y.longitude}};

            $scope.tracker = {latitude: y.latitude, longitude: y.longitude};
            //increment id var
            i++;
            ////push marker into trackMarkers model which is an array

            if($scope.marker)
            $scope.trackMarkers.push($scope.marker);
            $scope.trackPoly.push($scope.tracker);
            // var a = $scope.trackMarkers.length;
            // console.log(a);
            // $scope.startFinishMarkers.push($scope.trackMarkers[0]);
            // $scope.startFinishMarkers.push($scope.trackMarkers[a]);


          
          });
          //////////////set markers to only first and last point
            var a = $scope.trackMarkers.length;
            a--;
            $scope.startFinishMarkers.push($scope.trackMarkers[0]);
            $scope.startFinishMarkers.push($scope.trackMarkers[a]);




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
          zoom: 13,
          draggable: false,
          
      };

      
      };

/////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////
////////For create map template


 var events = {
          places_changed: function (searchBox) {}
        };
        $scope.searchbox = { template:'searchbox.tpl.html', events:events};

  }]);
  

}());

