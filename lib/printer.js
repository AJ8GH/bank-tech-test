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
    transactions.forEach((transaction) => {
      statement.push(this._createRow(transaction))
    })
    return statement.join('\n')
  }

  _createRow (transaction) {
    const t = transaction
    return [
      t.date,
      t.credit ? this.moneyFormat(t.credit) : t.credit,
      t.debit ? this.moneyFormat(t.debit) : t.debit,
      this.moneyFormat(t.balance)
    ].join(BORDER)
  }
}

module.exports = Printer
