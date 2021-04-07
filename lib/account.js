class Account {
  constructor() {
    this.balance = 0;
    this.transactions = []
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) { throw new Error('Insufficient funds') }

    this.balance -= amount;
  }

  printStatement() {
    if (this.transactions.length === 0) { this._printEmptyStatement() }
  }
}

module.exports = Account;
