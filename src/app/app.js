define([ 'angular', 'angular-route', 'app/controller/main-controller' ],
	function(angular) {
	    'use strict';

	    var app = angular.module('ng-boilerplate', [ 'ngRoute',
		    'main-controller' ]);

	    app.init = function() {
		angular.bootstrap(document, [ 'ng-boilerplate' ]);
	    };

	    app.config([ '$routeProvider', '$sceProvider', '$locationProvider',
		    function($routeProvider, $sceProvider, $locationProvider) {
			$routeProvider.when('/', {
			    controller : 'MainController',
			    templateUrl : 'www_dev/template/splash.htm'
			}).otherwise({
			    redirectTo : '/'
			});

			$sceProvider.enabled(false);

		    } ]);
	    return app;
	});