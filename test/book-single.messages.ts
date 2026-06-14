/* Copyright © 2026 Seneca Project Contributors, MIT License. */

// Single-book edge cases: get / list / update:book, the close:book flow
// (including already-closed, bad-target, opening-balance and empty-book
// paths), export:book edge cases, and create:book input validation.
// Seeds a Cash + Sales account and the Q1 book; the Q2 / empty / time books
// are created inline because the assertions depend on their ordering.

import { account, book } from './seed'

export default {
  print: false,
  pattern: 'biz:ledger',
  allow: { missing: true },

  calls: [
    // --- seed ---
    account.cash,
    account.sales,
    book.q1,

    // --- get / list / update:book ---

    // get a nonexistent book
    {
      name: 'test-get-nonexistent-book',
      pattern: 'get:book',
      params: {
        bref: 'o0/NonExistent/20230101',
      },
      out: {
        ok: false,
        why: 'book-not-found',
      },
    },

    // get book by id
    {
      name: 'test-get-book-by-id',
      pattern: 'get:book',
      params: {
        id: 'shop-b0',
      },
      out: {
        ok: true,
        book: {
          id: 'shop-b0',
          bref: 'o0/Q1/20220101',
        },
      },
    },

    // list books with org filter
    {
      name: 'test-list-books-org',
      pattern: 'list:book',
      params: {
        oref: 'o0',
      },
      out: {
        ok: true,
        q: { org_id: 'o0' },
        list: [
          {
            org_id: 'o0',
            oref: 'o0',
            bref: 'o0/Q1/20220101',
            name: 'Q1',
            start: 20220101,
            end: 20220331,
            time: { kind: 'basic' },
            id: 'shop-b0',
          },
        ],
      },
    },

    // update a nonexistent book
    {
      name: 'test-update-nonexistent-book',
      pattern: 'update:book',
      params: {
        bref: 'o0/NonExistent/20230101',
        book: {
          end: 20230331,
        },
      },
      out: {
        ok: false,
        why: 'book-not-found',
      },
    },

    // update with no update data
    {
      name: 'test-update-book-no-data',
      pattern: 'update:book',
      params: {
        id: 'shop-b0',
      },
      out: {
        ok: false,
        why: 'no-book-update',
      },
    },

    // --- close:book flow ---

    // close a nonexistent book
    {
      name: 'test-close-nonexistent-book',
      pattern: 'close:book',
      params: {
        bref: 'o0/NonExistent/20230101',
        end: 20230331,
      },
      out: {
        ok: false,
        why: 'book-not-found',
      },
    },

    // post an entry so Q1 has balances to transfer on close
    {
      name: 'shop-e0',
      pattern: 'create:entry',
      params: {
        id: 'shop-e0',
        oref: 'o0',
        bref: 'o0/Q1/20220101',
        daref: 'o0/Asset/Cash',
        caref: 'o0/Income/Sales',
        val: 100,
        desc: 'Jan Sales',
        date: 20220131,
        custom: {
          geo: 'EU',
        },
        entry: {
          xrep: 'alice',
        },
      },
      out: {
        ok: true,
        credit: {
          val: 100,
          id: 'shop-e0',
        },
        debit: {
          val: 100,
          id: 'shop-e0',
        },
      },
    },

    // open Q2 as the close target
    {
      name: 'shop-b1',
      pattern: 'create:book',
      params: {
        book: {
          id$: 'shop-b1',
          oref: 'o0',
          name: 'Q2',
          start: 20220401,
          end: 20220630,
        },
      },
      out: {
        ok: true,
        book: {
          id: 'shop-b1',
          org_id: 'o0',
          oref: 'o0',
          bref: 'o0/Q2/20220401',
          name: 'Q2',
          start: 20220401,
          end: 20220630,
          time: { kind: 'basic' },
        },
      },
    },

    // close Q1 into Q2
    {
      name: 'shop-cb0',
      pattern: 'close:book',
      params: {
        bref: 'o0/Q1/20220101',
        target_bref: 'o0/Q2/20220401',
        end: 20220331,
      },
      out: {
        ok: true,
        book_id: 'shop-b0',
        bref: 'o0/Q1/20220101',
        target_book_id: 'shop-b1',
        target_bref: 'o0/Q2/20220401',
        summary: {
          total_accounts: 2,
          successful_closures: 2,
          failed_closures: 0,
          total_balance_transferred: 200,
          all_accounts_zeroed: true,
        },
        closure_successful: true,
      },
    },

    // the Opening Balance equity account cannot be closed
    {
      name: 'test-close-opening-balance-account',
      pattern: 'close:account',
      params: {
        aref: 'o0/Equity/Opening Balance',
        bref: 'o0/Q1/20220101',
        end: 20220331,
      },
      out: {
        ok: false,
        why: 'cannot-close-opening-balance-account',
      },
    },

    // closing an already-closed book
    {
      name: 'test-close-already-closed-book',
      pattern: 'close:book',
      params: {
        bref: 'o0/Q1/20220101',
        end: 20220331,
      },
      out: {
        ok: false,
        why: 'book-already-closed',
      },
    },

    // closing into a nonexistent target
    {
      name: 'test-close-book-bad-target',
      pattern: 'close:book',
      params: {
        bref: 'o0/Q2/20220401',
        target_bref: 'o0/NonExistent/20230101',
        end: 20220930,
      },
      out: {
        ok: false,
        why: 'target-book-not-found',
      },
    },

    // --- empty book ---

    {
      name: 'test-empty-book',
      pattern: 'create:book',
      params: {
        book: {
          id$: 'empty-book',
          oref: 'o0',
          name: 'Empty',
          start: 20231001,
          end: 20231231,
        },
      },
      out: {
        ok: true,
        book: {
          id: 'empty-book',
          bref: 'o0/Empty/20231001',
        },
      },
    },

    // closing an empty book
    {
      name: 'test-close-empty-book',
      pattern: 'close:book',
      params: {
        bref: 'o0/Empty/20231001',
        end: 20231231,
      },
      out: {
        ok: true,
        book_id: 'empty-book',
        bref: 'o0/Empty/20231001',
        note: 'No account entries in this book',
        summary: {
          total_accounts: 0,
          successful_closures: 0,
          failed_closures: 0,
          total_balance_transferred: 0,
          all_accounts_zeroed: true,
        },
        closure_successful: true,
      },
    },

    // --- export:book ---

    // export a nonexistent book
    {
      name: 'test-export-nonexistent-book',
      pattern: 'export:book,format:csv',
      params: {
        bref: 'o0/NonExistent/20230101',
      },
      out: {
        ok: false,
        why: 'book-not-found',
      },
    },

    // export an empty book
    {
      name: 'test-export-empty-book',
      pattern: 'export:book,format:csv',
      params: {
        bref: 'o0/Empty/20231001',
      },
      out: {
        ok: true,
        book_id: 'empty-book',
        bref: 'o0/Empty/20231001',
        note: 'No accounts found in this book',
        total_accounts: 0,
        successful_exports: 0,
        failed_exports: 0,
        exports: [],
      },
    },

    // --- create:book input validation ---

    // missing book object
    {
      name: 'test-missing-book',
      pattern: 'create:book',
      params: {},
      out: {
        ok: false,
        why: 'no-book',
      },
    },

    // no start date
    {
      name: 'test-no-start-book',
      pattern: 'create:book',
      params: {
        book: {
          oref: 'o0',
          name: 'Test Period',
        },
      },
      out: {
        ok: false,
        why: 'no-start',
      },
    },

    // no org
    {
      name: 'test-no-org-book',
      pattern: 'create:book',
      params: {
        book: {
          name: 'Test Period',
          start: 20230101,
        },
      },
      out: {
        ok: false,
        why: 'no-org',
      },
    },

    // no name
    {
      name: 'test-no-name-book',
      pattern: 'create:book',
      params: {
        book: {
          oref: 'o0',
          start: 20230101,
        },
      },
      out: {
        ok: false,
        why: 'no-name',
      },
    },

    // custom time spec (UTC + timezone)
    {
      name: 'test-custom-time-book',
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
        book: {
          id: 'test-time-book',
          org_id: 'o0',
          oref: 'o0',
          bref: 'o0/Jan 2023/20230101',
          name: 'Jan 2023',
          start: 20230101,
          end: 20230131,
          time: { kind: 'utc', timezone: 'America/New_York' },
        },
      },
    },
  ],
}
