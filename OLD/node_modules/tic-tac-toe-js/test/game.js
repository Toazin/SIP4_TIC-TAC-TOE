var expect = require('chai').expect
  , Game = require('../').Game;

describe('Game', function() {
  var game;

  beforeEach(function(){
    game = new Game;
    expect(game.xScore).to.equal(0);
    expect(game.oScore).to.equal(0);
    expect(game.winner).to.be.null;
  });

  describe('#move', function(){
    context('when valid', function() {
      it('correctly adjusts a players score', function() {
        expect(game.move('X', 1)).to.be.true;
        expect(game.xScore).to.equal(1);
      });

      it('accepts case insensitive symbols x and o', function(){
        game.move('x', 1);
        expect(game.xScore).to.equal(1);
        game.move('o', 7);
        expect(game.oScore).to.equal(0x40);
        game.move('X', 9);
        expect(game.xScore).to.equal(0x101);
        game.move('O', 5);
        expect(game.oScore).to.equal(0x50);
      });

      it('correctly declares a winner', function() {
        game.move('O', 1);
        game.move('O', 5);
        game.move('O', 9);
        expect(game.winner).to.equal('O');
      });

      it('correctly declares a tie game', function() {
        game.move('x', 1);
        game.move('o', 7);
        game.move('x', 5);
        game.move('o', 9);
        game.move('x', 3);
        game.move('o', 2);
        game.move('x', 4);
        game.move('o', 6);
        game.move('x', 8);
        expect(game.winner).to.equal('T');
      });
    });

    context('when invalid', function() {
      it('does not adjust a players score', function() {
        expect(game.xScore).to.equal(0);
        // mark game as finished, thereby making
        // any moves invalid since the game is finished
        game.winner = 'o';
        expect(game.move('X', 1)).to.be.false;
        expect(game.xScore).to.equal(0);
      });

      it('does not allow a move to an already marked cell', function(){
        expect(game.move('O', 1)).to.be.true;
        expect(game.oScore).to.equal(1);
        expect(game.move('X', 1)).to.be.false;
        expect(game.xScore).to.equal(0);
      })
    });
  });

  describe('#isValidMove', function() {
    it('is false when the cell is already marked', function(){
      game.move('x', 1);
      expect(game.isValidMove('o', 1)).to.be.false;
    });

    it('is false when the game is finished', function(){
      game.winner = 'x';
      expect(game.isValidMove('x', 1)).to.be.false;
    });

    it('is true otherwise', function(){
      expect(game.isValidMove('x', 1)).to.be.true;
    });
  });

  describe('#isFinished', function() {
    it('is false when a winner has not been declared', function() {
      expect(game.isFinished()).to.be.false;
    });

    it('is true when a winner has been declared', function() {
      game.winner = 'x';
      expect(game.isFinished()).to.be.true;
    });
  });

  describe('#at', function() {
    it('is the value of the cell at i', function() {
      expect(game.at(5)).to.be.null;
      expect(game.at(7)).to.be.null;
      game.move('x', 5);
      expect(game.at(5)).to.equal('X');
      game.move('o', 7);
      expect(game.at(7)).to.equal('O');
    });
  });
});
