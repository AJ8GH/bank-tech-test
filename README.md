Bank tech test
==============

Getting started
---------------

### Dependencies

### Installation and setup

### Running tests

Design
------

### Approach

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

date       | credit  | debit      | balance
-----------|---------|------------|--------
14/01/2012 |         | 500.00     | 2500.00
13/01/2012 | 2000.00 |            | 3000.00
10/01/2012 | 1000.00 |            | 1000.00

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
I want to be able to request bank-statements
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
