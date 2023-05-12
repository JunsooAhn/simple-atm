export class Card {
  private cardNumber: string;

  constructor(cardNumber: string) {
    this.cardNumber = cardNumber;
  }

  getCardNumber() {
    return this.cardNumber;
  }
}
