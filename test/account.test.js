const sinon = require('sinon')
const assert = require('assert')
const Account = require('../lib/account')

describe('Account', () => {
  let account

  beforeEach(() => {
    account = new Account()
    sinon.stub(account.printer, 'printStatement')
  })

  afterEach(() => {
    sinon.restore()
  })

  describe('#balance()', () => {
    it('is 0 by default', () => {
      assert.strictEqual(account.balance(), 0)
    })

    it('sums the deposits', () => {
      const deposit1 = { credit: 100 }
      const deposit2 = { credit: 200 }

      account.transactions.unshift(deposit1)
      account.transactions.unshift(deposit2)

      assert.strictEqual(account.balance(), 300)
    })
  })

  describe('#deposit()', () => {
    it('checks that input is a positive number', () => {
      assert.throws(() => {
          account.deposit('hi')
        }, Error, /Please enter a number/)
    })
  })

  describe('#withdraw()', () => {
    it('throws error when amount > balance', () => {
      account.deposit(99)
      assert.throws(() => {
          account.withdraw(100)
        }, Error, /Insufficient funds/)
    })

    it('checks that input is a positive number', () => {
      assert.throws(() => {
          account.withdraw('hi')
        }, Error, /Please enter a postive number/)
    })
  })

  describe('#printStatement()', () => {
    it('calls print function to printer', () => {
      account.printStatement()
      sinon.assert.calledOnce(account.printer.printStatement)
    })
  })
})
