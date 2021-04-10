const assert = require('assert')
const TransactionLog = require('../lib/transactionLog')

describe('TransactionLog', () => {
  let transactionLog

  beforeEach(() => {
    transactionLog = new TransactionLog()
  })

  describe('#transactions()', () => {
    it('starts empty', () => {
      assert.strictEqual(transactionLog.transactions.length, 0)
    })
  })
})
