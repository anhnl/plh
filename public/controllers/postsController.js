angular.module('plhApp.postsController', [])
	.controller('postsController', function($scope, $http) {

		$scope.list = function() {
			var url = '/postings';

			$http.get(url).success(function(data) {
				$scope.posts = data;
			});
		};

		$scope.list();
	});