const LANGUAGE = require('./translations')

class Transaction {
  constructor (balance) {
    this.balance = balance
    this.credit = null
    this.debit = null
    this.date = new Date().toLocaleDateString(LANGUAGE)
  }

  static credit (amount, balance) {
    const transaction = new Transaction(balance)
    transaction.credit = amount
    return transaction
  }

  static debit (amount, balance) {
    const transaction = new Transaction(balance)
    transaction.debit = amount
    return transaction
  }
}

module.exports = Transaction
