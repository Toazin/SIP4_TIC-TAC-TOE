var Game = require('./node_modules/tic-tac-toe-js/lib/game.js');
var game = new Game;
//METHODS:
// Game.move('x',number); number from 0 to 9
// game.isFinished();  return boolean
// game.winnner return 'o' or 'x'


console.log(game.toString())
game.move('x', 4);
game.move('o', 5);
console.log(game.toString());
