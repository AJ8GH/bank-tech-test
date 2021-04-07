const Printer = require('./printer')
const Transaction = require('./transaction')

class Account {
  constructor (transaction = Transaction, printer = Printer) {
    this.DEFAULT_BALANCE = 0
    this.balance = this.DEFAULT_BALANCE
    this.transactions = []
    this.Printer = printer
    this.printer = new this.Printer()
    this.Transaction = transaction
  }

  deposit (amount) {
    const absAmount = this._validateNumber(amount)
    this.balance += absAmount
    const transaction = {
      balance: this.printer.moneyFormat(this.balance),
      credit: this.printer.moneyFormat(absAmount)
    }
    this.transactions.unshift(new this.Transaction(transaction))
  }

  withdraw (amount) {
    const absAmount = this._validateNumber(amount)
    if (absAmount > this.balance) { throw new Error('Insufficient funds') }

    this.balance -= absAmount
    const transaction = {
      balance: this.printer.moneyFormat(this.balance),
      debit: this.printer.moneyFormat(absAmount)
    }
    this.transactions.unshift(new this.Transaction(transaction))
  }

  printStatement () {
    this.printer.printStatement(this.transactions)
  }

  _validateNumber (amount) {
    if (typeof amount !== 'number') {
      throw new Error('Please enter a number')
    } else {
      return Math.abs(amount)
    }
  }
}

module.exports = Account
