Bank tech test
==============

[![AJ8GH](https://circleci.com/gh/AJ8GH/bank-tech-test.svg?style=shield)](https://app.circleci.com/pipelines/github/AJ8GH/bank-tech-test)
[![AJ8GH](https://circleci.com/gh/AJ8GH/bank-tech-test.svg?style=svg)](https://app.circleci.com/pipelines/github/AJ8GH/bank-tech-test)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![Maintainability](https://api.codeclimate.com/v1/badges/4dd8f783b6d062f73efc/maintainability)](https://codeclimate.com/github/AJ8GH/bank-tech-test/maintainability)

Getting started
---------------

### Dependencies

### Installation and setup

### Running tests

Design
------

### Approach

#### Assumptions

Ambiguity                                    | Solution                                 | Why
---------------------------------------------|------------------------------------------|-------------
Withdrawals when balance is 0                | Guard condition to prevent minus balance | Simplest solution, given the specification does not mention overdraft facility
Unclear formatting of print statement otuput | Correct formatting to display tabularly  | It's not too much more effort to reformat the output to display properly, and it seems pointless to output a table which is hard to read
Print statement when no transactions         | Print 0 balance and current date         | Print statement should still give the account holder the information about their account

### Structure

### Possible extensions

Usage examples
--------------

- **Screenshots**
- **Explanations**

Specification
-------------

### Requirements

#### High-level:
* Interact via IRB or JS Console
* Data kept in memory (no database)

#### User functionality:
* Deposits
* withdrawals
* Account statement printing (date, amount, balance)

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012
**And** a deposit of 2000 on 13-01-2012
**And** a withdrawal of 500 on 14-01-2012
**When** she prints her bank statement
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

***table format***

date       | credit  | debit  | balance
-----------|---------|--------|--------
14/01/2012 |         | 500.00 | 2500.00
13/01/2012 | 2000.00 |        | 3000.00
10/01/2012 | 1000.00 |        | 1000.00

Planning
--------

### User stories

```
As a client,
I want to be able to make a deposit,
So that I can keep my money safe.

As a client,
I want to be able to make a withdrawal,
So that I can access my money.

As a client,
I want to be able to request bank-statements,
So that I can keep track of my banking activities.

As a client,
I want statements to show the transaction amount, type, date and new balance,
So that I can be fully informed.

As a client,
I want transactions listed with the most recent first.
For convenience and a better UX.

As a Bank Manager,
I want accounts to prevent withdrawals into negative balances,
So that the bank does not lose money and clients don't get into debt.
```

### Classes

Object      | Message
------------|---------
Account     | deposit()
Account     | withdraw()
Account     | printStatement()
Transaction | date
Transaction | credit
Transaction | debit
Transaction | balance
Printer     | printStatement
Printer     | moneyFormat()

### Diagrams


### User stories
