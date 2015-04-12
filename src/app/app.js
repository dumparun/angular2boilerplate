define([ 'angular', 'angular-route' ], function(angular) {
    'use strict';

    var app = angular.module('app', [ 'ngRoute' ]);

    app.init = function() {
	angular.bootstrap(document, [ 'app' ]);
    };

    var appController = require([ 'app/controller/app-controller' ]);

    app.config([ '$routeProvider', 'AppController', function($routeProvider, appController) {
	$routeProvider.when('/', {
	    templateUrl : 'www_dev/template/splash.htm',
	    controller : 'AppController'
	}).otherwise({
	    redirectTo : '/'
	});

    } ]);
    return app;
});