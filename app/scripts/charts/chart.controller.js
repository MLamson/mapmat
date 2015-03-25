;(function (){
  
  'use strict';

  angular.module('DayMap')

  .controller('ChartController', ['$scope', 'ChartFactory', '$location',

    function ($scope, ChartFactory, $location) {


             ///////////////////////////////////////////////////////////////////
////////get a array of all day objects tied to current user


       $scope.userDays = [];
       ChartFactory.get().success( function (response) {
        // array of day objects
        
        $scope.userDays = response.results;
        console.log('uerDays', $scope.userDays);

      });

//////////////// chartjss
var data = {
    labels: ["Today", "1", "2", "3", "4"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "RGBA(111, 220, 138,0.5)",
            strokeColor: "RGBA(111, 220, 138,0.8)",
            highlightFill: "RGBA(111, 220, 138,0.75)",
            highlightStroke: "RGBA(111, 220, 138, 1)",
            data: [0,250, 20, 0, 0]
        },
        {
            label: "My Second dataset",
            fillColor: "RGBA(224, 145, 61,0.5)",
            strokeColor: "RGBA(224, 145, 61,0.8)",
            highlightFill: "RGBA(224, 145, 61,0.75)",
            highlightStroke: "RGBA(224, 145, 61, 1)",
            data: [100, 234, 40, 50, 85]
        }
    ]
};

var data2 = {
    labels: ["Today", "1", "2", "3", "4", "5", "6"],
    datasets: [
       
        {
            label: "My Second dataset",
            fillColor: "RGBA(224, 145, 61,0.5)",
            strokeColor: "RGBA(224, 145, 61,0.8)",
            highlightFill: "RGBA(224, 145, 61,0.75)",
            highlightStroke: "RGBA(224, 145, 61, 1)",
            data: [140, 234, 420, 150, 285, 400, 345]
        }
    ]
};

// Get the context of the canvas element we want to select
      // Get context with jQuery - using jQuery's .get() method.
      var ctx = $("#myBarChart").get(0).getContext("2d");
      // This will get the first returned node in the jQuery collection.
      var myBarChart = new Chart(ctx).Bar(data);

        // Get context with jQuery - using jQuery's .get() method.
      var ctx2 = $("#myBarChart2").get(0).getContext("2d");
      // This will get the first returned node in the jQuery collection.
      var myBarChart2 = new Chart(ctx2).Bar(data2);


    }]);

  
  

}());

