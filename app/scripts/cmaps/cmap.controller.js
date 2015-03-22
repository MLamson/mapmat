;(function (){
  
  'use strict';

  angular.module('DayMap')

  .controller('CMapController', ['$scope', 'CMapFactory', '$location','uiGmapGoogleMapApi',

    function ($scope, CMapFactory, $location, uiGmapGoogleMapApi) {

          //moment().format();



       
//////////initial map//////////////
$scope.map = { control: {}, center: { latitude: 37.70, longitude: -122.344 }, zoom: 9, refresh: {}};

function placeToMarker(searchBox, id) {

  var place = searchBox.getPlaces();
  if (!place || place == 'undefined' || place.length == 0) {
    return;
  }

  var marker = {
    id: id,
    place_id: place[0].place_id,
    name: place[0].name,
    address: place[0].formatted_address,
    latitude: place[0].geometry.location.lat(),
    longitude: place[0].geometry.location.lng(),
    latlng: place[0].geometry.location.lat() + ',' + place[0].geometry.location.lng()
  };
// push your markers into the $scope.map.markers array
if (!$scope.map.markers) {
    $scope.map.markers = [];
  }

// THIS IS THE KEY TO RECENTER/REFRESH THE MAP, to your question
$scope.map.control.refresh({latitude: marker.latitude, longitude: marker.longitude});

// the following defines the SearchBox on your Controller; events call placeToMarker function above
var searchBoxEvents = {
  places_changed: function (searchBox) {
    placeToMarker(searchBox, id);
  }
};

// this is defined on the Controller, as well. This specifies which template searchBoxEvents should match to; note the parentdiv
  $scope.searchBox = { template:'searchBox.template.html', events:searchBoxEvents, parentdiv: 'searchBoxParent'};

// in your HTML, declare where you want the searchBox. parentdiv: 'searchBoxParent' above looks for the id="searchBoxParent" in HTML

  }

  }]);
  

}());

