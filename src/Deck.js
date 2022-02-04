class Deck {
    constructor(card) {
        this.cards = card;
        this.numberOfCards = 0;
    };

    countCards() {
         return this.numberOfCards = this.cards.length
    };
};

module.exports = Deck