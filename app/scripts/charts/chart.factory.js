;(function (){
  
  'use strict';

  angular.module('DayMap')

  .factory('ChartFactory', ['$http', 'PARSE', '$cookieStore', '$location',

    function ($http, PARSE, $cookieStore, $location) {

       // Get Days data from Parse
      var getUserDays = function () {
        return $http({
          headers: PARSE.CONFIG.headers,
          url: PARSE.URL + 'classes/Day/',
          method: 'GET',
          params: {
            //'where': {"_User":"b1vQSsT7Up"}
            'where': {
              user: {
                __type: 'Pointer',
                className: '_User',
                objectId: "b1vQSsT7Up",
              }
            }
          }
        });
      };

     
  
      return {
        get : getUserDays,
      };
   }

  ]);

}());

