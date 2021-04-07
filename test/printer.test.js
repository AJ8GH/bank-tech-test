const sinon = require('sinon')
const mockdate = require('mockdate')
const Printer = require('../lib/printer')
const Transaction = require('../lib/transaction')

describe('Printer', () => {
  let printer

  beforeEach(() => {
    printer = new Printer()
    sinon.stub(console, 'log')
  })

  afterEach(() => { sinon.restore() })

  describe('#printStatement()', () => {
    describe('with no transactions', () => {
      it('prints the balance and date', () => {
        const statement = 'date || balance\n01/01/2021 || £0.00'
        mockdate.set('01/01/2021')
        printer.printStatement([])
        sinon.assert.calledWith(console.log, statement)
      })

      it('knows the correct date', () => {
        const statement = 'date || balance\n02/02/2021 || £0.00'
        mockdate.set('02/02/2021')
        printer.printStatement([])
        sinon.assert.calledWith(console.log, statement)
      })
    })

    describe('with 1 withdraw and 1 deposit', () => {
      it('prints the correct statement', () => {
        const statement = [
          'date || credit || debit || balance',
          '02/02/2021 || £500.00 ||  || £500.00',
          '02/02/2021 ||  || £200.00 || £300.00'
        ].join("\n")

        const transaction1 = new Transaction({ balance: '£500.00', credit: '£500.00'})
        const transaction2 = new Transaction({ balance: '£300.00', debit: '£200.00'})

        mockdate.set('02/02/2021')
        printer.printStatement([transaction1, transaction2])

        sinon.assert.calledWith(console.log, statement)
      })
    })
  })
})
