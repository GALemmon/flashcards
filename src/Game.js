const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
    


class Game {
  constructor() {
    this.rounds = [];
    this.cards = [];
    this.currentRound = this.rounds[this.rounds.length - 1];
  };
  
  start() {
    this.deck = new Deck(prototypeQuestions.map((question) => new Card(question.id, question.question, question.answers, question.correctAnswer)))    
    this.deck.countCards()
    this.round = new Round(this.deck);
    this.rounds.push(this.round);
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