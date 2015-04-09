require.config({
    baseUrl : 'www_dev/',
    paths : {
	'angular' : [ 'lib/angular/angular' ],
	'angular-route' : [ 'lib/angular-route/angular-route.min' ]
    },
    shim : {
	'angular' : {
	    exports : 'angular'
	},
	'angular-route' : {
	    deps : [ 'angular' ]
	}
    }
});

require([ 'app/app' ], function(app) {
    app.init();
});