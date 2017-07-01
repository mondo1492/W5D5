
const Game = require('./game.js');

function GameView(game) {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

}
GameView.prototype.start = function() {
  setInterval(Game.prototype.moveObjects, 20);
  setInterval(Game.prototype.draw, 20);
};
