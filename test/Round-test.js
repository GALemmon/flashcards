const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
    
describe('Round', function() {

    card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method");
    card3 = new Card(12, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()");
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);

    it ('should be a function', function() {
       expect(Round).to.be.a('function');
    });
  
    it ('should be an instance of Round', function() {
       expect(round).to.be.an.instanceof(Round);
    });

    it.skip ('should return the current card', function() {
        expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
    });
  
    it ('should count the turns taken', function() {
        round.takeTurn("bad guess");
        expect(round.turns.length).to.equal(1);
    });
        
    it ('should move to the next card', function() {
        expect(round.currentCard).to.equal(deck[1]);
    });

    it ('should evaluate the guess', function() {
        let isCorrect = round.turns[round.turns.length - 1].isCorrect;
        expect(isCorrect).to.equal('false');
    });

    it ('should record incorrect guesses', function() {
        expect(round.incorrectGuesses.length).to.equal(1);
    });

    it ('should give feedback', function() {
        expect(round.feedback).to.equal('incorrect!')
    })

    it ('should count the turns taken', function() {
        round.takeTurn("accessor method");
        expect(round.turns.length).to.equal(2);
    });
        
    it ('should move to the next card', function() {
        expect(round.currentCard).to.equal(deck[2]);
    });

    it ('should evaluate the guess', function() {
        let isCorrect = round.turns[round.turns.length - 1].isCorrect;
        expect(isCorrect).to.equal('true');
    });

    it ('should record incorrect guesses', function() {
        expect(round.incorrectGuesses.length).to.equal(1);
    });

    it ('should give feedback', function() {
        expect(round.feedback).to.equal('correct!');
    });

    it ('should be able to calculate percent correct', function() {
        round.takeTurn('map()');
        let percentCorrect = round.calcualtePercentCorrect()
        expect(percentCorrect).to.equal('66.67%');
    });
    
    it ('should be able to end the round', function() {
        let percentCorrect = round.calcualtePercentCorrect()
        let endMessage = round.endRound(percentCorrect)
        expect(endMessage).to.equal(`** Round over! ** You answered ${percentCorrect} of the questions correctly!`)
    });
});
