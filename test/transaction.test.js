const assert = require('assert')

describe('Transaction', () => {
  const Transaction = require('../lib/transaction');

  describe('#amount', () => {
    it('returns the amount of the transaction', () => {
      const transaction = new Transaction(100);
      assert.strictEqual(transaction.amount, 100);
    });
  });
});
