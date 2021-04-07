class Transaction {
  constructor(transaction) {
    this.DEFAULT_AMOUNT = 0.00
    this.amount = transaction['amount']
    this.credit = transaction['credit']
    this.debit = transaction['debit']
    this.date = (new Date).toLocaleDateString()
  }
}

module.exports = Transaction;
