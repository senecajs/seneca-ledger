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

### Action Patterns

- [balance:account,biz:ledger](#-balanceaccountbizledger-)
- [balance:book,biz:ledger](#-balancebookbizledger-)
- [biz:ledger,close:account](#-bizledgercloseaccount-)
- [biz:ledger,close:book](#-bizledgerclosebook-)
- [biz:ledger,create:account](#-bizledgercreateaccount-)
- [biz:ledger,create:book](#-bizledgercreatebook-)
- [biz:ledger,create:entry](#-bizledgercreateentry-)
- [biz:ledger,export:account,format:csv](#-bizledgerexportaccountformatcsv-)
- [biz:ledger,export:book,format:csv](#-bizledgerexportbookformatcsv-)
- [biz:ledger,get:account](#-bizledgergetaccount-)
- [biz:ledger,get:book](#-bizledgergetbook-)
- [biz:ledger,list:account](#-bizledgerlistaccount-)
- [biz:ledger,list:book](#-bizledgerlistbook-)
- [biz:ledger,list:balance](#-bizledgerlistbalance-)
- [biz:ledger,list:entry](#-bizledgerlistentry-)
- [biz:ledger,update:account](#-bizledgerupdateaccount-)
- [biz:ledger,update:book](#-bizledgerupdatebook-)
- [biz:ledger,void:entry](#-bizledgervoidentry-)

<!--END:action-list-->

<!--START:action-desc-->

### Action Descriptions

### &laquo; `balance:account,biz:ledger` &raquo;

No description provided.

---

### &laquo; `balance:book,biz:ledger` &raquo;

No description provided.

---

### &laquo; `biz:ledger,close:account` &raquo;

No description provided.

---

### &laquo; `biz:ledger,close:book` &raquo;

No description provided.

---

### &laquo; `biz:ledger,create:account` &raquo;

No description provided.

---

### &laquo; `biz:ledger,create:book` &raquo;

No description provided.

---

### &laquo; `biz:ledger,create:entry` &raquo;

No description provided.

---

### &laquo; `biz:ledger,export:account,format:csv` &raquo;

No description provided.

---

### &laquo; `biz:ledger,export:book,format:csv` &raquo;

No description provided.

---

### &laquo; `biz:ledger,get:account` &raquo;

No description provided.

---

### &laquo; `biz:ledger,get:book` &raquo;

No description provided.

---

### &laquo; `biz:ledger,list:account` &raquo;

No description provided.

---

### &laquo; `biz:ledger,list:book` &raquo;

No description provided.

---

### &laquo; `biz:ledger,list:balance` &raquo;

No description provided.

---

### &laquo; `biz:ledger,list:entry` &raquo;

No description provided.

---

### &laquo; `biz:ledger,update:account` &raquo;

No description provided.

---

### &laquo; `biz:ledger,update:book` &raquo;

No description provided.

---

### &laquo; `biz:ledger,void:entry` &raquo;

No description provided.

---

<!--END:action-desc-->

## Contributing

The [Senecajs org](https://github.com/senecajs/) encourages open participation. If you feel you can help in any way, be it with documentation, examples, extra testing, or new features please get in touch.

### Running tests

```sh
npm run test
```

## Background

Part of the [Senecajs org](https://github.com/senecajs/).
