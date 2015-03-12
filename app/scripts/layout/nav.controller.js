;(function (){
  
  'use strict';

  angular.module('DayMap')

  .controller('NavController', ['$scope', 'UserFactory', 'MapFactory',

    function ($scope, UserFactory, MapFactory) {
    
      var user = UserFactory.user();

      if (user) {
        $scope.loggedin = true;
        $scope.user = user;
      } else {
        $scope.loggedin = false;
      }


      $scope.logout = function () {
        UserFactory.logout();
        console.log('in logout NavController');
      };  


    }

  ])

}());