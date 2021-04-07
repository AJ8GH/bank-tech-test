const Printer = require('./printer')
const Transaction = require('./transaction')

class Account {
  constructor (transaction = Transaction, printer = Printer) {
    this.DEFAULT_BALANCE = 0
    this.balance = this.DEFAULT_BALANCE
    this.transactions = []
    this.printer = new Printer()
    this.Transaction = transaction
  }

  deposit (amount) {
    this.balance += amount
    const gbpAmount = this.printer.moneyFormat(amount)
    const gbpBalance = this.printer.moneyFormat(this.balance)

    const data = { balance: gbpBalance, credit: gbpAmount }
    const transaction = new this.Transaction(data)
    this.transactions.push(transaction)
  }

  withdraw (amount) {
    if (amount > this.balance) { throw new Error('Insufficient funds') }

    this.balance -= amount
    const gbpAmount = this.printer.moneyFormat(amount)
    const gbpBalance = this.printer.moneyFormat(this.balance)

    const data = { balance: gbpBalance, debit: gbpAmount }
    const transaction = new this.Transaction(data)
    this.transactions.push(transaction)
  }

  printStatement () {
    this.printer.printStatement(this.transactions)
  }
}

module.exports = Account
