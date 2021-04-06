class Transaction {
  constructor(amount) {
    this.amount = amount
    this.date = (new Date).toLocaleDateString()
  }
}

module.exports = Transaction;
