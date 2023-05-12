type BankDataType = {
  [key: string]: {
    pin: string;
    accounts: {
      [key: string]: AccountType;
    };
  };
};

type AccountType = {
  balance: number;
};
