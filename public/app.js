var plhApp = angular.module('plhApp', ['ngRoute', 'plhApp.homeController', 'plhApp.homeVnmController', 'plhApp.addController', 'plhApp.postsController', 'plhApp.viewController']);

plhApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
    $routeProvider.
    	when('/', {
    		templateUrl: 'templates/home.html',
    		controller: 'homeController'
    	}).
      when('/vnm', {
        templateUrl: 'templates/home.html',
        controller: 'homeVnmController'
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