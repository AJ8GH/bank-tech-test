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
    const transaction = Transaction.credit(amount, this.balance)
    this.transactions.unshift(transaction)
  }

  withdraw (amount) {
    this._validateNumber(amount)
    if (amount > this.balance) { throw new Error(Translations.FUNDS_ERROR) }

    this.balance -= amount
    const transaction = Transaction.debit(amount, this.balance)
    this.transactions.unshift(transaction)
  }

  printStatement () {
    this.printer.printStatement(this.transactions)
  }

  _validateNumber (amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error(Translations.INPUT_ERROR)
    }
  }
}

module.exports = Account
