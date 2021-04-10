const LANGUAGE = 'en-GB'

class Transaction {
  constructor (transaction) {
    this.balance = transaction.balance
    this.credit = transaction.credit
    this.debit = transaction.debit
    this.date = new Date().toLocaleDateString(LANGUAGE)
  }
}

module.exports = Transaction
