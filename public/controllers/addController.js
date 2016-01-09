var addController = angular.module('addController', ['geolocation']);
addController.controller('addController', function($scope, $http, geolocation) {

	$scope.formData = {};
	var coords = {};
	var lat = 0;
	var long = 0;

	// Set initial coordinates to the center of the US
	$scope.formData.latitude = 39.500;
	$scope.formData.longitude = -98.350;

	$scope.createUser = function() {

		var userData = {
			username: $scope.formData.username,
			gender: $scope.formData.gender,
			age: $scope.formData.age,
			favlang: $scope.formData.favlang,
			location: [$scope.formData.longitude, $scope.formData.latitude],
			htmlverified: $scope.formData.htmlverified
		};

		$http.post('/users', userData)
			.success(function (data) {
				$scope.formData.username = "";
				$scope.formData.gender = "";
				$scope.formData.age = "";
				$scope.formData.favlang = "";
			})
			.error(function (data) {
				console.log('Error: ' + data);
			});
	};
});