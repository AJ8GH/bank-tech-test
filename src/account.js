class Account {
  constructor() {
    this.balance = 0
  }

  deposit() {
    this.balance += 100
  }
}

module.exports = Account;
