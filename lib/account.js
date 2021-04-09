const Printer = require('./printer')
const Transaction = require('./transaction')

const FUNDS_ERROR_ENGLISH = 'Insufficient funds'
const INPUT_ERROR_ENGLISH = 'Please enter a positive number'

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
    if (amount > this.balance) { throw new Error(FUNDS_ERROR_ENGLISH) }
    this.balance -= amount
    this._createTransaction('debit', amount)
  }

  printStatement () {
    this.printer.printStatement(this.transactions)
  }

  _validateNumber (amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error(INPUT_ERROR_ENGLISH)
    }
  }

  _createTransaction (type, amount) {
    const transactionData = {}
    transactionData.balance = this.balance
    transactionData[`${type}`] = amount
    this.transactions.unshift(new Transaction(transactionData))
  }
}

module.exports = Account
