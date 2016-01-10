var plhApp = angular.module('plhApp', ['ngRoute', 'plhApp.homeController', 'plhApp.addController', 'plhApp.postsController']);

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
      when('/posts', {
        templateUrl: 'templates/posts.html',
        controller: 'postsController'
      }).
	    otherwise({
	      redirectTo: '/'
	    });
}]);