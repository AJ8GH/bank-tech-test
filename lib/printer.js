class Printer {
  constructor() {
    this.statement = 'date || credit || debit || balance'
    this.formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 2
    })
  }

  printStatement (transactions) {
    if (transactions.length === 0) {
      this._printEmptyStatement()
    } else {
      this._makeStatement(transactions)
      console.log(this.statement)
    }
  }

  moneyFormat(amount) {
    return this.formatter.format(amount)
  }

  _makeStatement(transactions) {
    transactions.forEach((transaction) => {
      const row = [
        transaction.date,
        transaction.credit,
        transaction.debit,
        transaction.balance
      ].join(' || ')
      this.statement += `\n${row}`
    })
  }

  _printEmptyStatement () {
    console.log(`date || balance\n${this._date()} || £0.00`)
  }

  _date () {
    return (new Date()).toLocaleDateString()
  }
}

module.exports = Printer
