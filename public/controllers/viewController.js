angular.module('plhApp.viewController', [])
	.controller('viewController', function($scope, $http, $routeParams) {

		$scope.find = function() {

			var url = '/postings/' + $routeParams.id;

			$http.get(url).success(function(data) {
				$scope.post = data[0];
			});
		};

		$scope.find();

	});