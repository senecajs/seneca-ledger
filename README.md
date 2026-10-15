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
  balance: 'net balance amount',
  account: 'the account entity',
  book: 'the book entity'
}
```


----------
### &laquo; `balance:book,biz:ledger` &raquo;

Compute and persist balances for all accounts that have entries in the given book. Each balance record stores the net position so that reporting queries can avoid re-summing raw entries. _Note: implementation in progress._



----------
### &laquo; `biz:ledger,close:account` &raquo;

Close a ledger account within a book. Calculates the closing balance and, when `target_bref` is supplied, creates an opening-balance entry in the target book so the balance carries forward to the next accounting period.





#### Replies With


```
{
  ok: '_true_ on success',
  account: 'the closed account entity',
  close: 'closure details including closing balance'
}
```


----------
### &laquo; `biz:ledger,close:book` &raquo;

Close an accounting period (book) by closing all its accounts and marking the book as closed. When `target_bref` is supplied, non-zero closing balances are carried forward as opening entries in the target book.





#### Replies With


```
{
  ok: '_true_ on success',
  book: 'the closed book entity',
  accounts: 'array of closure details for each account'
}
```


----------
### &laquo; `biz:ledger,create:account` &raquo;

Create a new ledger account within an organisation. An account is identified by its `oref` (organisation reference), `path` (e.g. `Asset` or `Asset/Current`), and `name`. The `normal` field must be either `"debit"` or `"credit"`.





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

Create a new accounting period (book) for an organisation. A book is identified by its `oref`, `name`, and `start` date. Set `end: 0` (or omit `end`) for an open-ended period.





#### Replies With


```
{
  ok: '_true_ if book was created',
  book: 'the saved book entity'
}
```


----------
### &laquo; `biz:ledger,create:entry` &raquo;

Create a double-entry journal entry that debits one account and credits another within a given book. Both the debit account (`daref` or `debit`) and credit account (`caref` or `credit`) must exist. The entry `date` must fall within the book's period, and the book must not be closed.





#### Replies With


```
{
  ok: '_true_ on success',
  debit: 'the saved debit entry entity',
  credit: 'the saved credit entry entity'
}
```


----------
### &laquo; `biz:ledger,export:account,format:csv` &raquo;

Export all entries for a single ledger account within a book as a CSV string. Each row represents one journal entry with columns for date, description, debit, credit, and running balance.





#### Replies With


```
{
  ok: '_true_ on success',
  csv: 'CSV formatted string of entries'
}
```


----------
### &laquo; `biz:ledger,export:book,format:csv` &raquo;

Export a summary of all accounts in a book as a CSV string. Each row contains the account reference, name, normal direction, total debits, total credits, and net balance for the period.





#### Replies With


```
{
  ok: '_true_ on success',
  csv: 'CSV formatted string of account summaries'
}
```


----------
### &laquo; `biz:ledger,get:account` &raquo;

Retrieve a single ledger account by its `aref` (account reference, in the form `oref/path/name`) or by `id`.





#### Replies With


```
{
  ok: '_true_ if account was found',
  account: 'the account entity'
}
```


----------
### &laquo; `biz:ledger,get:book` &raquo;

Retrieve a single accounting period (book) by its `bref` (book reference, in the form `oref/name/start`) or by `id`.





#### Replies With


```
{
  ok: '_true_ if book was found',
  book: 'the book entity'
}
```


----------
### &laquo; `biz:ledger,list:account` &raquo;

List all ledger accounts that belong to an organisation (`org_id` or `oref`). Optional filters include `path` to narrow results to a specific account category.





#### Replies With


```
{
  ok: '_true_ on success',
  accounts: 'array of account entities'
}
```


----------
### &laquo; `biz:ledger,list:book` &raquo;

List all accounting periods (books) that belong to an organisation (`oref`).





#### Replies With


```
{
  ok: '_true_ on success',
  books: 'array of book entities'
}
```


----------
### &laquo; `biz:ledger,list:balance` &raquo;

List pre-computed balance records for a book. Balances are written by `balance:book` and reflect the state at the time that action was last run. _Note: implementation in progress._



----------
### &laquo; `biz:ledger,list:entry` &raquo;

List journal entries filtered by organisation (`oref`), book (`bref`), account (`aref`), or date range (`from` / `to`). Either debit or credit entries matching the filters are returned.





#### Replies With


```
{
  ok: '_true_ on success',
  entries: 'array of journal entry entities'
}
```


----------
### &laquo; `biz:ledger,update:account` &raquo;

Update custom fields on an existing ledger account. Supply the `aref` (or `id`) to identify the account and an `account` object containing only the fields to change.





#### Replies With


```
{
  ok: '_true_ if account was updated',
  account: 'the updated account entity'
}
```


----------
### &laquo; `biz:ledger,update:book` &raquo;

Update fields on an existing accounting period (book). Supply the `bref` (or `id`) to identify the book and a `book` object containing the fields to change (e.g. `end` date or custom metadata).





#### Replies With


```
{
  ok: '_true_ if book was updated',
  book: 'the updated book entity'
}
```


----------
### &laquo; `biz:ledger,void:entry` &raquo;

Void an existing journal entry by generating counter-entries that reverse the original debit and credit amounts. The original entries are preserved with a `kind: "void"` marker. _Note: implementation in progress._



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
