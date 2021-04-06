const assert = require('assert')
const MockDate = require('mockdate');

describe('Account', () => {
  const Account = require('../lib/account');
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

  describe('#withdraw()', () => {
    it('subtracts amount from balance', () => {
      account.deposit(100);
      assert.strictEqual(account.balance, 100)

      account.withdraw(50);
      assert.strictEqual(account.balance, 50)
    });

    it('subtracts correct amount from balance', () => {
      account.deposit(100);
      assert.strictEqual(account.balance, 100)

      account.withdraw(100);
      assert.strictEqual(account.balance, 0)
    });
  });

  describe('#print_statement()', () => {
    describe('with no transactions', () => {
      it('prints the balance and date', () => {
        const statement1 = "date | balance\n01/01/2021 | 0.00"
        MockDate.set('01/01/2021')
        assert.strictEqual(account.printStatement(), statement1)
      });

      it('knows the correct date', () => {
        const statement1 = "date | balance\n02/02/2021 | 0.00"
        MockDate.set('02/02/2021')
        assert.strictEqual(account.printStatement(), statement1)
      });
    });
  });
});
