;(function (){
  
  'use strict';

  angular.module('DayMap')

  .controller('UserController', ['$scope', 'UserFactory', '$location', 

    function ($scope, UserFactory, $location) {

      // If Currently Logged in - Leave this controller
      var user = UserFactory.user();
      if (user) {
        return $location.path('/home');
      }

      // Add a new user
      $scope.registerUser = function (userObj) {
        UserFactory.register(userObj);
      };

      // Login Method
      $scope.loginUser = function (userObj) {
        UserFactory.login(userObj);
        console.log(userObj);
      };
    
    }

  ]);

}());