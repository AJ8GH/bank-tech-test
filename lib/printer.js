class Printer {
  static printStatement(transactions) {
    if (transactions.length === 0) {
      this._printEmptyStatement()
    } else {
      console.log(`date | balance | credit | debit | balance\n${transactions[0].date} | ${transactions[0].credit} | ${transactions[0].debit} | ${transactions[0].balance} `);
    }
  }

  static _printEmptyStatement() {
    console.log(`date | balance\n${this._date()} | 0.00`);
  }

  static _date() {
    return (new Date).toLocaleDateString();
  }
}

module.exports = Printer;
