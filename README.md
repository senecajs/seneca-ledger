![Seneca](http://senecajs.org/files/assets/seneca-logo.png)

> A [Seneca.js](http://senecajs.org) plugin

# @seneca/ledger

[![npm version](https://img.shields.io/npm/v/@seneca/ledger.svg)](https://npmjs.com/package/@seneca/ledger)
[![build](https://github.com/senecajs/seneca-ledger/actions/workflows/build.yml/badge.svg)](https://github.com/senecajs/seneca-ledger/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/github/senecajs/seneca-ledger/badge.svg?branch=main)](https://coveralls.io/github/senecajs/seneca-ledger?branch=main)
[![Known Vulnerabilities](https://snyk.io/test/github/senecajs/seneca-ledger/badge.svg)](https://snyk.io/test/github/senecajs/seneca-ledger)
[![DeepScan grade](https://deepscan.io/api/teams/5016/projects/20872/branches/581541/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=5016&pid=20872&bid=581541)
[![Maintainability](https://api.codeclimate.com/v1/badges/8242b80adb8acb685afd/maintainability)](https://codeclimate.com/github/senecajs/seneca-ledger/maintainability)

| ![Voxgig](https://www.voxgig.com/res/img/vgt01r.png) | This open source module is sponsored and supported by [Voxgig](https://www.voxgig.com). |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------- |

Ledger business logic plugin for the Seneca platform.

## Install

```sh
$ npm install @seneca/ledger
```

## Quick Example

```js
// Setup
const seneca = Seneca().use('promisify').use('entity').use('ledger')
await seneca.ready()

// Create an account
await seneca.post('biz:ledger,create:account', {
  account: { oref: 'o0', path: 'Asset', name: 'Cash', normal: 'debit' },
})

// Get an account
await seneca.post('biz:ledger,get:account', { aref: 'o0/Asset/Cash' })

// List accounts
await seneca.post('biz:ledger,list:account', { org_id: 'o0' })

// Update an account
await seneca.post('biz:ledger,update:account', {
  aref: 'o0/Asset/Cash',
  account: { custom_field: 'value' },
})

// Create a book (accounting period)
await seneca.post('biz:ledger,create:book', {
  book: { oref: 'o0', name: 'Q1', start: 20220101, end: 20220331 },
})

// Get a book
await seneca.post('biz:ledger,get:book', { bref: 'o0/Q1/20220101' })

// List books
await seneca.post('biz:ledger,list:book', { oref: 'o0' })

// Update a book
await seneca.post('biz:ledger,update:book', {
  bref: 'o0/Q1/20220101',
  book: { end: 20220331 },
})

// Create a journal entry (double-entry: debit + credit)
await seneca.post('biz:ledger,create:entry', {
  bref: 'o0/Q1/20220101',
  daref: 'o0/Asset/Cash',
  caref: 'o0/Income/Sales',
  val: 100,
  desc: 'Jan Sales',
  date: 20220131,
})

// List entries
await seneca.post('biz:ledger,list:entry', {
  oref: 'o0',
  bref: 'o0/Q1/20220101',
})

// Balance an account
await seneca.post('biz:ledger,balance:account', {
  aref: 'o0/Asset/Cash',
  bref: 'o0/Q1/20220101',
})

// Close an account (zero balance and optionally carry forward to target book)
await seneca.post('biz:ledger,close:account', {
  aref: 'o0/Asset/Cash',
  bref: 'o0/Q1/20220101',
  target_bref: 'o0/Q2/20220401',
})

// Close a book (close all accounts and mark book as closed)
await seneca.post('biz:ledger,close:book', {
  bref: 'o0/Q1/20220101',
  target_bref: 'o0/Q2/20220401',
})

// Export account to CSV
await seneca.post('biz:ledger,export:account,format:csv', {
  aref: 'o0/Asset/Cash',
  bref: 'o0/Q1/20220101',
})

// Export book to CSV (all accounts summary)
await seneca.post('biz:ledger,export:book,format:csv', {
  bref: 'o0/Q1/20220101',
})
```

<!--START:options-->

## More Examples

See [test/](test/) for more usage examples.

## Motivation

A [Seneca.js](http://senecajs.org) plugin.

## Support

If you're using this module and need help, you can:

- Post a [github issue](https://github.com/senecajs/seneca-ledger/issues)
- Tweet to [@senecajs](http://twitter.com/senecajs)
- Ask on the [Gitter](https://gitter.im/senecajs/seneca)

## API

### Options

_None._

<!--END:options-->

<!--START:action-list-->


## Action Patterns

* [balance:account,biz:ledger](#-balanceaccountbizledger-)
* [balance:book,biz:ledger](#-balancebookbizledger-)
* [biz:ledger,close:account](#-bizledgercloseaccount-)
* [biz:ledger,close:book](#-bizledgerclosebook-)
* [biz:ledger,create:account](#-bizledgercreateaccount-)
* [biz:ledger,create:book](#-bizledgercreatebook-)
* [biz:ledger,create:entry](#-bizledgercreateentry-)
* [biz:ledger,export:account,format:csv](#-bizledgerexportaccountformatcsv-)
* [biz:ledger,export:book,format:csv](#-bizledgerexportbookformatcsv-)
* [biz:ledger,get:account](#-bizledgergetaccount-)
* [biz:ledger,get:book](#-bizledgergetbook-)
* [biz:ledger,list:account](#-bizledgerlistaccount-)
* [biz:ledger,list:book](#-bizledgerlistbook-)
* [biz:ledger,list:balance](#-bizledgerlistbalance-)
* [biz:ledger,list:entry](#-bizledgerlistentry-)
* [biz:ledger,update:account](#-bizledgerupdateaccount-)
* [biz:ledger,update:book](#-bizledgerupdatebook-)
* [biz:ledger,void:entry](#-bizledgervoidentry-)


<!--END:action-list-->

<!--START:action-desc-->


## Action Descriptions

### &laquo; `balance:account,biz:ledger` &raquo;

Calculate the current balance of a ledger account for a given accounting period (book). Sums all debit and credit entries in the book and returns the net balance according to the account's `normal` direction.





#### Replies With


```
{
  ok: '_true_ on success',
  creditTotal: 'sum of credit entry values',
  debitTotal: 'sum of debit entry values',
  balance: "net balance according to the account's normal direction",
  account_id: 'account identifier',
  aref: 'account reference',
  book_id: 'book identifier',
  bref: 'book reference',
  start: 'book start date',
  end: 'book end date',
  creditCount: 'number of credit entries',
  debitCount: 'number of debit entries',
  normal: 'account normal direction (`debit` or `credit`)',
  when: 'calculation timestamp (unix milliseconds)',
  date: 'calculation date (YYYYMMDD)',
  time: 'calculation time (HHMMSS string, UTC)',
  why: 'reason for failure when ok is _false_'
}
```


----------
### &laquo; `balance:book,biz:ledger` &raquo;

Not yet implemented.



----------
### &laquo; `biz:ledger,close:account` &raquo;

Close a ledger account within a book. Creates a closing entry against the opening balance account (default `oref/Equity/Opening Balance`, created if missing) and, when `target_bref` or `target_book_id` is supplied, an opening entry in the target book so the balance carries forward to the next accounting period.





#### Replies With


```
{
  ok: '_true_ on success',
  account_id: 'account identifier',
  aref: 'account reference',
  book_id: 'book identifier',
  bref: 'book reference',
  target_book_id: 'target book identifier, if supplied',
  target_bref: 'target book reference, if supplied',
  original_balance: 'account balance before closing',
  closing_balance: 'account balance in the book after closing',
  opening_balance: 'account balance in the target book, or _null_',
  opening_balance_aref: 'reference of the opening balance account, or _null_',
  closing_entries: 'array of closing entry results',
  opening_entries: 'array of opening entry results',
  closing_date: 'date of the closing entry',
  why: 'reason for failure when ok is _false_',
  error: 'the failed sub-operation result, when applicable'
}
```


----------
### &laquo; `biz:ledger,close:book` &raquo;

Close an accounting period (book) by closing all its accounts in batches of `batch_size` (default 5) and marking the book as closed. When `target_bref` or `target_book_id` is supplied, closing balances are carried forward as opening entries in the target book.





#### Replies With


```
{
  ok: '_true_ on success',
  book_id: 'book identifier',
  bref: 'book reference',
  target_book_id: 'target book identifier, if supplied',
  target_bref: 'target book reference, if supplied',
  closing_date: 'book end date used for closing',
  account_closures: 'array of per-account closure results',
  summary: 'totals: `total_accounts`, `successful_closures`, `failed_closures`, `total_balance_transferred`, `all_accounts_zeroed`',
  op_balance_check: 'opening balance account check in the target book, or _null_',
  closure_successful: '_true_ if all accounts closed with zero balance',
  note: 'explanation when no accounts were closed or closure failed',
  why: 'reason for failure when ok is _false_',
  error: 'the failed opening balance account creation result, when applicable'
}
```


----------
### &laquo; `biz:ledger,create:account` &raquo;

Create a new ledger account within an organisation. An account is identified by its `oref` (or `org_id`), `path` (e.g. `Asset` or `Asset/Current`), and `name`. The `normal` field must be either `"debit"` or `"credit"`.





#### Replies With


```
{
  ok: '_true_ if account was created',
  account: 'the saved account entity',
  why: 'reason for failure when ok is _false_'
}
```


----------
### &laquo; `biz:ledger,create:book` &raquo;

Create a new accounting period (book) for an organisation. A book is identified by its `oref` (or `org_id`), `name`, and `start` date. Omit `end` (or set it to `0`) for an open-ended period.





#### Replies With


```
{
  ok: '_true_ if book was created',
  book: 'the saved book entity',
  why: 'reason for failure when ok is _false_'
}
```


----------
### &laquo; `biz:ledger,create:entry` &raquo;

Create a double-entry journal entry that debits one account and credits another within a given book. Both the debit account (`daref` or `debit`) and credit account (`caref` or `credit`) must exist, and `val`, `desc`, and `date` are required. The entry `date` must fall within the book's period, and the book must not be closed.





#### Replies With


```
{
  ok: '_true_ on success',
  credit: 'the saved credit entry entity',
  debit: 'the saved debit entry entity',
  why: 'reason for failure when ok is _false_'
}
```


----------
### &laquo; `biz:ledger,export:account,format:csv` &raquo;

Export all entries for a single ledger account within a book as a CSV string. Each row represents one journal entry with columns for date, description, debit, credit, and running balance.





#### Replies With


```
{
  ok: '_true_ on success',
  account_id: 'account identifier',
  aref: 'account reference',
  normal: 'account normal direction (`debit` or `credit`)',
  book_id: 'book identifier',
  bref: 'book reference',
  content: 'CSV formatted string of entries',
  entry_count: 'number of entries exported',
  final_balance: 'account balance for the book',
  closing_balance: 'value of the closing entry, or 0 if none',
  why: 'reason for failure when ok is _false_',
  error: 'the failed balance or entry listing result, when applicable'
}
```


----------
### &laquo; `biz:ledger,export:book,format:csv` &raquo;

Export every account with entries in a book (excluding the opening balance account) as CSV, processed in batches of `batch_size` (default 5), plus a summary CSV with columns for account name, normal balance, type, total (or closing) balance, and entry count.





#### Replies With


```
{
  ok: '_true_ if all account exports succeeded',
  book_id: 'book identifier',
  bref: 'book reference',
  book_name: 'book name',
  total_accounts: 'number of accounts exported',
  successful_exports: 'number of successful account exports',
  failed_exports: 'number of failed account exports',
  exports: 'array of per-account export results',
  summary: 'summary CSV result (`ok`, `content`, or `why` and `error` on failure)',
  note: 'explanation when no accounts were found',
  why: 'reason for failure when the book is not found'
}
```


----------
### &laquo; `biz:ledger,get:account` &raquo;

Retrieve a single ledger account by its `aref` (account reference, in the form `oref/path/name`), `account_id`, or `id`.





#### Replies With


```
{
  ok: '_true_ if account was found',
  account: 'the account entity',
  why: 'reason for failure when ok is _false_'
}
```


----------
### &laquo; `biz:ledger,get:book` &raquo;

Retrieve a single accounting period (book) by its `bref` (book reference, in the form `oref/name/start`), `book_id`, or `id`.





#### Replies With


```
{
  ok: '_true_ if book was found',
  book: 'the book entity',
  why: 'reason for failure when ok is _false_'
}
```


----------
### &laquo; `biz:ledger,list:account` &raquo;

List ledger accounts that belong to an organisation (`org_id` or `oref`). If neither is given, all accounts are listed.





#### Replies With


```
{
  ok: '_true_ on success',
  q: 'the query used to list accounts',
  list: 'array of account entities'
}
```


----------
### &laquo; `biz:ledger,list:book` &raquo;

List accounting periods (books) that belong to an organisation (`org_id` or `oref`). If neither is given, all books are listed.





#### Replies With


```
{
  ok: '_true_ on success',
  q: 'the query used to list books',
  list: 'array of book entities'
}
```


----------
### &laquo; `biz:ledger,list:balance` &raquo;

Not yet implemented.



----------
### &laquo; `biz:ledger,list:entry` &raquo;

List journal entries for an organisation (`oref`, required), optionally filtered by book (`bref` or `book_id`), account (`aref`, `account_id`, or `id`), and an extra query `q`. Set `credit: false` or `debit: false` to skip that side.





#### Replies With


```
{
  ok: '_true_ on success',
  creditTotal: 'sum of credit entry values',
  debitTotal: 'sum of debit entry values',
  balance: 'net balance when an account is given, otherwise 0',
  credits: 'array of credit entry entities',
  debits: 'array of debit entry entities',
  cq: 'the query used to list credit entries',
  dq: 'the query used to list debit entries',
  why: 'reason for failure when ok is _false_'
}
```


----------
### &laquo; `biz:ledger,update:account` &raquo;

Update fields on an existing ledger account. Supply the `aref` (or `account_id` / `id`) to identify the account and an `account` object containing the fields to change.





#### Replies With


```
{
  ok: '_true_ if account was updated',
  account: 'the updated account entity',
  why: 'reason for failure when ok is _false_'
}
```


----------
### &laquo; `biz:ledger,update:book` &raquo;

Update fields on an existing accounting period (book). Supply the `bref` (or `book_id` / `id`) to identify the book and a `book` object containing the fields to change.





#### Replies With


```
{
  ok: '_true_ if book was updated',
  book: 'the updated book entity',
  why: 'reason for failure when ok is _false_'
}
```


----------
### &laquo; `biz:ledger,void:entry` &raquo;

Not yet implemented.



----------


<!--END:action-desc-->

## Contributing

The [Senecajs org](https://github.com/senecajs/) encourages open participation. If you feel you can help in any way, be it with documentation, examples, extra testing, or new features please get in touch.

### Running tests

```sh
npm run test
```

## Background

Part of the [Senecajs org](https://github.com/senecajs/).
