import sinon from 'sinon'
import assert from 'assert'
import Account from '../lib/account.js'

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
