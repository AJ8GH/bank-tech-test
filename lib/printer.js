const STATEMENT_HEADER = 'date || credit || debit || balance'
const TABLE_WALL = ' || '

class Printer {
  constructor () {
    this.formatterOptions = { style: 'currency', currency: 'GBP' }
    this.formatter = new Intl.NumberFormat('en-US', this.formatterOptions)
  }

  printStatement (transactions) {
    console.log(this._makeStatement(transactions))
  }

  moneyFormat (amount) {
    return this.formatter.format(amount)
  }

  _makeStatement (transactions) {
    const statement = [STATEMENT_HEADER]
    transactions.forEach((transaction) => {
      const row = [
        transaction.date,
        transaction.credit,
        transaction.debit,
        transaction.balance
      ].join(TABLE_WALL)
      statement.push(row)
    })
    return statement.join('\n')
  }
}

module.exports = Printer
