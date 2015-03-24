;(function (){


angular.module('DayMap', ['ngRoute', 'ngCookies', 'uiGmapgoogle-maps','ngMap',])

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
    })

    .when('/create', {
      templateUrl: 'scripts/cmaps/cmap.create.tpl.html',
      controller: 'CMapController'
    })

    .when('/photos', {
      templateUrl: 'scripts/tracks/track.map.tpl.html',
      controller: 'TrackController'
    })

    .when('/profile', {
      templateUrl: 'scripts/charts/chart.profile.tpl.html',
      controller: 'ChartController'
    })

    .when('/mobile', {
      templateUrl: 'scripts/tracks/track.mobile.tpl.html',
      controller: 'TrackController'
    });
    //.otherwise('/home');

	}])

     .run([ '$rootScope', 'UserFactory', 'PARSE', 'MapFactory', '$location',

    function ($rootScope, UserFactory, PARSE, MapFactory, $location) {

      $rootScope.$on('$routeChangeStart', function () {
        
        // Run my Login Status
        UserFactory.status();


      });
     
   }
   
  ]);

}());

