const PrinterClass = require('./printer')
const TransactionClass = require('./transaction')

class Account {
  constructor (transactionClass = TransactionClass, printerClass = PrinterClass) {
    this.DEFAULT_BALANCE = 0
    this.balance = this.DEFAULT_BALANCE
    this.transactions = []
    this.PrinterClass = printerClass
    this.printer = new this.PrinterClass()
    this.TransactionClass = transactionClass
  }

  deposit (amount) {
    const absAmount = this._validateNumber(amount)
    this.balance += absAmount
    const transaction = {
      balance: this.printer.moneyFormat(this.balance),
      credit: this.printer.moneyFormat(absAmount)
    }
    this.transactions.unshift(new this.TransactionClass(transaction))
  }

  withdraw (amount) {
    const absAmount = this._validateNumber(amount)
    if (absAmount > this.balance) { throw new Error('Insufficient funds') }

    this.balance -= absAmount
    const transaction = {
      balance: this.printer.moneyFormat(this.balance),
      debit: this.printer.moneyFormat(absAmount)
    }
    this.transactions.unshift(new this.TransactionClass(transaction))
  }

  printStatement () {
    this.printer.printStatement(this.transactions)
  }

  _validateNumber (amount) {
    if (typeof amount !== 'number') {
      throw new Error('Please enter a number')
    } else {
      return Math.abs(amount)
    }
  }
}

module.exports = Account
