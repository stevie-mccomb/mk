function SheetCtrl($scope) {
	$scope.players = [
		{
			'name': 'trista',
			'character': 'goldyx',
			'portrait': 'images/portraits/goldyx.jpg'
		},
		{
			'name': 'stevie',
			'character': 'tovak'
		},
		{
			'name': 'rachel',
			'character': 'arythea'
		},
		{
			'name': 'dude',
			'character': 'norowas'
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