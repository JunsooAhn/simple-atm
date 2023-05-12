import { Bank } from "./bank-api/Bank";
import { Card } from "./bank-api/Card";
import { ATMController } from "./controller/ATMController";

const bankData = {
  "1": {
    pin: "1234",
    accounts: {
      "100": {
        balance: 100,
      },
      "101": {
        balance: 100,
      },
    },
  },
  "2": {
    pin: "1234",
    accounts: {
      "200": {
        balance: 100,
      },
      "201": {
        balance: 100,
      },
    },
  },
};

const bank1 = new Bank(bankData);
const atm1 = new ATMController(bank1);
atm1.insertCard(new Card("1"));
atm1.checkPin("1234");
atm1.selectAccount("100");
atm1.getBalance();
atm1.deposit(300);
atm1.withdraw(200);
console.log("-----");

const bank2 = new Bank(bankData);
const atm2 = new ATMController(bank2);
atm2.insertCard(new Card("1"));
atm2.checkPin("12345");
atm2.getBalance();
atm2.deposit(300);
console.log("-----");

const bank3 = new Bank(bankData);
const atm3 = new ATMController(bank3);
atm3.checkPin("1234");
atm3.selectAccount("100");
atm3.getBalance();
atm3.deposit(300);
atm3.withdraw(500);
console.log("-----");

const bank4 = new Bank(bankData);
const atm4 = new ATMController(bank4);
atm4.insertCard(new Card("1"));
atm4.checkPin("1234");
atm4.deposit(300);
atm4.withdraw(500);
