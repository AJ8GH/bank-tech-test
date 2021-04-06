class Account {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  printStatement() {
    return  `date | balance\n${this._date()} | 0.00`;
  }

  _date() {
    return (new Date).toLocaleDateString();
  }
}

module.exports = Account;
