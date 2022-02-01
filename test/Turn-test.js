const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);
    turn2 = new Turn('array', card);
    turn.evaluateGuess();
    turn2.evaluateGuess();
});

describe('Turn', function() {

    it ('should be a function', function() {
        expect(Turn).to.be.a('function');
    });
  
    it ('should be an instance of Turn', function() {
        expect(turn).to.be.an.instanceof(Turn);
    }); 
  
    it ('should return a guess', function() {
         turn.returnGuess();
         expect(turn.guess).to.equal('object');
    });  
  
    it ('should return a card', function() {
         turn.returnCard();
         expect(turn.card).to.deep.equal(card);
    });  
  
    it ('should evaluate the guess', function() {
        expect(turn.isCorrect).to.equal('true');
        expect(turn2.isCorrect).to.equal('false');
    });

    it ('should give feedback', function() {
        turn.giveFeedback(turn.isCorrect);   
        turn2.giveFeedback(turn2.isCorrect);

        expect(turn.feedback).to.equal('correct!');
        expect(turn2.feedback).to.equal('incorrect!');
    });
  });