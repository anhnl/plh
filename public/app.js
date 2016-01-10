var plhApp = angular.module('plhApp', ['ngRoute', 'plhApp.homeController']);

plhApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    	when('/', {
    		templateUrl: 'templates/home.html',
    		controller: 'homeController'
    	}).
    	when('/add', {
    		templateUrl: 'templates/add.html',
    		controller: 'addController'
    	}).
	    otherwise({
	      redirectTo: '/'
	    });
}]);