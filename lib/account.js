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
    this.balance += amount
    const transaction = {
      balance: this.printer.moneyFormat(this.balance),
      credit: this.printer.moneyFormat(amount)
    }
    this.transactions.unshift(new this.TransactionClass(transaction))
  }

  withdraw (amount) {
    if (amount > this.balance) { throw new Error('Insufficient funds') }

    this.balance -= amount
    const transaction = {
      balance: this.printer.moneyFormat(this.balance),
      debit: this.printer.moneyFormat(amount)
    }
    this.transactions.unshift(new this.TransactionClass(transaction))
  }

  printStatement () {
    this.printer.printStatement(this.transactions)
  }
}

module.exports = Account
