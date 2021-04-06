const assert = require('assert')

describe('Account', () => {
  const Account = require('../src/account');
  let account;

  beforeEach(() => {
    account = new Account();
  });

  describe('#balance()', () => {
    it('is 0 by default', () => {
      assert.strictEqual(account.balance, 0);
    });
  });

  describe('#deposit()', () => {
    it('adds amount to balance', () => {
      account.deposit(100);
      assert.strictEqual(account.balance, 100)
    });

    it('adds the correct amount to balance', () => {
      account.deposit(55);
      assert.strictEqual(account.balance, 55)
    });
  });
});
