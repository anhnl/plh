var plhApp = angular.module('plhApp', ['ngRoute', 'plhApp.homeController', 'plhApp.addController', 'plhApp.postsController', 'plhApp.viewController']);

plhApp.config(['$routeProvider',
  function($routeProvider, $locationProvider) {
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
      when('/posts/:id', {
        templateUrl: 'templates/view.html',
        controller: 'viewController'
      }).
	    otherwise({
	      redirectTo: '/'
	    });
}]);