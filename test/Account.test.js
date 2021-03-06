import sinon from 'sinon'
import assert from 'assert'
import Account from '../lib/Account.js'
import { FUNDS_ERROR, INPUT_ERROR } from '../lib/translations/English.js'

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
    it('subtracts the withdrawals', () => {
      const deposit0 = { credit: 100, debit: 0 }
      const deposit1 = { credit: 200, debit: 0 }
      account.transactions = [deposit0, deposit1]

      assert.strictEqual(account.balance(), 300)
    })

    it('sums the deposits', () => {
      const deposit0 = { credit: 100, debit: 0 }
      const deposit1 = { credit: 200, debit: 0 }
      const withdraw0 = { credit: 0, debit: 50 }
      const withdraw1 = { credit: 0, debit: 100 }
      account.transactions = [deposit0, deposit1, withdraw0, withdraw1]

      assert.strictEqual(account.balance(), 150)
    })
  })

  describe('#deposit()', () => {
    it('checks that input is a positive number', () => {
      assert.throws(() => { account.deposit('hi') }, Error, INPUT_ERROR)
    })
  })

  describe('#withdraw()', () => {
    it('throws error when amount exceeds balance', () => {
      account.deposit(99)
      assert.throws(() => { account.withdraw(100) }, Error, FUNDS_ERROR)
    })

    it('checks that input is a positive number', () => {
      assert.throws(() => { account.withdraw('hi') }, Error, INPUT_ERROR)
    })
  })

  describe('#printStatement()', () => {
    it('calls print function to printer', () => {
      account.printStatement()
      sinon.assert.calledOnce(account.printer.printStatement)
    })
  })
})
