const sinon = require('sinon')
const mockdate = require('mockdate')
const Printer = require('../lib/printer')

describe('Printer', () => {
  let printer

  beforeEach(() => {
    printer = new Printer()
    sinon.stub(console, 'log')
  })

  afterEach(() => { sinon.restore() })

  describe('#printStatement()', () => {
    xdescribe('with no transactions', () => {
      it('prints the balance and date', () => {
        const statement1 = 'date | balance\n01/01/2021 | 0.00'
        mockdate.set('01/01/2021')
        printer.printStatement([])
        sinon.assert.calledWith(console.log, statement1)
      })

      it('knows the correct date', () => {
        const statement1 = 'date | balance\n02/02/2021 | 0.00'
        mockdate.set('02/02/2021')
        printer.printStatement([])
        sinon.assert.calledWith(console.log, statement1)
      })
    })
  })
})
