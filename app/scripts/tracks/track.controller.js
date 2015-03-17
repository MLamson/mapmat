;(function (){
  
  'use strict';

  angular.module('DayMap')

  .controller('TrackController', ['$scope', 'MapFactory', '$location', 

    function ($scope, MapFactory, $location) {


      //   $scope.days = [];

      //  MapFactory.get().success( function (response) {
      //   console.log(response.results, 'in MapFactory get');

      //   $scope.days = response.results;

      //   console.log($scope.days, 'in MapFactory get');
      // });

      // ////to make sure template has loaded before functions are called.
      // $scope.load = function () {
      //   MapFactory.render();
      // };
      // //DOM is always loaded before any scope methods are called.
      // $scope.load();
    }


  ]);


}());

