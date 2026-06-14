/* Copyright © 2026 Seneca Project Contributors, MIT License. */

// create:entry / list:entry behaviour: required-field validation, base
// currency, custom kind, object form, value extremes, and per-book listing.
// Seeds a Cash + Sales account and two books (a UTC-timed book used by the
// not-found checks, and a EUR book that holds the posted entries).

import { account } from './seed'

export default {
  print: false,
  pattern: 'biz:ledger',
  allow: { missing: true },

  calls: [
    // --- seed ---
    account.cash,
    account.sales,
    {
      name: 'seed-book-jan-2023',
      pattern: 'create:book',
      params: {
        book: {
          id$: 'test-time-book',
          oref: 'o0',
          name: 'Jan 2023',
          start: 20230101,
          end: 20230131,
          time: { kind: 'utc', timezone: 'America/New_York' },
        },
      },
      out: {
        ok: true,
        book: { id: 'test-time-book', bref: 'o0/Jan 2023/20230101' },
      },
    },
    {
      name: 'seed-book-eur',
      pattern: 'create:book',
      params: {
        book: {
          id$: 'mb-b-eur',
          oref: 'o0',
          name: 'Q1-EUR',
          start: 20260101,
          end: 20260331,
        },
      },
      out: { ok: true, book: { id: 'mb-b-eur', bref: 'o0/Q1-EUR/20260101' } },
    },

    // --- create:entry validation ---

    // entry into a nonexistent book
    {
      name: 'test-entry-nonexistent-book',
      pattern: 'create:entry',
      params: {
        id: 'test-bad-book',
        oref: 'o0',
        bref: 'o0/NonExistent/20230101',
        daref: 'o0/Asset/Cash',
        caref: 'o0/Income/Sales',
        val: 100,
        desc: 'Test',
        date: 20230115,
      },
      out: {
        ok: false,
        why: 'book-not-found',
      },
    },

    // entry with a nonexistent debit account
    {
      name: 'test-entry-nonexistent-debit',
      pattern: 'create:entry',
      params: {
        id: 'test-bad-debit',
        oref: 'o0',
        bref: 'o0/Jan 2023/20230101',
        daref: 'o0/Asset/NonExistent',
        caref: 'o0/Income/Sales',
        val: 100,
        desc: 'Test',
        date: 20230115,
      },
      out: {
        ok: false,
        why: 'debit-account-not-found',
      },
    },

    // entry with a nonexistent credit account
    {
      name: 'test-entry-nonexistent-credit',
      pattern: 'create:entry',
      params: {
        id: 'test-bad-credit',
        oref: 'o0',
        bref: 'o0/Jan 2023/20230101',
        daref: 'o0/Asset/Cash',
        caref: 'o0/Income/NonExistent',
        val: 100,
        desc: 'Test',
        date: 20230115,
      },
      out: {
        ok: false,
        why: 'credit-account-not-found',
      },
    },

    // entry with no value
    {
      name: 'test-entry-no-val',
      pattern: 'create:entry',
      params: {
        id: 'test-no-val',
        oref: 'o0',
        bref: 'o0/Jan 2023/20230101',
        daref: 'o0/Asset/Cash',
        caref: 'o0/Income/Sales',
        desc: 'Test',
        date: 20230115,
      },
      out: {
        ok: false,
        why: 'no-val',
      },
    },

    // entry with no description
    {
      name: 'test-entry-no-desc',
      pattern: 'create:entry',
      params: {
        id: 'test-no-desc',
        oref: 'o0',
        bref: 'o0/Jan 2023/20230101',
        daref: 'o0/Asset/Cash',
        caref: 'o0/Income/Sales',
        val: 100,
        date: 20230115,
      },
      out: {
        ok: false,
        why: 'no-desc',
      },
    },

    // entry with empty description
    {
      name: 'test-entry-empty-desc',
      pattern: 'create:entry',
      params: {
        id: 'test-empty-desc',
        oref: 'o0',
        bref: 'o0/Jan 2023/20230101',
        daref: 'o0/Asset/Cash',
        caref: 'o0/Income/Sales',
        val: 100,
        desc: '',
        date: 20230115,
      },
      out: {
        ok: false,
        why: 'no-desc',
      },
    },

    // entry with no date
    {
      name: 'test-entry-no-date',
      pattern: 'create:entry',
      params: {
        id: 'test-no-date',
        oref: 'o0',
        bref: 'o0/Jan 2023/20230101',
        daref: 'o0/Asset/Cash',
        caref: 'o0/Income/Sales',
        val: 100,
        desc: 'Test',
      },
      out: {
        ok: false,
        why: 'no-date',
      },
    },

    // --- create:entry success variants ---

    // entry carrying base currency info
    {
      name: 'test-entry-base-currency',
      pattern: 'create:entry',
      params: {
        id: 'test-base-cur',
        oref: 'o0',
        bref: 'o0/Q1-EUR/20260101',
        daref: 'o0/Asset/Cash',
        caref: 'o0/Income/Sales',
        val: 100,
        desc: 'Sale in EUR',
        date: 20260215,
        baseval: 85,
        basecur: 'EUR',
        baserate: 1.18,
      },
      out: {
        ok: true,
        credit: {
          val: 100,
          desc: 'Sale in EUR',
          baseval: 85,
          basecur: 'EUR',
          baserate: 1.18,
          date: 20260215,
        },
        debit: {
          val: 100,
          desc: 'Sale in EUR',
          baseval: 85,
          basecur: 'EUR',
          baserate: 1.18,
          date: 20260215,
        },
      },
    },

    // entry with a custom kind
    {
      name: 'test-entry-custom-kind',
      pattern: 'create:entry',
      params: {
        id: 'test-custom-kind',
        oref: 'o0',
        bref: 'o0/Q1-EUR/20260101',
        daref: 'o0/Asset/Cash',
        caref: 'o0/Income/Sales',
        val: 50,
        desc: 'Adjustment',
        date: 20260220,
        kind: 'adjustment',
      },
      out: {
        ok: true,
        credit: {
          val: 50,
          desc: 'Adjustment',
          kind: 'adjustment',
          date: 20260220,
        },
        debit: {
          val: 50,
          desc: 'Adjustment',
          kind: 'adjustment',
          date: 20260220,
        },
      },
    },

    // --- list:entry ---

    // list entries with no oref (should fail)
    {
      name: 'test-list-entry-no-oref',
      pattern: 'list:entry',
      params: {
        bref: 'o0/Q1/20220101',
      },
      out: {
        ok: false,
        why: 'org-required',
      },
    },

    // list entries with a nonexistent book (must not silently list cross-book)
    {
      name: 'test-list-entry-nonexistent-book',
      pattern: 'list:entry',
      params: {
        oref: 'o0',
        bref: 'o0/NonExistent/20230101',
      },
      out: {
        ok: false,
        why: 'book-not-found',
      },
    },

    // list entries, credit side only
    {
      name: 'test-list-entry-credit-only',
      pattern: 'list:entry',
      params: {
        oref: 'o0',
        bref: 'o0/Q1-EUR/20260101',
        aref: 'o0/Income/Sales',
        credit: true,
        debit: false,
      },
      out: {
        ok: true,
        credits: [
          {
            val: 100,
            desc: '`test-entry-base-currency:out.credit.desc`',
            caref: 'o0/Income/Sales',
          },
          {
            val: 50,
            desc: '`test-entry-custom-kind:out.credit.desc`',
            caref: 'o0/Income/Sales',
          },
        ],
        debits: [],
      },
    },

    // list entries, debit side only
    {
      name: 'test-list-entry-debit-only',
      pattern: 'list:entry',
      params: {
        oref: 'o0',
        bref: 'o0/Q1-EUR/20260101',
        aref: 'o0/Asset/Cash',
        credit: false,
        debit: true,
      },
      out: {
        ok: true,
        credits: [],
        debits: [
          {
            val: 100,
            desc: '`test-entry-base-currency:out.debit.desc`',
            daref: 'o0/Asset/Cash',
          },
          {
            val: 50,
            desc: '`test-entry-custom-kind:out.debit.desc`',
            daref: 'o0/Asset/Cash',
          },
        ],
      },
    },

    // entry using the debit/credit object format
    {
      name: 'test-entry-object-format',
      pattern: 'create:entry',
      params: {
        id: 'test-obj-format',
        oref: 'o0',
        bref: 'o0/Q1-EUR/20260101',
        debit: {
          aref: 'o0/Asset/Cash',
        },
        credit: {
          aref: 'o0/Income/Sales',
        },
        val: 500,
        desc: 'Consulting services',
        date: 20260108,
      },
      out: {
        ok: true,
        credit: {
          val: 500,
          desc: 'Consulting services',
          caref: 'o0/Income/Sales',
        },
        debit: {
          val: 500,
          desc: 'Consulting services',
          daref: 'o0/Asset/Cash',
        },
      },
    },

    // large value entry
    {
      name: 'test-large-value-entry',
      pattern: 'create:entry',
      params: {
        id: 'test-large-val',
        oref: 'o0',
        bref: 'o0/Q1-EUR/20260101',
        daref: 'o0/Asset/Cash',
        caref: 'o0/Income/Sales',
        val: 999999999.99,
        desc: 'Large transaction',
        date: 20260115,
      },
      out: {
        ok: true,
        credit: {
          val: 999999999.99,
        },
        debit: {
          val: 999999999.99,
        },
      },
    },

    // small value entry
    {
      name: 'test-small-value-entry',
      pattern: 'create:entry',
      params: {
        id: 'test-small-val',
        oref: 'o0',
        bref: 'o0/Q1-EUR/20260101',
        daref: 'o0/Asset/Cash',
        caref: 'o0/Income/Sales',
        val: 0.01,
        desc: 'Penny transaction',
        date: 20260120,
      },
      out: {
        ok: true,
        credit: {
          val: 0.01,
        },
        debit: {
          val: 0.01,
        },
      },
    },

    // --- open-ended (ongoing) book ---

    // a book with no end date carries the end <= 0 sentinel
    {
      name: 'seed-book-ongoing',
      pattern: 'create:book',
      params: {
        book: {
          id$: 'book-ongoing',
          oref: 'o0',
          name: 'Ongoing',
          start: 20260101,
        },
      },
      out: {
        ok: true,
        book: { id: 'book-ongoing', bref: 'o0/Ongoing/20260101', end: -1 },
      },
    },

    // entries must post to an open-ended book: only the start bound applies
    {
      name: 'test-entry-open-ended-book',
      pattern: 'create:entry',
      params: {
        id: 'test-ongoing-entry',
        oref: 'o0',
        bref: 'o0/Ongoing/20260101',
        daref: 'o0/Asset/Cash',
        caref: 'o0/Income/Sales',
        val: 100,
        desc: 'Sale in ongoing book',
        date: 20260615,
      },
      out: {
        ok: true,
        credit: { val: 100, book_id: 'book-ongoing' },
        debit: { val: 100, book_id: 'book-ongoing' },
      },
    },

    // the start bound still applies on an open-ended book
    {
      name: 'test-entry-open-ended-book-before-start',
      pattern: 'create:entry',
      params: {
        id: 'test-ongoing-bad',
        oref: 'o0',
        bref: 'o0/Ongoing/20260101',
        daref: 'o0/Asset/Cash',
        caref: 'o0/Income/Sales',
        val: 100,
        desc: 'Before start',
        date: 20251231,
      },
      out: {
        ok: false,
        why: 'invalid-entry-period',
      },
    },
  ],
}
