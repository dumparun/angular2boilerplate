define([ 'angular', 'angular-route', 'app/controller/app-controller'  ], function(angular, angularRoute) {
	'use strict';

	var app = angular.module('app', [ 'ngRoute', 'app.controllers' ]);

	app.init = function() {
		angular.bootstrap(document, [ 'app' ]);
	};


	var appController = require([ 'app/controller/app-controller' ]);

	app.config([ '$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl : 'www_dev/template/splash.htm',
			controller : 'HomeController'
		}).otherwise({
			redirectTo : '/'
		});

	} ]);
	return app;
});