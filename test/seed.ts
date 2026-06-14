/* Copyright © 2026 Seneca Project Contributors, MIT License. */

// Shared fixtures for the ledger message suites.
//
// Seed calls only establish prerequisite state, with minimal `ok:true`
// assertions. The detailed behaviour assertions for each operation live in the
// individual suites that consume these fixtures. All seed entities use the org
// `o0`; suites that need isolation (e.g. multi-book) create their own org.

export const account = {
  cash: {
    name: 'seed-account-cash',
    pattern: 'create:account',
    params: {
      account: {
        id$: 'shop-a0',
        oref: 'o0',
        path: 'Asset',
        name: 'Cash',
        normal: 'debit',
      },
    },
    out: { ok: true, account: { id: 'shop-a0', aref: 'o0/Asset/Cash' } },
  },

  sales: {
    name: 'seed-account-sales',
    pattern: 'create:account',
    params: {
      account: {
        id$: 'shop-a1',
        oref: 'o0',
        path: 'Income',
        name: 'Sales',
        normal: 'credit',
      },
    },
    out: { ok: true, account: { id: 'shop-a1', aref: 'o0/Income/Sales' } },
  },

  office: {
    name: 'seed-account-office',
    pattern: 'create:account',
    params: {
      account: {
        id$: 'shop-a2',
        oref: 'o0',
        path: 'Asset',
        name: 'Office',
        normal: 'debit',
      },
    },
    out: { ok: true, account: { id: 'shop-a2', aref: 'o0/Asset/Office' } },
  },

  creditCard: {
    name: 'seed-account-credit-card',
    pattern: 'create:account',
    params: {
      account: {
        id$: 'shop-a3',
        oref: 'o0',
        path: 'Liability',
        name: 'Credit Card',
        normal: 'credit',
      },
    },
    out: {
      ok: true,
      account: { id: 'shop-a3', aref: 'o0/Liability/Credit Card' },
    },
  },
}

export const book = {
  q1: {
    name: 'seed-book-q1',
    pattern: 'create:book',
    params: {
      book: {
        id$: 'shop-b0',
        oref: 'o0',
        name: 'Q1',
        start: 20220101,
        end: 20220331,
      },
    },
    out: { ok: true, book: { id: 'shop-b0', bref: 'o0/Q1/20220101' } },
  },

  q2: {
    name: 'seed-book-q2',
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
    out: { ok: true, book: { id: 'shop-b1', bref: 'o0/Q2/20220401' } },
  },
}

// Full org-o0 chart of accounts, in id order.
export const chartOfAccounts = [
  account.cash,
  account.sales,
  account.office,
  account.creditCard,
]
