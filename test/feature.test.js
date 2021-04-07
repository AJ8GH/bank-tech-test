// const assert = require('assert')
const mockdate = require('mockdate')
const sinon = require('sinon')
const Account = require('../lib/account')

describe('Feature testing', () => {
  let account

  beforeEach(() => {
    account = new Account()
    mockdate.set('02/01/2021')
    sinon.stub(console, 'log')
  })

  afterEach(() => { sinon.restore() })

  it('prints correct statement after 1 deposit', () => {
    const output = [
      'date || credit || debit || balance',
      '01/02/2021 || £500.00 ||  || £500.00'
    ].join("\n")

    account.deposit(500)
    account.printStatement()
    sinon.assert.calledWith(console.log, output)
  })

  it('prints correct statement after 1 deposit and 2 withdraws', () => {
    const output = [
      'date || credit || debit || balance',
      '01/02/2021 || £500.00 ||  || £500.00',
      '01/02/2021 ||  || £100.00 || £400.00',
      '01/02/2021 ||  || £350.00 || £50.00'
    ].join("\n")

    account.deposit(500)
    account.withdraw(100)
    account.withdraw(350)

    account.printStatement()
    sinon.assert.calledWith(console.log, output)
  })
})
