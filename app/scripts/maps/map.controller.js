;(function (){
  
  'use strict';

  angular.module('DayMap')

  .controller('MapController', ['$scope', 'MapFactory', '$location', 

    function ($scope, MapFactory, $location) {

      ////to make sure template has loaded before functions are called.
      $scope.load = function () {
        MapFactory.render();
      };
      //DOM is always loaded before any scope methods are called.
      $scope.load();
   
    }

  ]);


}());