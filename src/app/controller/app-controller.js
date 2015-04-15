define([ 'angular' ], function(angular) {
	'use strict';

	var appControllers = angular.module('app.controllers', []);

	appControllers.controller('HomeController', [ '$scope', function($scope) {
		console.log("#");
	} ]);
});