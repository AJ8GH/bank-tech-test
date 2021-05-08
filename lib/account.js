import { FUNDS_ERROR, INPUT_ERROR } from './translations/English.js'
import Transaction from './Transaction.js'
import Printer from './Printer.js'

export default class Account {
  constructor (printer = new Printer()) {
    this.transactions = []
    this.printer = printer
  }

  deposit (amount) {
    this._validateTransaction(amount)
    this._createTransaction({ credit: amount })
  }

  withdraw (amount) {
    this._validateWithdrawal(amount)
    this._createTransaction({ debit: amount })
  }

  printStatement () {
    this.printer.printStatement(this.transactions)
  }

  balance () {
    return this.transactions.map((transaction) => {
      if (transaction.credit) { return transaction.credit }
      return -transaction.debit
    }).reduce((sum, amount) => sum + amount)
  }

  _createTransaction (transaction) {
    this.transactions.unshift(Transaction.create(transaction))
    this.transactions[0].balance = this.balance()
  }

  _validateTransaction (amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error(INPUT_ERROR)
    }
  }

  _validateWithdrawal (amount) {
    this._validateTransaction(amount)
    if (amount > this.balance()) { throw new Error(FUNDS_ERROR) }
  }
}
