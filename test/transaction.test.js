const assert = require('assert');
const mockdate = require('mockdate');
const Transaction = require('../lib/transaction');

describe('Transaction', () => {
  let creditTransaction
  let debitTransaction

  beforeEach(() => {
    mockdate.set('01/02/2021')
    creditTransaction = new Transaction({ balance: 2000, credit: 500 })
    debitTransaction = new Transaction({ balance: 2000, debit: 500 })
  })

  describe('#date', () => {
    it('returns the date of the transaction', () => {
      const testDate = (new Date).toLocaleDateString('en-GB')
      assert.strictEqual(creditTransaction.date, testDate)
    });
  });

  describe('#credit', () => {
    describe('when transaction is a deposit', () => {
      it('returns the transaction amount', () => {
        assert.strictEqual(creditTransaction.credit, 500)
      })
    });

    describe('when transaction is a withdrawal', () => {
      it('returns nothing', () => {
        assert.strictEqual(debitTransaction.credit, undefined)
      });
    });
  });

  describe('#debit', () => {
    describe('when transaction is a withdrawal', () => {
      it('returns the transaction amount', () => {
        assert.strictEqual(debitTransaction.debit, 500)
      })
    });

    describe('when transaction is a deposit', () => {
      it('returns nothing', () => {
        assert.strictEqual(creditTransaction.debit, undefined)
      })
    });
  });

  describe('#balance', () => {
    it('returns the balance at the time of transaction', () => {
      assert.strictEqual(creditTransaction.balance, 2000)
    });
  });
});
