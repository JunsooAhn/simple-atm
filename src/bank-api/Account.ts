export class Account {
  private balance: number;

  constructor(innitBanalces: number) {
    this.balance = innitBanalces;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount: number) {
    this.balance += amount;
    console.log(`deposit - Current Balance : ${this.balance}`);
  }

  withdraw(amount: number) {
    if (this.balance >= amount) {
      this.balance -= amount;
      return true;
    }
    throw new Error(`Balance - Current Balance : ${this.balance}`);
  }
}
