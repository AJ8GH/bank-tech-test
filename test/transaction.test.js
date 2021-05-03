import assert from 'assert'
import mockdate from 'mockdate'
import Transaction from '../lib/transaction.js'

describe('Transaction', () => {
  describe('#date', () => {
    it('returns the date of the transaction', () => {
      mockdate.set('01/02/2021')
      const testDate = new Date().toLocaleDateString('en-GB')

      const transaction = new Transaction({ credit: 200, balance: 500 })
      assert.strictEqual(transaction.date, testDate)
    })
  })

  describe('.create()', () => {
    describe('when transaction is a deposit', () => {
      const transaction = Transaction.create({ credit: 200, balance: 500 })

      it('creates transaction and sets credit to amount', () => {
        assert.strictEqual(transaction.credit, 200)
      })

      it('leaves debit to 0', () => {
        assert.strictEqual(transaction.debit, 0)
      })
    })

    describe('when transaction is a withdrawal', () => {
      const transaction = Transaction.create({ debit: 200, balance: 500 })

      it('creates transaction and sets debit to amount', () => {
        assert.strictEqual(transaction.debit, 200)
      })

      it('sets credit to 0', () => {
        assert.strictEqual(transaction.credit, 0)
      })
    })
  })

  describe('#balance', () => {
    it('returns the balance at the time of transaction', () => {
      const transaction = new Transaction({ credit: 200, balance: 500 })
      assert.strictEqual(transaction.balance, 500)
    })
  })
})
