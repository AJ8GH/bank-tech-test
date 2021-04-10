const Printer = require('./printer')
const Transaction = require('./transaction')
const Translations = require('./translations')

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
    if (amount > this.balance) {
      throw new Error(Translations.FUNDS_ERROR)
    }
    this.balance -= amount
    this._createTransaction('debit', amount)
  }

  printStatement () {
    this.printer.printStatement(this.transactions)
  }

  _validateNumber (amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error(Translations.INPUT_ERROR)
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
