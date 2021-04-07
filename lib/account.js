const Printer = require('./printer')
const Transaction = require('./transaction')

class Account {
  constructor(transaction = Transaction, printer = Printer) {
    this.DEFAULT_BALANCE = 0.00;
    this.balance = this.DEFAULT_BALANCE;
    this.transactions = [];
    this.printer = printer;
    this.transaction = transaction;
  }

  deposit(amount) {
    this.balance += amount;
    const data = {balance: this.balance, amount: amount, credit: amount}
    const transaction = new this.transaction(data)
    this.transactions.push(transaction);
  }

  withdraw(amount) {
    if (amount > this.balance) { throw new Error('Insufficient funds') }

    this.balance -= amount;
  }

  printStatement() {
    this.printer.printStatement(this.transactions);
  }
}

module.exports = Account;
