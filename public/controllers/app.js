var app = angular.module('plh', []);
app.filter('fromTo', function() {
	return function(items, begin, end) {
		return items.slice(begin, end);
	}
});