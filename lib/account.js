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
    this._validateTransaction(amount)
    this.balance += amount
    const transaction = Transaction.credit(amount, this.balance)
    this.transactions.unshift(transaction)
  }

  withdraw (amount) {
    this._validateWithdrawal(amount)

    this.balance -= amount
    const transaction = Transaction.debit(amount, this.balance)
    this.transactions.unshift(transaction)
  }

  printStatement () {
    this.printer.printStatement(this.transactions)
  }

  _validateTransaction (amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error(Translations.INPUT_ERROR)
    }
  }

  _validateWithdrawal (amount) {
    this._validateTransaction(amount)
    if (amount > this.balance) { throw new Error(Translations.FUNDS_ERROR) }
  }
}

module.exports = Account
