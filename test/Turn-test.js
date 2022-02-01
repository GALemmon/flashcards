const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

    it ('should be a function', function() {
      const turn = new Turn();
      expect(Turn).to.be.a('function');
    });
  
    it ('should be an instance of Turn', function() {
      const turn = new Turn();
      expect(turn).to.be.an.instanceof(Turn);
    }); 
  
    it ('should return a guess', function() {
      const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const turn = new Turn('object', card);
      turn.returnGuess();
      expect(turn.guess).to.equal('object');
    });  
  
    it ('should return a card', function() {
      const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const turn = new Turn('object', card);
      turn.returnCard();
      expect(turn.card).to.deep.equal(card);
    });  
  
    it ('should evaluate the guess', function() {
      const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const turn = new Turn('object', card);
      const turn2 = new Turn('array', card);
      turn.evaluateGuess();
      turn2.evaluateGuess();

      expect(turn.isCorrect).to.equal('true');
      expect(turn2.isCorrect).to.equal('false');
    });

    it ('should give feedback', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object', card);
        const turn2 = new Turn('array', card);
        turn.evaluateGuess();
        turn.giveFeedback(turn.isCorrect);
        turn2.evaluateGuess();
        
        turn2.giveFeedback(turn2.isCorrect);

        expect(turn.feedback).to.equal('correct!');
        expect(turn2.feedback).to.equal('incorrect!');
    });
  });