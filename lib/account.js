class Account {
  constructor() {
    this.balance = 0;
    this.transactions = []
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  printStatement() {
    if (this.transactions.length === 0) { this._printEmptyStatement() }
  }

  _date() {
    return (new Date).toLocaleDateString();
  }

  _printEmptyStatement() {
    console.log(`date | balance\n${this._date()} | 0.00`);
  }
}

module.exports = Account;
