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
    this.transactions.unshift(new this.Transaction(transaction))
  }
}

module.exports = Account
