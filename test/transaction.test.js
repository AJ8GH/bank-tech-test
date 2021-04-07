const assert = require('assert');
const mockdate = require('mockdate');
const Transaction = require('../lib/transaction');

describe('Transaction', () => {
  describe('#amount', () => {
    it('returns the amount of the transaction', () => {
      const transaction = new Transaction({amount: 100})
      assert.strictEqual(transaction.amount, 100)
    });
  });

  describe('#date', () => {
    it('returns the date of the transaction', () => {
      const date = '01/02/2021';
      mockdate.set(date)

      const transaction = new Transaction(100)
      assert.strictEqual(transaction.date, (new Date).toLocaleDateString())
    });
  });

  describe('#credit', () => {
    describe('when transaction is a deposit', () => {
      it('returns the transaction amount', () => {
        const transaction = new Transaction({ balance: 2000, amount: 500, credit: 500 })
        assert.strictEqual(transaction.credit, 500)
      })
    });

    describe('when transaction is a withdrawal', () => {
      it('returns nothing', () => {
        const transaction = new Transaction({ balance: 2000, amount: 500, debit: 500 })
        assert.strictEqual(transaction.credit, undefined)
      });
    });
  });

  describe('#debit', () => {
    describe('when transaction is a withdrawal', () => {
      it('returns the transaction amount', () => {
        const transaction = new Transaction({ balance: 2000, amount: 500, debit: 500 })
        assert.strictEqual(transaction.debit, 500)
      })
    });

    describe('when transaction is a deposit', () => {
      it('returns nothing', () => {
        const transaction = new Transaction({ balance: 2000, amount: 500, credit: 500 })
        assert.strictEqual(transaction.debit, undefined)
      })
    });
  });

  describe('#balance', () => {
    it('returns the transaction amount', () => {
      const transaction = new Transaction({ balance: 2000, amount: 500, debit: 500 })
      assert.strictEqual(transaction.balance, 2000)
    });
  });
});
