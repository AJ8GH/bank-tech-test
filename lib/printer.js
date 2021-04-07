class Printer {
  static printStatement(transactions) {
    if (transactions.length === 0) { this._printEmptyStatement() }
  }

  static _printEmptyStatement() {
    console.log(`date | balance\n${this._date()} | 0.00`);
  }

  static _date() {
    return (new Date).toLocaleDateString();
  }
}

module.exports = Printer;
