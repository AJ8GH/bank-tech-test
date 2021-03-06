import { LANGUAGE } from './translations/English.js'

export default class Transaction {
  constructor (data) {
    this.balance = data.balance
    this.credit = data.credit || 0
    this.debit = data.debit || 0
    this.date = new Date().toLocaleDateString(LANGUAGE)
  }

  static create (data) {
    return new Transaction(data)
  }
}
