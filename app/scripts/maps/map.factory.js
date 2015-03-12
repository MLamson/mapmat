;(function (){
  
  'use strict';

  angular.module('DayMap')

  .factory('MapFactory', ['$http', 'PARSE', '$cookieStore', '$location',

    function ($http, PARSE, $cookieStore, $location) {

      var renderMap = function () {

        var map = L.map('map').setView([43.093697, -78.876879], 13, { zoomControl:false });

        L.tileLayer('https://{s}.tiles.mapbox.com/v4/{mapId}/{z}/{x}/{y}.png?access_token={token}', {
            //attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            //subdomains: ['a','b','c','d'],
            zoomControl : false,
            mapId: 'mlamson.lc66lkk4',
            token: 'pk.eyJ1IjoibWxhbXNvbiIsImEiOiJrR1lxejlZIn0.jNQ5v-SlOw7pzRjDgVRVhQ'
        }).addTo(map);
        map.touchZoom.disable();
        map.doubleClickZoom.disable();
        map.scrollWheelZoom.disable();
        map.boxZoom.disable();
        map.keyboard.disable();
        L.mapbox.accessToken = 'pk.eyJ1IjoibWxhbXNvbiIsImEiOiJrR1lxejlZIn0.jNQ5v-SlOw7pzRjDgVRVhQ';
        L.mapbox.featureLayer('mlamson.lc66lkk4').addTo(map);
        
      };
    
      // // Get Current User
      // var currentUser = function () {
      //   return $cookieStore.get('currentUser');
      // };

      // // Check User Status
      // var checkLoginStatus = function () {
      //   var user = currentUser();
      //   if (user) {
      //      PARSE.CONFIG.headers['X-PARSE-Session-Token'] = user.sessionToken;
      //   }
      // };

      // // Add a new User
      // var addUser = function (userObj) {
      //   $http.post(PARSE.URL + 'users', userObj, PARSE.CONFIG)
      //     .then( function (res) {
      //       console.log(res);
      //     }
      //   );
      // };

      // // Log in a User
      // var loginUser = function (userObj) {

      //   $http({
      //     method: 'GET',
      //     url: PARSE.URL + 'login',
      //     headers: PARSE.CONFIG.headers,
      //     params: userObj
      //   }).then (function (res) {
      //     console.log(res);
      //     $cookieStore.put('currentUser', res.data);
      //   });
      //   $location.path('/home');
        
      // };

      // // Logout Method
      // var logoutUser = function () {
      //   $cookieStore.remove('currentUser');
      //   console.log('in logoutUser function UserFactory');
      //   $location.path('/');
        
      // };
  
      return {

        render : renderMap,
        // register : addUser, 
        // login : loginUser,
        // user : currentUser,
        // status : checkLoginStatus,
        // logout : logoutUser
      };

    }

  ]);

}());