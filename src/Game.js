const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
    


class Game {
  constructor() {
    this.deck = [];
    this.round = {};    
    
  };
  
  start() {
    this.deck = new Deck(prototypeQuestions.forEach((element) => new Card(element.id, element.question, element.answers, element.correctAnswer)));
    this.round = new Round(this.deck);
    this.printMessage(this.deck, this.round);
    this.printQuestion(this.round);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;