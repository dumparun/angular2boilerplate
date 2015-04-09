(function(requirejs) {
    'use strict';
    requirejs.config(window.requirejsConfig);

    require([ 'angular', 'app/app' ], function(angular) {
	angular.bootstrap(document, [ 'ng-boilerplate' ]);
    });
})(window.requirejs);