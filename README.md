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
As a customer,
So that I can keep my money safe,
I want to be able to make a deposit.

As a customer,
So that I can access my money,
I want to be able to make a withdrawal.

As a customer,
So that I can keep track of my banking activities
I want to be able to request bank-statements.
```

### Input / Output

Input | Output
------|--------
a     | b

### Classes

Object | Message
-------|---------
a      | b

### Diagrams

### User stories
