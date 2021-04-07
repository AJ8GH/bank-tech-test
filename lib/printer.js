class Printer {
  constructor() {
    this.HEADER = 'date || credit || debit || balance'
  }

  printStatement (transactions) {
    const output = []

    if (transactions.length === 0) {
      this._printEmptyStatement()
    } else {
      this._formatAllAmounts(transactions)
      transactions.forEach((transaction) => {
        const row = [
          transaction.date,
          transaction.credit,
          transaction.debit,
          transaction.balance
        ]
        const joinedRow = row.join(' || ')
        output.push(this.HEADER)
        output.push(joinedRow)
      })
      console.log(output.join("\n"))
    }
  }

  _printEmptyStatement () {
    console.log(`date || balance\n${this._date()} || 0.00`)
  }

  _date () {
    return (new Date()).toLocaleDateString()
  }

  _moneyFormat(amount) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 2
    })
    return formatter.format(amount)
  }

  _formatAllAmounts(transactions) {
    transactions.forEach((transaction) => {
      transaction.balance = this._moneyFormat(transaction.balance)
      if (transaction.debit) {
        transaction.debit = this._moneyFormat(transaction.debit)
      }
      if (transaction.credit) {
        transaction.credit = this._moneyFormat(transaction.credit)
      }
    })
  }
}

module.exports = Printer
