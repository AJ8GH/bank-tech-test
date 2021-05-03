import sinon from 'sinon'
import mockdate from 'mockdate'
import Printer from '../lib/printer.js'
import Transaction from '../lib/transaction.js'
import assert from 'assert'

describe('Printer', () => {
  let printer

  beforeEach(() => {
    printer = new Printer()
    sinon.stub(console, 'log')
    mockdate.set('02/02/2021')
  })

  afterEach(() => {
    sinon.restore()
  })

  describe('#printStatement()', () => {
    it('prints correct statement after 1 deposit 1 withdrawal', () => {
      const statement = [
        'date || credit || debit || balance',
        '02/02/2021 || £500.00 ||  || £500.00',
        '02/02/2021 ||  || £200.00 || £300.00',
      ].join('\n')

      const transaction1 = Transaction.create({ credit: 500, balance: 500 })
      const transaction2 = Transaction.create({ debit: 200, balance: 300 })

      printer.printStatement([transaction1, transaction2])
      sinon.assert.calledWith(console.log, statement)
    })
  })

  describe('#moneyFormat()', () => {
    it('correctly formats 1', () => {
      assert.strictEqual(printer.moneyFormat(1), '£1.00')
    })

    it('correctly formats 5025.79', () => {
      assert.strictEqual(printer.moneyFormat(5025.79), '£5,025.79')
    })

    it('correctly formats 0.9', () => {
      assert.strictEqual(printer.moneyFormat(0.9), '£0.90')
    })
  })
})
