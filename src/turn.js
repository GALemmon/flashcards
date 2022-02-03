class Turn {
    constructor(guess, card) {
        this.guess = guess;
        this.card = card;
        this.isCorrect = '';
        this.feedback = '';
    };

    returnGuess() {
        return this.guess;
    };

    returnCard() {
        return this.card;
    };

    evaluateGuess() {
        this.isCorrect = (this.guess === this.card.correctAnswer) ? 'true' : 'false';
    };

    giveFeedback() {
        this.feedback = (this.isCorrect === 'true') ? 'correct!' : 'incorrect!';
    };
};

module.exports = Turn;