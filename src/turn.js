class Turn {
    constructor(guess, card) {
        this.guess = guess;
        this.card = card;
        this.isCorrect = '';
        this.feedback = '';

    };

    returnGuess() {

    };

    returnCard() {

    };

    evaluateGuess() {
        this.isCorrect = (this.guess === this.card.correctAnswer) ? 'true' : 'false';
    };

    giveFeedback(isCorrect) {
        this.feedback = (isCorrect === 'true') ? 'correct!' : 'incorrect!';
    };
};

module.exports = Turn;