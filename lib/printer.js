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
    const statement = transactions.map((transaction) => {
      return this._createRow(transaction)
    })
    return `${STATEMENT_HEADER}\n` + statement.join('\n')
  }

  _createRow (transaction) {
    return [
      transaction.date,
      transaction.credit ? this.moneyFormat(transaction.credit) : null,
      transaction.debit ? this.moneyFormat(transaction.debit) : null,
      this.moneyFormat(transaction.balance)
    ].join(BORDER)
  }
}

module.exports = Printer
