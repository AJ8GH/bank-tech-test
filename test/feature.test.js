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
    const output1 = [
      'date || credit || debit || balance',
      '01/02/2021 || £500.00 ||  || £500.00'
    ].join("\n")

    account.deposit(500)
    account.printStatement()
    sinon.assert.calledWith(console.log, output1)
  })
})
