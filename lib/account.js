const Printer = require('./printer')
const Transaction = require('./transaction')

class Account {
  constructor (printer = new Printer()) {
    this.balance = 0
    this.transactions = []
    this.printer = printer
  }

  deposit (amount) {
    this._validateNumber(amount)
    this.balance += amount
    this._createTransaction('credit', amount)
  }

  withdraw (amount) {
    this._validateNumber(amount)
    if (amount > this.balance) { throw new Error('Insufficient funds') }
    this.balance -= amount
    this._createTransaction('debit', amount)
  }

  printStatement () {
    this.printer.printStatement(this.transactions)
  }

  _validateNumber (amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error('Please enter a positive number')
    }
  }

  _createTransaction (type, amount) {
    const transaction = {}
    transaction.balance = this.printer.moneyFormat(this.balance)
    transaction[`${type}`] = this.printer.moneyFormat(amount)
    this.transactions.unshift(new Transaction(transaction))
  }
}

module.exports = Account
