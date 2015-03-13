;(function (){


angular.module('DayMap', ['ngRoute', 'ngCookies'])

	.constant('PARSE', {
		URL: 'https://api.parse.com/1/',
		CONFIG: {
			headers: {
				'X-Parse-Application-Id' : 'SC52Z3ssKElPhe1OwWnduX8kSxhUN6C9jOiQr0Er',
        'X-Parse-REST-API-Key'  : 'n05N3vzLbJmkXT8OKLRn9e6QvaptDVgd4QFQKDBA',
        'Content-Type' : 'application/json'	
			}
		}
	})

	.config([ '$routeProvider', function ($routeProvider) {

    $routeProvider

    	.when('/', {
      templateUrl: 'scripts/users/user.initial.tpl.html',
      controller: 'UserController'
    })

		.when('/register', {
      templateUrl: 'scripts/users/user.register.tpl.html',
      controller: 'UserController'
    })

    .when('/login', {
      templateUrl: 'scripts/users/user.login.tpl.html',
      controller: 'UserController'
    })

    .when('/home', {
      templateUrl: 'scripts/maps/map.home.tpl.html',
      controller: 'MapController'
    });

    //.otherwise('/home');

	}])

     .run([ '$rootScope', 'UserFactory', 'PARSE', 'MapFactory', '$location',

    function ($rootScope, UserFactory, PARSE, MapFactory, $location) {

      $rootScope.$on('$routeChangeStart', function () {
        
        // Run my Login Status
        UserFactory.status();


      });

     //   $rootScope.$on('$routeChangeSuccess', function () {

     //   	var location = $location.path();

     //   	console.log(location, 'in routeChangeSuccess');

     //   	if(location === '/home') {
     //   		MapFactory.render();
     //   	}
       
     // });

     
   }

  ]);



    




// var marker = L.marker([51.5, -0.09]).addTo(map);

// var circle = L.circle([51.508, -0.11], 500, {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5
// }).addTo(map);

// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(map);

// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

// var popup = L.popup()
//     .setLatLng([43.093697, -78.876879])
//     .setContent("I am a standalone popup.")
//     .openOn(map);

//     var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);


// //L.mapbox.accessToken = 'pk.eyJ1IjoibWxhbXNvbiIsImEiOiJrR1lxejlZIn0.jNQ5v-SlOw7pzRjDgVRVhQ';


// L.tileLayer('http://{s}.tiles.mapbox.com/v3/mlamson.lc66lkk4/{z}/{x}/{y}.png', {
//     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     maxZoom: 18
// }).addTo(map);

}());

