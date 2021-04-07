Printer = require('./printer')

class Account {
  constructor() {
    this.balance = 0;
    this.transactions = []
    this.printer = Printer
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) { throw new Error('Insufficient funds') }

    this.balance -= amount;
  }

  printStatement(transactions = this.transactions) {
    this.printer.printStatement(transactions);
  }
}

module.exports = Account;
