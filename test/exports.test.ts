/* Copyright © 2026 Seneca Project Contributors, MIT License. */

import { test } from 'node:test'
import { expect } from '@hapi/code'

import Ledger from '..'
import type { LedgerPlugin, BalanceTotals } from '..'

test('exports', () => {
  // dist/types.js used to throw "ledger is not defined" when required.
  expect(() => require('../dist/types.js')).not.throw()

  // The default export is typed as the full plugin, defaults and intern
  // included, and the public types are importable from the package root.
  const plugin: LedgerPlugin = Ledger
  expect(plugin.defaults.entity.base).equal('ledger')
  const totals: BalanceTotals = plugin.intern.calcTotals(null, [], [])
  expect(totals).equal({ creditTotal: 0, debitTotal: 0, balance: 0 })
})
