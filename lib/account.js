const Printer = require('./printer')
const Transaction = require('./transaction')
const { FUNDS_ERROR, INPUT_ERROR } = require('./translations')

class Account {
  constructor (printer = new Printer()) {
    this.balance = 0
    this.transactions = []
    this.printer = printer
  }

  deposit (amount) {
    this._validateTransaction(amount)
    this.balance += amount
    const data = { credit: amount, balance: this.balance }
    this.transactions.unshift(Transaction.create(data))
  }

  withdraw (amount) {
    this._validateWithdrawal(amount)
    this.balance -= amount
    const data = { debit: amount, balance: this.balance }
    this.transactions.unshift(Transaction.create(data))
  }

  printStatement () {
    this.printer.printStatement(this.transactions)
  }

  _validateTransaction (amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error(INPUT_ERROR)
    }
  }

  _validateWithdrawal (amount) {
    this._validateTransaction(amount)
    if (amount > this.balance) { throw new Error(FUNDS_ERROR) }
  }
}

module.exports = Account
