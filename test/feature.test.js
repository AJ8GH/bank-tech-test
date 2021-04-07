// const assert = require('assert')
const mockdate = require('mockdate')
const sinon = require('sinon')
const Account = require('../lib/account')

xdescribe('Feature tests', () => {
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
      '01/02/2021 ||  || £350.00 || £50.00',
      '01/02/2021 ||  || £100.00 || £400.00',
      '01/02/2021 || £500.00 ||  || £500.00'
    ].join("\n")

    account.deposit(500)
    account.withdraw(100)
    account.withdraw(350)

    account.printStatement()
    sinon.assert.calledWith(console.log, output)
  })

  it('prints multiple statements correctly', () => {
    const output1 = [
      'date || credit || debit || balance',
      '01/02/2021 ||  || £49.99 || £450.01',
      '01/02/2021 || £500.00 ||  || £500.00'
    ].join("\n")

    const output2 = [
      'date || credit || debit || balance',
      '01/02/2021 ||  || £101.05 || £348.96',
      '01/02/2021 ||  || £49.99 || £450.01',
      '01/02/2021 || £500.00 ||  || £500.00'
    ].join("\n")

    account.deposit(500)
    account.withdraw(49.99)
    account.printStatement()
    sinon.assert.calledWith(console.log, output1)

    account.withdraw(101.05)
    account.printStatement()
    sinon.assert.calledWith(console.log, output2)
  })

  it('meets the acceptance criteria', () => {
    acceptanceCriteria = [
      "date || credit || debit || balance",
      "14/01/2012 ||  || £500.00 || £2,500.00",
      "13/01/2012 || £2,000.00 ||  || £3,000.00",
      "10/01/2012 || £1,000.00 ||  || £1,000.00"
    ].join("\n")

    mockdate.set('01/10/2012')
    account.deposit(1000)

    mockdate.set('01/13/2012')
    account.deposit(2000)

    mockdate.set('01/14/2012')
    account.withdraw(500)

    account.printStatement()
    sinon.assert.calledWith(console.log, acceptanceCriteria)
  })
})
