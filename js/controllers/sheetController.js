function SheetCtrl($scope) {
	$scope.players = [
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

	$scope.playerLevel = function(player) {
		var fame = player.fame;
		switch(true) {
			case (fame > 2 && fame <= 7):
				player.level = 2;
			break;
			case (fame > 7 && fame <= 14):
				player.level = 3;
			break;
			case (fame > 14 && fame <= 23):
				player.level = 4;
			break;
			case (fame > 23 && fame <= 34):
				player.level = 5;
			break;
			case (fame > 34 && fame <= 47):
				player.level = 6;
			break;
			case (fame > 47 && fame <= 52):
				player.level = 7;
			break;
			case (fame > 52 && fame <= 79):
				player.level = 8;
			break;
			case (fame > 79 && fame <= 98):
				player.level = 9;
			break;
			case (fame > 98 && fame <= 119):
				player.level = 10;
			break;
			case (fame > 119):
				player.level = '10+';
			break;
			default:
				player.level = 1;
			break;
		}
		return player.level;
	}

	$scope.decreaseFame = function(player) {
		if (player.fame > 0) {
			player.fame--;
		}
	}

	$scope.increaseFame = function(player) {
		player.fame++;
	}

	$scope.decreaseRep = function(player) {
		if (player.reputation > -5) {
			player.reputation--;
		}
	}

	$scope.increaseRep = function(player) {
		if (player.reputation < 5) {
			player.reputation++;
		}
	}

	$scope.reputationStyles = function(player) {
		var reputation = player.reputation;
		switch(true) {
			case (reputation > 0):
				return {
					'background': '-moz-linear-gradient(160deg,  rgba(0,166,239,0) 0%, rgba(0,166,239,0) 50%, rgba(0,166,239,1) 100%)',
					'background': '-webkit-gradient(linear, left top, right bottom, color-stop(0%,rgba(0,166,239,0)), color-stop(50%,rgba(0,166,239,0)), color-stop(100%,rgba(0,166,239,1)))',
					'background': '-webkit-linear-gradient(160deg,  rgba(0,166,239,0) 0%,rgba(0,166,239,0) 50%,rgba(0,166,239,1) 100%)',
					'background': '-o-linear-gradient(160deg,  rgba(0,166,239,0) 0%,rgba(0,166,239,0) 50%,rgba(0,166,239,1) 100%)',
					'background': '-ms-linear-gradient(160deg,  rgba(0,166,239,0) 0%,rgba(0,166,239,0) 50%,rgba(0,166,239,1) 100%)',
					'background': 'linear-gradient(160deg,  rgba(0,166,239,0) 0%,rgba(0,166,239,0) 50%,rgba(0,166,239,1) 100%)',
					'filter': "progid:DXImageTransform.Microsoft.gradient( startColorstr='#0000a6ef', endColorstr='#00a6ef',GradientType=1 )"
				}
			break;
			case (reputation < 0):
				return {
					'background': '-moz-linear-gradient(160deg,  rgba(102,0,0,0) 0%, rgba(102,0,0,0) 49%, rgba(102,0,0,0) 50%, rgba(102,0,0,1) 100%)',
					'background': '-webkit-gradient(linear, left top, right bottom, color-stop(0%,rgba(102,0,0,0)), color-stop(50%,rgba(102,0,0,0)), color-stop(50%,rgba(102,0,0,0)), color-stop(100%,rgba(102,0,0,1)))',
					'background': '-webkit-linear-gradient(160deg,  rgba(102,0,0,0) 0%,rgba(102,0,0,0) 49%,rgba(102,0,0,0) 50%,rgba(102,0,0,1) 100%)',
					'background': '-o-linear-gradient(160deg,  rgba(102,0,0,0) 0%,rgba(102,0,0,0) 49%,rgba(102,0,0,0) 50%,rgba(102,0,0,1) 100%)',
					'background': '-ms-linear-gradient(160deg,  rgba(102,0,0,0) 0%,rgba(102,0,0,0) 49%,rgba(102,0,0,0) 50%,rgba(102,0,0,1) 100%)',
					'background': 'linear-gradient(160deg,  rgba(102,0,0,0) 0%,rgba(102,0,0,0) 49%,rgba(102,0,0,0) 50%,rgba(102,0,0,1) 100%)',
					'filter': "progid:DXImageTransform.Microsoft.gradient( startColorstr='#00660000', endColorstr='#660000',GradientType=1 )"
				}
			break;
			default:
				// nada
			break;
		}
	}
}