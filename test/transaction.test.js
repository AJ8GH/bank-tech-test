const assert = require('assert');
const mockdate = require('mockdate');

describe('Transaction', () => {
  const Transaction = require('../lib/transaction');

  describe('#amount()', () => {
    it('returns the amount of the transaction', () => {
      const transaction = new Transaction(100)
      assert.strictEqual(transaction.amount, 100)
    });
  });

  describe('#date()', () => {
    it('returns the date of the transaction', () => {
      const date = '01/02/2021';
      mockdate.set(date)

      const transaction = new Transaction(100)
      assert.strictEqual(transaction.date, (new Date).toLocaleDateString())
    });
  });
});
