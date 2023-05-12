import { Account } from "../bank-api/Account";
import { Bank } from "../bank-api/Bank";
import { Card } from "../bank-api/Card";

export class ATMController {
  private bank: Bank;
  private insertedCardNumber: string;
  private verifiedPin: boolean;
  private selectedAccount: Account | null;

  constructor(bank: Bank) {
    this.bank = bank;
    this.insertedCardNumber = "";
    this.verifiedPin = false;
    this.selectedAccount = null;
  }

  insertCard(card: Card) {
    try {
      if (this.insertedCardNumber) {
        throw new Error("Card already inserted !");
      }

      this.insertedCardNumber = card.getCardNumber();
      console.log("Card inserted.");
    } catch (error: any) {
      console.log("ERROR : ", error.message);
    }
  }

  checkPin(pin: string) {
    try {
      if (!this.insertedCardNumber) {
        throw new Error("No Card inserted !");
      }

      if (!this.bank.verifyPin(this.insertedCardNumber, pin)) {
        return;
      }

      console.log("Pin is correct.");
      this.verifiedPin = true;
    } catch (error: any) {
      console.log("ERROR : ", error.message);
    }
  }

  selectAccount(accountNumber: string) {
    try {
      if (!this.insertedCardNumber) {
        throw new Error("No Card inserted !");
      }

      if (!this.verifiedPin) {
        throw new Error("Pin not verified !");
      }
      const { balance } = this.bank.selectAccount(this.insertedCardNumber, accountNumber);
      this.selectedAccount = new Account(balance);
      console.log("Account selected.");
    } catch (error: any) {
      console.log("ERROR : ", error.message);
    }
  }

  getBalance() {
    try {
      if (!this.selectedAccount) {
        throw new Error("Account is not selected !");
      }
      const balance = this.bank.getBalance(this.selectedAccount);
      console.log(`Your Balance : ${balance}`);
      return balance;
    } catch (error: any) {
      console.log("ERROR : ", error.message);
    }
  }

  deposit(amount: number) {
    try {
      if (!this.selectedAccount) {
        throw new Error("Account is not selected !");
      }
      this.bank.deposit(this.selectedAccount, amount);
    } catch (error: any) {
      console.log("ERROR : ", error.message);
    }
  }

  withdraw(amount: number) {
    try {
      if (!this.selectedAccount) {
        throw new Error("Account is not selected !");
      }
      return this.bank.withdraw(this.selectedAccount, amount);
    } catch (error: any) {
      console.log("ERROR : ", error.message);
    }
  }
}
