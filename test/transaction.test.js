const assert = require('assert')
const mockdate = require('mockdate')
const Transaction = require('../lib/transaction')

describe('Transaction', () => {
  let creditTransaction
  let debitTransaction

  beforeEach(() => {
    mockdate.set('01/02/2021')
    creditTransaction = Transaction.credit(200, 500)
    debitTransaction = Transaction.debit(200, 500)
  })

  describe('#date', () => {
    it('returns the date of the transaction', () => {
      const testDate = new Date().toLocaleDateString('en-GB')
      assert.strictEqual(creditTransaction.date, testDate)
    })
  })

  describe('#credit', () => {
    describe('when transaction is a deposit', () => {
      it('returns the transaction amount', () => {
        assert.strictEqual(creditTransaction.credit, 200)
      })
    })

    describe('when transaction is a withdrawal', () => {
      it('returns nothing', () => {
        assert.strictEqual(debitTransaction.credit, null)
      })
    })
  })

  describe('#debit', () => {
    describe('when transaction is a withdrawal', () => {
      it('returns the transaction amount', () => {
        assert.strictEqual(debitTransaction.debit, 200)
      })
    })

    describe('when transaction is a deposit', () => {
      it('returns nothing', () => {
        assert.strictEqual(creditTransaction.debit, null)
      })
    })
  })

  describe('#balance', () => {
    it('returns the balance at the time of transaction', () => {
      assert.strictEqual(creditTransaction.balance, 500)
    })
  })
})
