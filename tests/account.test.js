const Account = require('../src/account');

describe('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  describe('balance()', () => {
    it('is 0 by default', () => {
      expect(account.balance).toBe(0);
    });
  });

  describe('deposit()', () => {
    it('adds amount to balance', () => {
      account.deposit(100);
      expect(account.balance).toBe(100)
    });

    it('adds the correct amount to balance', () => {
      account.deposit(55);
      expect(account.balance).toBe(55)
    });
  });
});
