;(function (){
  
  'use strict';

  angular.module('DayMap')

  .factory('ChartFactory', ['$http', 'PARSE', '$cookieStore', '$location',

    function ($http, PARSE, $cookieStore, $location) {

      

      var getTheDay = function (d) {
    

      };

      // Get Days data from Parse

      var getAllDays = function () {
        return $http.get(PARSE.URL + 'classes/Day', {
          headers: PARSE.CONFIG.headers,
          cache: true
        });
      };

      var getThePhotos = function (p) {
        return $http.get(PARSE.URL + 'classes/Image/' + p, {
          headers: PARSE.CONFIG.headers,
        });
      };

      //  var getTheText = function (pArray) {
      //   return $http.get(PARSE.URL + 'classes/Text/' + pArray, {
      //     headers: PARSE.CONFIG.headers,
      //   });
      // };

      // var getTheVenue = function (pArray) {
      //   return $http.get(PARSE.URL + 'classes/Venue/' + pArray, {
      //     headers: PARSE.CONFIG.headers,
      //   });
      // };

      // var getTheStats = function (pArray) {
      //   return $http.get(PARSE.URL + 'classes/Image/' + pArray, {
      //     headers: PARSE.CONFIG.headers,
      //   });
      // };

  
      return {

      //  getOne : getDay,
        getD : getTheDay,
        getP : getThePhotos,
        get : getAllDays,
       // getT : getTheText,
       // getV : getTheVenue,
       // getS : getTheStats,
      };

    }

  ]);

}());

