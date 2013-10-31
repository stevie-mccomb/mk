angular.module('mageknight', [])

app.directive('playerSheet', function($scope) {
	$scope.$watch($scope.players[0].fame, function(newVal, oldVal) {
		$scope.flash();
	});

	$scope.flash = function() {
		console.log('yo');
	}
	return {

	}
});