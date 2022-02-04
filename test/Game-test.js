const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Game = require('../src/Game');

describe('Game', function() {

    game = new Game();

    it ('should be a function', function() {
       expect(Game).to.be.a('function');
    });
  
    it ('should be an instance of Game', function() {
       expect(game).to.be.an.instanceof(Game);
    });

    it ('should keep track of current round', function() {
        expect(game.currentRound).to.equal(game.rounds[0]);
    });

    it ('should create cards', function () {
        game.start();
        expect(game.deck.cards[0].id).to.equal(1);
    });
});
