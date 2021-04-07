class Printer {
  constructor () {
    this.STATEMENT_HEADER = 'date || credit || debit || balance'
    this.statement = this.STATEMENT_HEADER
    this.formatterOptions = { style: 'currency', currency: 'GBP' }
    this.formatter = new Intl.NumberFormat('en-US', this.formatterOptions)
  }

  printStatement (transactions) {
    if (transactions.length === 0) {
      this._printEmptyStatement()
    } else {
      this._resetStatement()
      this._makeStatement(transactions)
      console.log(this.statement)
    }
  }

  moneyFormat (amount) {
    return this.formatter.format(amount)
  }

  _makeStatement (transactions) {
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

  _resetStatement () {
    this.statement = this.STATEMENT_HEADER
  }
}

module.exports = Printer
