function SheetCtrl($scope) {

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

	$scope.increaseRep = function(player) {
		if (player.reputation < 7) {
			player.reputation++;
		}
	}

	$scope.decreaseRep = function(player) {
		if (player.reputation > -8) {
			player.reputation--;
		}
	}

	$scope.reputationStyles = function(player) {
		var reputation = player.reputation;
		var finalStyle = {};
		if (reputation > 0) {
			var finalStyle = {
				'background': '-moz-linear-gradient(160deg,  rgba(0,166,239,0) 0%, rgba(0,166,239,0) 50%, rgba(0,166,239,1) 100%)',
				'background': '-webkit-gradient(linear, left top, right bottom, color-stop(0%,rgba(0,166,239,0)), color-stop(50%,rgba(0,166,239,0)), color-stop(100%,rgba(0,166,239,1)))',
				'background': '-webkit-linear-gradient(160deg,  rgba(0,166,239,0) 0%,rgba(0,166,239,0) 50%,rgba(0,166,239,1) 100%)',
				'background': '-o-linear-gradient(160deg,  rgba(0,166,239,0) 0%,rgba(0,166,239,0) 50%,rgba(0,166,239,1) 100%)',
				'background': '-ms-linear-gradient(160deg,  rgba(0,166,239,0) 0%,rgba(0,166,239,0) 50%,rgba(0,166,239,1) 100%)',
				'background': 'linear-gradient(160deg,  rgba(0,166,239,0) 0%,rgba(0,166,239,0) 50%,rgba(0,166,239,1) 100%)',
				'filter': "progid:DXImageTransform.Microsoft.gradient( startColorstr='#0000a6ef', endColorstr='#00a6ef',GradientType=1 )"
			}
		} else if (reputation < 0) {
			var finalStyle = {
				'background': '-moz-linear-gradient(160deg,  rgba(102,0,0,0) 0%, rgba(102,0,0,0) 49%, rgba(102,0,0,0) 50%, rgba(102,0,0,1) 100%)',
				'background': '-webkit-gradient(linear, left top, right bottom, color-stop(0%,rgba(102,0,0,0)), color-stop(50%,rgba(102,0,0,0)), color-stop(50%,rgba(102,0,0,0)), color-stop(100%,rgba(102,0,0,1)))',
				'background': '-webkit-linear-gradient(160deg,  rgba(102,0,0,0) 0%,rgba(102,0,0,0) 49%,rgba(102,0,0,0) 50%,rgba(102,0,0,1) 100%)',
				'background': '-o-linear-gradient(160deg,  rgba(102,0,0,0) 0%,rgba(102,0,0,0) 49%,rgba(102,0,0,0) 50%,rgba(102,0,0,1) 100%)',
				'background': '-ms-linear-gradient(160deg,  rgba(102,0,0,0) 0%,rgba(102,0,0,0) 49%,rgba(102,0,0,0) 50%,rgba(102,0,0,1) 100%)',
				'background': 'linear-gradient(160deg,  rgba(102,0,0,0) 0%,rgba(102,0,0,0) 49%,rgba(102,0,0,0) 50%,rgba(102,0,0,1) 100%)',
				'filter': "progid:DXImageTransform.Microsoft.gradient( startColorstr='#00660000', endColorstr='#660000',GradientType=1 )"
			}
		}
		switch(true) {
			case (reputation == 1 || reputation == -1):
				finalStyle.opacity = '0.3';
			break;
			case (reputation == 2 || reputation == -2):
				finalStyle.opacity = '0.4';
			break;
			case (reputation == 3 || reputation == -3):
				finalStyle.opacity = '0.5';
			break;
			case (reputation == 4 || reputation == -4):
				finalStyle.opacity = '0.6';
			break;
			case (reputation == 5 || reputation == -5):
				finalStyle.opacity = '0.7';
			break;
			case (reputation == 6 || reputation == -6):
				finalStyle.opacity = '0.8';
			break;
			case (reputation == 7 || reputation == -7):
				finalStyle.opacity = '0.9';
			break;
			case (reputation == 'X'):
				finalStyle.opacity = '1';
			break;
			default:
				// nada
			break;
		}
		return finalStyle;
	}
}