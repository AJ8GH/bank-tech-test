const STATEMENT_HEADER = 'date || credit || debit || balance'
const BORDER = ' || '

class Printer {
  constructor () {
    this.formatterOptions = { style: 'currency', currency: 'GBP' }
    this.formatter = new Intl.NumberFormat('en-US', this.formatterOptions)
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
      const row = [trans.date, trans.credit, trans.debit, trans.balance]
      statement.push(row.join(BORDER))
    })
    return statement.join('\n')
  }
}

module.exports = Printer
