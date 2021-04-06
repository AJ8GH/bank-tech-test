const assert = require('assert');
const MockDate = require('mockdate');

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
      const date = '01/01/2000';
      MockDate.set(date)

      const transaction = new Transaction(100)
      assert(transaction.date === date)
    });
  });
});
