		var app = angular.module('app', [ "ngRoute" ]);

		app.config(function($routeProvider) {
			$routeProvider.when('/', {
				controller : 'SimpleController',
				templateUrl : 'View1.html'
			}).when('/View2', {
				controller : 'SimpleController',
				templateUrl : 'View2.html'
			}).when('/View3', {
				controller : 'SimpleController',
				templateUrl : 'View3.html'
			}).otherwise({
				redirectTo : '/'
			});

		});

		angular.module('app')
				.controller('SimpleController', SimpleController);

		function SimpleController($scope,$http) {

			$scope.players = [ {
				name : 'john doe',
				city : 'mumbai'
			}, {
				name : 'john jane',
				city : 'chennai'
			}, {
				name : 'flower grant',
				city : 'delhi'
			}, {
				name : 'flower andy',
				city : 'bangalore'
			}, {
				name : 'clarke',
				city : 'calcutta'
			} ];

			$scope.animals = [ 'cat', 'mouse', 'tom', 'jerry' ];

			$scope.addPlayer = function() {

				$scope.players.push({
					name : $scope.newPlayer.name,
					city : $scope.newPlayer.city
				});

			};

			$scope.countries = [ 'USA', 'Canada', 'Australia', 'Singapore' ];

			$scope.selectedCountry = $scope.countries[0];


			$scope.businesses=['CapitalOne Bank','CapitalOne 360','Customer Profile',
			                   'CapitalOne Credit Card','CapitalOne Auto Finance',
			                	'CapitalOne Home Loans'
			                   ];

			$scope.selectedBusiness = $scope.businesses[0];

			$scope.cityName = "";
			$scope.weatherInfo = "";
			$scope.cityLat = "";
			$scope.cityLong = "";




			var cityName="";var weatherInfo="";var cityLat="";var cityLong="";

			$http.get('http://api.openweathermap.org/data/2.5/weather?q=california').then(function(resp) {
			    console.log('Success', resp);
			    console.log(resp.data.name);
			    console.log(resp.data.weather[0].description);

			    cityName	=resp.data.name;
			    weatherInfo	=resp.data.weather[0].description;
			    cityLat		=resp.data.coord.lat;
			    cityLon		=resp.data.coord.lon;



			    $scope.cityName=cityName;
			    $scope.weatherInfo=weatherInfo;
			    $scope.cityLat=cityLat;
			    $scope.cityLon=cityLon;

			    // For JSON responses, resp.data contains the result
			  }, function(err) {
			    console.error('ERR', err);
			    // err.status will contain the status code
			  })



		}
