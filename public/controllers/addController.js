angular.module('plhApp.addController', [])
	.controller('addController', function($scope, $http) {

		$scope.formData = {};

		$scope.createPost = function() {

			var postData = {
				name: $scope.formData.name,
				email: $scope.formData.email,
				phone: $scope.formData.phone,
				city: $scope.formData.city,
				location: $scope.formData.location,
				price: $scope.formData.price,
				condition: $scope.formData.condition,
				make: $scope.formData.make,
				size: $scope.formData.size,
				title: $scope.formData.title,
				color: $scope.formData.color,
				posting: $scope.formData.posting
			};

			$http.post('/postings', postData)
				.success(function (data) {
					$scope.formData.name = "";
					$scope.formData.email = "";
					$scope.formData.phone = "";
					$scope.formData.city = "";
					$scope.formData.location = "";
					$scope.formData.price = "";
					$scope.formData.condition = "";
					$scope.formData.make = "";
					$scope.formData.size = "";
					$scope.formData.title = "";
					$scope.formData.color = "";
					$scope.formData.posting = "";
				})
				.error(function (data) {
					console.log('Error in addController: ' + data);
				});
		};
	});