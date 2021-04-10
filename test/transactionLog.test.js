const assert = require('assert')
const TransactionLog = require('../lib/transactionLog')

beforeEach(() => {
  transactionLog = new TransactionLog()
})

describe('TransactionLog', () => {
  describe('#transactions()', () => {
    it('starts empty', () => {
      assert.strictEqual(transactionLog.transactions.length, 0)
    })
  })
})
