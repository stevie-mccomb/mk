function SheetCtrl($scope) {
	$scope.players = [
		{
			'name': 'trista',
			'character': 'goldyx',
			'portrait': 'images/goldyx.jpg',
			'faction': 'draconum',
			'level': '21'
		},
		{
			'name': 'stevie',
			'character': 'tovak',
			'portrait': 'images/tovak.jpg',
			'faction': 'ninth circle',
			'level': '28'
		},
		{
			'name': 'dude',
			'character': 'norowas',
			'portrait': 'images/norowas.jpg',
			'faction': 'high-elves',
			'level': '24'
		},
		{
			'name': 'rachel',
			'character': 'arythea',
			'portrait': 'images/arythea.jpg',
			'faction': 'blood cult',
			'level': '19'
		}
	];

	$scope.playerPosition = function(num) {
		switch(num) {
			case 0:
				return {
					'position': 'absolute',
					'top': '0',
					'left': '0'
				};
			break;
			case 1:
				return {
					'position': 'absolute',
					'top': '0',
					'right': '0'
				};
			break;
			case 2:
				return {
					'position': 'absolute',
					'bottom': '0',
					'left': '0'
				};
			break;
			case 3:
				return {
					'position': 'absolute',
					'bottom': '0',
					'right': '0'
				};
			break;
			default:
				// nada
			break;
		}
	}
}