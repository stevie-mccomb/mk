var app = angular.module('mageKnight', [])

var sheetContainer = app.directive('sheetContainer', ['$rootScope', function($rootScope) {
	return {
		link: function(scope, elem) {
			var gridType = 'single';

			scope.playerPosition = function(num) {
				switch(num) {
					case 0:
						if (gridType == 1) {
							return {
								'position': 'absolute', 
								'top': '50%',
								'left': '50%',
								'margin-top': '-150px',
								'margin-left': '-230px'
							}
						} else if (gridType == 2) {
							return {
								'position': 'absolute', 
								'top': '50%',
								'left': '0',
								'margin-top': '-150px'
							}
						} else {
							return {
								'position': 'absolute',
								'top': '0',
								'left': '0'
							};
						}
					break;
					case 1:
						if (gridType == 2) {
							return {
								'position': 'absolute',
								'top': '50%',
								'right': '0',
								'margin-top': '-150px'
							}
						} else {
							return {
								'position': 'absolute',
								'top': '0',
								'right': '0'
							};
						}
					break;
					case 2:
						if (gridType == 3) {
							return {
								'position': 'absolute',
								'bottom': '0',
								'left': '50%',
								'margin-left': '-230px'
							};
						} else {
							return {
								'position': 'absolute',
								'bottom': '0',
								'left': '0'
							};
						}
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

			$rootScope.$watch('gameStarted', function(newVal, oldVal) {
				if (newVal != oldVal && newVal == true) {
					gridType = $rootScope.players.length;
				}
			});
		}
	}
}]);

var startingSheet = app.directive('startingSheet', ['$rootScope', function($rootScope) {
	return {
		link: function(scope, elem) {
			scope.addPlayer = function(playerNumber) {				
				$rootScope.newPlayer = {
					'number': playerNumber,
					'portrait': 'images/default-portrait.png',
					'level': 1,
					'fame': 0,
					'reputation': 0
				};
			};
			scope.closeSettings = function() {
				$rootScope.newPlayer = null;
			};
			scope.chooseCharacter = function(character) {
				if (!$rootScope.chosenCharacters) {
					$rootScope.chosenCharacters = [];
				}
				if ($rootScope.chosenCharacters.indexOf(character) < 0) {
					$rootScope.newPlayer.character = character;
					$rootScope.newPlayer.portrait = 'images/' + character + '.jpg';
				}
			};
			scope.createPlayer = function() {
				if (!$rootScope.players) {
					$rootScope.players = [];
				}
				if ($rootScope.newPlayer.name && $rootScope.newPlayer.portrait != 'images/default-portrait.png') {
					$rootScope.players.push($rootScope.newPlayer);
					$rootScope.chosenCharacters.push($rootScope.newPlayer.character);
					switch($rootScope.newPlayer.number) {
						case 1:
							$rootScope.playerOneExists = true;
							$rootScope.playerOne = $rootScope.newPlayer;
						break;
						case 2:
							$rootScope.playerTwoExists = true;
							$rootScope.playerTwo = $rootScope.newPlayer;
						break;
						case 3:
							$rootScope.playerThreeExists = true;
							$rootScope.playerThree = $rootScope.newPlayer;
						break;
						case 4:
							$rootScope.playerFourExists = true;
							$rootScope.playerFour = $rootScope.newPlayer;
						break;
						default:
							// nada
						break;
					}
					$rootScope.newPlayer = undefined;
				}
			};
			scope.startGame = function() {
				if ($rootScope.players) {
					$rootScope.gameStarted = true;
				}
			};
		}
	}
}]);

var fameContainer = app.directive('fameContainer', ['$rootScope', '$timeout', function($rootScope, $timeout) {
	return {
		link: function(scope, elem) {
			scope.$watch('player.level', function(newVal, oldVal) {
				if (newVal != oldVal) {
					scope.levelNotify(newVal);
				}
			});
			scope.levelNotify = function(newLevel) {
				$rootScope.levelingUp = true;
				$rootScope.newLevel = newLevel;
				$rootScope.leveledPlayer = scope.player.name;
				var flashTimer = $timeout(function() {
					$rootScope.levelingUp = false;
					$rootScope.newLevel = undefined;
				}, 10000);
			};
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