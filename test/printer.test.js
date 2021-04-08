const sinon = require('sinon')
const mockdate = require('mockdate')
const Printer = require('../lib/printer')
const Transaction = require('../lib/transaction')
const assert = require('assert')

describe('Printer', () => {
  let printer

  beforeEach(() => {
    printer = new Printer()
    sinon.stub(console, 'log')
    mockdate.set('02/02/2021')
  })

  afterEach(() => { sinon.restore() })

  describe('#printStatement()', () => {
    it('prints correct statement after 1 deposit 1 withdrawal', () => {
      const statement = [
        'date || credit || debit || balance',
        '02/02/2021 || £500.00 ||  || £500.00',
        '02/02/2021 ||  || £200.00 || £300.00'
      ].join("\n")

      const transaction1 = new Transaction({ balance: '£500.00', credit: '£500.00'})
      const transaction2 = new Transaction({ balance: '£300.00', debit: '£200.00'})

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
