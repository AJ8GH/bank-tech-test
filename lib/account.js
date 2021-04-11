const Printer = require('./printer')
const Transaction = require('./transaction')
const { FUNDS_ERROR, INPUT_ERROR } = require('./translations')

class Account {
  constructor (printer = new Printer()) {
    this.transactions = []
    this.printer = printer
  }

  deposit (amount) {
    this._validateTransaction(amount)
    this.transactions.unshift(Transaction.create({ credit: amount }))
    this._setBalance()
  }

  withdraw (amount) {
    this._validateWithdrawal(amount)
    this.transactions.unshift(Transaction.create({ debit: amount }))
    this._setBalance()
  }

  printStatement () {
    this.printer.printStatement(this.transactions)
  }

  balance () {
    if (this.transactions.length === 0) { return 0 }

    const balance = this.transactions.map((transaction) => {
      if (transaction.credit) { return transaction.credit }
      if (transaction.debit) { return -transaction.debit }
    })
    return balance.reduce((balance, amount) => balance + amount)
  }

  _setBalance () {
    this.transactions[0].balance = this.balance()
  }

  _validateTransaction (amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error(INPUT_ERROR)
    }
  }

  _validateWithdrawal (amount) {
    this._validateTransaction(amount)
    if (amount > this.balance()) {
      throw new Error(FUNDS_ERROR)
    }
  }
}

module.exports = Account
