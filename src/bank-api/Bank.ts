import { Account } from "./Account";

export class Bank {
  data: BankDataType;

  constructor(data: BankDataType) {
    this.data = data;
  }

  verifyCardNumber(cardNumber: string) {
    const cardNumbers = Object.keys(this.data);
    if (cardNumbers.includes(cardNumber)) {
      throw new Error("Invalid Card");
    }
    return true;
  }

  verifyPin(cardNumber: string, enteredPin: string) {
    const cardNumbers = Object.keys(this.data);
    if (!cardNumbers.includes(cardNumber)) {
      throw new Error("Incorrect Pin");
    }

    const { pin } = this.data[cardNumber];
    if (pin !== enteredPin) {
      throw new Error("Incorrect Pin");
    }
    return true;
  }

  getAccountsByCardNumber(cardNumber: string) {
    console.log(this.data);
    const { accounts } = this.data[cardNumber];
    return accounts;
  }

  selectAccount(cardNumber: string, accountNumber: string): AccountType {
    const accounts = this.data[cardNumber].accounts;
    const accountNumbers = Object.keys(accounts);
    if (!accountNumbers.includes(accountNumber)) {
      throw new Error("Invalid Account Number");
    }

    const result = accounts[accountNumber];
    return result;
  }

  getBalance(account: Account): number {
    if (!account) {
      throw new Error("No account selected");
    }
    return account.getBalance();
  }

  deposit(account: Account, amount: number) {
    if (!account) {
      throw new Error("No account selected");
    }

    account.deposit(amount);
  }

  withdraw(account: Account, amount: number) {
    if (!account) {
      throw new Error("No account selected");
    }
    account.withdraw(amount);
  }
}
