class Printer {
  constructor () {
    this.STATEMENT_HEADER = 'date || credit || debit || balance'
    this.TABLE_WALL = ' || '
    this.statement = this.STATEMENT_HEADER
    this.formatterOptions = { style: 'currency', currency: 'GBP' }
    this.formatter = new Intl.NumberFormat('en-US', this.formatterOptions)
  }

  printStatement (transactions) {
    this._resetStatement()
    this._makeStatement(transactions)
    console.log(this.statement)
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
      ].join(this.TABLE_WALL)
      this.statement += `\n${row}`
    })
  }

  _resetStatement () {
    this.statement = this.STATEMENT_HEADER
  }
}

module.exports = Printer
