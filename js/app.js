var app = angular.module('mageKnight', [])

app.factory('LevelFactory', function() {
	return {
		'players': [
			{
				'name': 'trista',
				'character': 'goldyx',
				'portrait': 'images/goldyx.jpg',
				'faction': 'draconum',
				'level': '1',
				'fame': '0',
				'reputation': '0'
			},
			{
				'name': 'stevie',
				'character': 'tovak',
				'portrait': 'images/tovak.jpg',
				'faction': 'ninth circle',
				'level': '1',
				'fame': '0',
				'reputation': '0'
			},
			{
				'name': 'dude',
				'character': 'norowas',
				'portrait': 'images/norowas.jpg',
				'faction': 'high-elves',
				'level': '1',
				'fame': '0',
				'reputation': '0'
			},
			{
				'name': 'rachel',
				'character': 'arythea',
				'portrait': 'images/arythea.jpg',
				'faction': 'blood cult',
				'level': '1',
				'fame': '0',
				'reputation': '0'
			}
		]
	}
});

var fameContainer = app.directive('fameContainer', [function() {
	return {
		link: function(scope, elem) {
			console.log(scope);
		}
	}
}]);

var reputationContainer = app.directive('reputationContainer', function() {
	return {
		link: function(scope, elem) {
			scope.getReputation = function(player) {
				switch(player.reputation) {
					case -2:
					case -3:
						return -1;
					break;
					case -4:
					case -5:
						return -2
					break;
					case -6:
						return -3
					break;
					case -7:
						return -5;
					break;
					case -8:
						return 'X';
					break;
					case 2:
					case 3:
						return 1;
					break;
					case 4:
					case 5:
						return 2;
					break;
					case 6:
						return 3;
					break;
					case 7:
						return 5;
					break;
					default:
						return 0;
					break;
				}
			}
		}
	}
});