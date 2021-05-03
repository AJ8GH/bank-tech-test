import { FUNDS_ERROR, INPUT_ERROR } from './translations.js'
import Transaction from './transaction.js'
import Printer from './printer.js'

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
    let balance = 0
    this.transactions.forEach((transaction) => {
      balance += transaction.credit - transaction.debit
    })
    return balance
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
    if (amount > this.balance()) {
      throw new Error(FUNDS_ERROR)
    }
  }
}
