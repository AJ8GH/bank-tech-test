const LANGUAGE = require('./translations')

class Transaction {
  constructor (transaction) {
    this.balance = transaction.balance
    this.credit = transaction.credit
    this.debit = transaction.debit
    this.date = new Date().toLocaleDateString(LANGUAGE)
  }

  static credit (data) {
    const transaction = new Transaction(data)
    transaction.credit = data.amount
    return transaction
  }
}

module.exports = Transaction
