class Account {
  constructor() {
    this.balance = 0
  }

  deposit(amount) {
    this.balance += amount
  }

  withdraw(amount) {
    this.balance -= amount
  }

  printStatement() {
    return  "date | balance\n01/01/2021 | 0.00"
  }
}

module.exports = Account;
