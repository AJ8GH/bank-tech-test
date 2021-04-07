const Printer = require('./printer')
const Transaction = require('./transaction')

class Account {
  constructor (transaction = Transaction, printer = Printer) {
    this.DEFAULT_BALANCE = 0
    this.balance = this.DEFAULT_BALANCE
    this.transactions = []
    this.printer = new Printer()
    this.Transaction = transaction
  }

  deposit (amount) {
    this.balance += amount
    const transaction = {
      balance: this.printer.moneyFormat(this.balance),
      credit: this.printer.moneyFormat(amount)
    }
    this.transactions.unshift(new this.Transaction(transaction))
  }

  withdraw (amount) {
    if (amount > this.balance) { throw new Error('Insufficient funds') }

    this.balance -= amount
    const transaction = {
      balance: this.printer.moneyFormat(this.balance),
      debit: this.printer.moneyFormat(amount)
    }
    this.transactions.unshift(new this.Transaction(transaction))
  }

  printStatement () {
    this.printer.printStatement(this.transactions)
  }
}

module.exports = Account
