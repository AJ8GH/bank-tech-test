const assert = require('assert')
const sinon = require('sinon');
const Account = require('../lib/account');

xdescribe('Feature testing', () => {
  let account;

  beforeEach(() => { account = new Account; });
  beforeEach(() => { sinon.stub(console, 'log'); });
  afterEach(() => { sinon.restore(); });

  it('prints correct statement after 1 deposit', () => {
      const output1 = [
        'date       | credit  | debit  | balance',
        '-----------|---------|--------|--------',
        '14/01/2012 |         | 500.00 | 2500.00'
      ].join("\n");

    account.deposit(100);
    account.printStatement();
    sinon.assert.calledWith(console.log, output1)
  });
});
