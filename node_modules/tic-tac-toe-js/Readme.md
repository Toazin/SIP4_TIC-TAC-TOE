# Tic Tac Toe

JavaScript tic tac toe game.

## Usage

`npm install tic-tac-toe-js`

```
$ node

> var Game = require('tic-tac-toe-js').Game;
[Function Game]
> game = new Game;
{ xScore: 0, oScore: 0, winner: null }
> game.move('x', 1);
true
> game.move('o', 9);
true
> game.isFinished();
false
> console.log(game.toString());
X |   |
--+---+--
  |   |
--+---+--
  |   | O
> game.move('x', 4);
true
> game.move('o', 7);
true
> game.move('x', 4);
true
> console.log(game.toString());
X | X | O
--+---+--
X |   |
--+---+--
O |   | O
> game.move('x', 6);
true
> game.move('o', 8);
true
> console.log(game.toString());
X | X | O
--+---+--
X |   | X
--+---+--
O | O | O
> game.move('x', 5);
false
> game.isFinished()
true
> game.winnner
'O'
```

## License

[MIT](https://github.com/benjreinhart/tic-tac-toe-js/blob/master/LICENSE.txt)