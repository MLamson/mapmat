;(function (){
  
  'use strict';

  angular.module('DayMap')

  .factory('MapFactory', ['$http', 'PARSE', '$cookieStore', '$location','uiGmapGoogleMapApi', 

    function ($http, PARSE, $cookieStore, $location, uiGmapGoogleMapApi) {

      

      var getTheDay = function (d) {
        //console.log(d, 'in get day function');
        ////loop over d.tracks getting mode and track
//////////////////////////////////////////////////////////////////
///////loop through object to get mode
        // console.log(d.tracks, 'd tracks');
      
///////for each mode loop through tracks to get lat long
///////create marker for each with idKey

      };

      // Get Days data from Parse

      var getAllDays = function () {
        return $http.get(PARSE.URL + 'classes/Day', {
          headers: PARSE.CONFIG.headers,
          cache: true
        });
      };
  
      return {

      //  getOne : getDay,
        getD : getTheDay,
        get : getAllDays,
      };

    }

  ]);

}());

