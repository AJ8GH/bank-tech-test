const {
  STATEMENT_HEADER,
  BORDER,
  CURRENCY,
  LANGUAGE
} = require('./translations')

class Printer {
  constructor () {
    this.formatterOptions = { style: 'currency', currency: CURRENCY }
    this.formatter = new Intl.NumberFormat(LANGUAGE, this.formatterOptions)
  }

  printStatement (transactions) {
    console.log(this._formatStatement(transactions))
  }

  moneyFormat (amount) {
    return this.formatter.format(amount)
  }

  _formatStatement (transactions) {
    const statement = [STATEMENT_HEADER]
    transactions.forEach((trans) => {
      const row = [
        trans.date,
        trans.credit ? this.moneyFormat(trans.credit) : null,
        trans.debit ? this.moneyFormat(trans.debit) : null,
        this.moneyFormat(trans.balance)
      ]
      statement.push(row.join(BORDER))
    })
    return statement.join('\n')
  }
}

module.exports = Printer
