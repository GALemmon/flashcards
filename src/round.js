const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = [];
        this.incorrectGuesses = [];
        this.feedback = '';
    };

    returnCurrentCard() {
        return this.deck.cards[this.turns.length];
    };

    takeTurn(guess) {
        let turn = new Turn(guess, this.deck.cards[this.turns.length]);
        turn.evaluateGuess();
        turn.giveFeedback();
        this.turns.push(turn);
        if (turn.isCorrect === 'true') {
            return this.feedback = turn.feedback;
        };
        if (turn.isCorrect === 'false') {
            return this.incorrectGuesses.push(guess), this.feedback = turn.feedback;
        } ;
    };

    calcualtePercentCorrect() {
        let percentCorrect = (100 - ((this.incorrectGuesses.length / this.turns.length) * 100)).toFixed(2) + '%';
        return percentCorrect;
    };

    endRound(percentCorrect) {
        return `** Round over! ** You answered ${percentCorrect} of the questions correctly!`;
    }
};

module.exports = Round;