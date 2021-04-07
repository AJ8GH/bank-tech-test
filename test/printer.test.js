const sinon = require('sinon')
const assert = require('assert')
const mockdate = require('mockdate');

describe('Printer', () => {
  const printer = require('../lib/printer')

  describe('#printStatement()', () => {
    let spy;

    beforeEach(() => { spy = sinon.spy(console, 'log'); });
    afterEach(() => { spy.restore(); });

    xdescribe('with no transactions', () => {
      it('prints the balance and date', () => {
        const statement1 = "date | balance\n01/01/2021 | 0.00"
        mockdate.set('01/01/2021')
        printer.printStatement(([]))
        assert(spy.calledWith(statement1));
      });

      it('knows the correct date', () => {
        const statement1 = "date | balance\n02/02/2021 | 0.00"
        mockdate.set('02/02/2021')
        printer.printStatement([])
        assert(spy.calledWith(statement1));
      });
    });
  });
});
