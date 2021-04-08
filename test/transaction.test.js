const assert = require('assert');
const mockdate = require('mockdate');
const Transaction = require('../lib/transaction');

describe('Transaction', () => {
  describe('#date', () => {
    it('returns the date of the transaction', () => {
      mockdate.set('01/02/2021')
      const transaction = new Transaction(100)

      assert.strictEqual(transaction.date, (new Date).toLocaleDateString('en-GB'))
    });
  });

  describe('#credit', () => {
    describe('when transaction is a deposit', () => {
      it('returns the transaction amount', () => {
        const transaction = new Transaction({ balance: 2000, credit: 500 })
        assert.strictEqual(transaction.credit, 500)
      })
    });

    describe('when transaction is a withdrawal', () => {
      it('returns nothing', () => {
        const transaction = new Transaction({ balance: 2000, debit: 500 })
        assert.strictEqual(transaction.credit, undefined)
      });
    });
  });

  describe('#debit', () => {
    describe('when transaction is a withdrawal', () => {
      it('returns the transaction amount', () => {
        const transaction = new Transaction({ balance: 2000, debit: 500 })
        assert.strictEqual(transaction.debit, 500)
      })
    });

    describe('when transaction is a deposit', () => {
      it('returns nothing', () => {
        const transaction = new Transaction({ balance: 2000, credit: 500 })
        assert.strictEqual(transaction.debit, undefined)
      })
    });
  });

  describe('#balance', () => {
    it('returns the balance at the time of transaction', () => {
      const transaction = new Transaction({ balance: 2000, debit: 500 })
      assert.strictEqual(transaction.balance, 2000)
    });
  });
});
