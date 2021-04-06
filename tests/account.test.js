const Account = require('../src/account');

describe('Account', () => {
  describe('balance()', () => {
    it('is 0 by default', () => {
      account = new Account();
      expect(account.balance).toBe(0);
    });
  });
});
