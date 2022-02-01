const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

beforeEach(function() {
    card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method");
    card3 = new Card(12, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()");
    deck = new Deck([card1, card2, card3]);
});

describe('Deck', function() {

    it ('should be a function', function() {
       expect(Deck).to.be.a('function');
    });
  
    it ('should be an instance of Deck', function() {
       expect(deck).to.be.an.instanceof(Deck);
    });

    it ('should know how many cards are in the deck', function(){
        deck.countCards();
        expect(deck.numberOfCards).to.equal(3);
    });
});