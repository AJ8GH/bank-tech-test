const Printer = require('./printer')
const Transaction = require('./transaction')

class Account {
  constructor (transaction = Transaction, printer = Printer) {
    this.DEFAULT_BALANCE = 0
    this.balance = this.DEFAULT_BALANCE
    this.transactions = []
    this.Printer = new printer()
    this.Transaction = transaction
  }

  deposit (amount) {
    this.balance += amount
    const data = { balance: this.balance, amount: amount, credit: amount }
    const transaction = new this.Transaction(data)
    this.transactions.push(transaction)
  }

  withdraw (amount) {
    if (amount > this.balance) { throw new Error('Insufficient funds') }

    this.balance -= amount
    const data = { balance: this.balance, amount: amount, debit: amount }
    const transaction = new this.Transaction(data)
    this.transactions.push(transaction)
  }

  printStatement () {
    this.Printer.printStatement(this.transactions)
  }
}

module.exports = Account
