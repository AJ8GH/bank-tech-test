const assert = require('assert');
const MockDate = require('mockdate');
const date = new Date;

before(() => {
  MockDate.set(date)
});

describe('Transaction', () => {
  const Transaction = require('../lib/transaction');

  describe('#amount', () => {
    it('returns the amount of the transaction', () => {
      const transaction = new Transaction(100)
      assert.strictEqual(transaction.amount, 100)
    });
  });

  describe('#date', () => {
    it('returns the date of the transaction', () => {
      const transaction = new Transaction(100)

      assert(transaction.date === date.toLocaleDateString)
    });
  });
});
