/* Copyright © 2026 Seneca Project Contributors, MIT License. */

// Direct unit tests for the internal time / totals helpers. These run on every
// balance and close, but their output fields (when/date/time) are derived from
// Date.now() and so are never asserted by the message suites. Exercising them
// here guards the date math, the leading-zero clock formatting, and the
// debit/credit balance sign rules against regression.

import { describe, test } from 'node:test'
import { expect } from '@hapi/code'

import Ledger from '..'

const intern = (Ledger as any).intern
const { formatDateToYYYYMMDD, timestamp2timestr, calcTotals } = intern

// A fixed instant: 2025-05-28 19:10:22 UTC.
const T = Date.UTC(2025, 4, 28, 19, 10, 22)

describe('time-helpers', () => {
  test('formatDateToYYYYMMDD-basic', async () => {
    expect(formatDateToYYYYMMDD(T)).equal(20250528)
  })

  test('formatDateToYYYYMMDD-zero-pads-month-and-day', async () => {
    // 2025-01-09 -> 20250109, not 202519.
    expect(formatDateToYYYYMMDD(Date.UTC(2025, 0, 9, 12, 0, 0))).equal(20250109)
  })

  test('formatDateToYYYYMMDD-rejects-epoch', async () => {
    // year <= 1970 is treated as an invalid / unset timestamp.
    expect(() => formatDateToYYYYMMDD(0)).to.throw('invalid-time')
  })

  test('timestamp2timestr-basic', async () => {
    expect(timestamp2timestr(T)).equal('191022')
  })

  test('timestamp2timestr-keeps-leading-zero', async () => {
    // 09:05:03 must stay '090503' — as a number it would collapse to 90503.
    expect(timestamp2timestr(Date.UTC(2024, 0, 2, 9, 5, 3))).equal('090503')
  })

  test('timestamp2timestr-midnight', async () => {
    expect(timestamp2timestr(Date.UTC(2024, 0, 2, 0, 0, 0))).equal('000000')
  })

  test('calcTotals-debit-normal', async () => {
    const out = calcTotals(
      { normal: 'debit' } as any,
      [{ val: 20 }] as any,
      [{ val: 100 }] as any,
    )
    expect(out).equal({ creditTotal: 20, debitTotal: 100, balance: 80 })
  })

  test('calcTotals-credit-normal', async () => {
    const out = calcTotals(
      { normal: 'credit' } as any,
      [{ val: 100 }] as any,
      [{ val: 20 }] as any,
    )
    expect(out).equal({ creditTotal: 100, debitTotal: 20, balance: 80 })
  })

  test('calcTotals-null-account-yields-zero-balance', async () => {
    const out = calcTotals(null, [{ val: 5 }] as any, [{ val: 3 }] as any)
    expect(out).equal({ creditTotal: 5, debitTotal: 3, balance: 0 })
  })
})
