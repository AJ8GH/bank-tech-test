const sinon = require('sinon')
const assert = require('assert')
const Account = require('../lib/account')

describe('Account', () => {
  let account

  beforeEach(() => { account = new Account() })
  afterEach(() => { sinon.restore() })

  describe('#balance()', () => {
    it('is 0 by default', () => {
      assert.strictEqual(account.balance, 0)
    })
  })

  describe('#deposit()', () => {
    it('adds amount to balance', () => {
      account.deposit(100)
      assert.strictEqual(account.balance, 100)
    })

    it('adds the correct amount to balance', () => {
      account.deposit(55)
      assert.strictEqual(account.balance, 55)
    })
  })

  describe('#withdraw()', () => {
    it('subtracts amount from balance', () => {
      account.deposit(100)
      assert.strictEqual(account.balance, 100)

      account.withdraw(50)
      assert.strictEqual(account.balance, 50)
    })

    it('subtracts correct amount from balance', () => {
      account.deposit(100)
      assert.strictEqual(account.balance, 100)

      account.withdraw(100)
      assert.strictEqual(account.balance, 0)
    })

    it('throws error at 0 balance', () => {
      assert.throws(() => { account.withdraw(1) }, Error, /Insufficient funds/)
    })

    it('throws error when amount > balance', () => {
      account.deposit(99)
      assert.throws(() => { account.withdraw(100) }, Error, /Insufficient funds/)
    })
  })

  describe('#printStatement()', () => {
    it('calls print function to printer', () => {
      sinon.stub(account.printer, 'printStatement')
      account.printStatement()
      sinon.assert.calledOnce(account.printer.printStatement)
    })
  })
})
