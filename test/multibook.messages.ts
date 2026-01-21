// Multi-book operations and special entry scenario tests for ledger

export default {
  print: false,
  pattern: 'biz:ledger',
  allow: { missing: true },

  calls: [
    // ===========================================
    // MULTI-BOOK SETUP
    // Same org, same period, different books (e.g., currency)
    // ===========================================

    {
      name: 'mb-account-cash',
      pattern: 'create:account',
      params: {
        account: {
          id$: 'mb-a0',
          oref: 'o1',
          path: 'Asset',
          name: 'Cash',
          normal: 'debit',
        },
      },
      out: { ok: true, account: { id: 'mb-a0', aref: 'o1/Asset/Cash' } },
    },

    {
      name: 'mb-account-sales',
      pattern: 'create:account',
      params: {
        account: {
          id$: 'mb-a1',
          oref: 'o1',
          path: 'Income',
          name: 'Sales',
          normal: 'credit',
        },
      },
      out: { ok: true, account: { id: 'mb-a1', aref: 'o1/Income/Sales' } },
    },

    // Three books - same period, different purposes (like different currencies)
    {
      name: 'mb-book-eur',
      pattern: 'create:book',
      params: {
        book: {
          id$: 'mb-b-eur',
          oref: 'o1',
          name: 'Q1-EUR',
          start: 20260101,
          end: 20260331,
        },
      },
      out: { ok: true, book: { id: 'mb-b-eur', bref: 'o1/Q1-EUR/20260101' } },
    },

    {
      name: 'mb-book-gbp',
      pattern: 'create:book',
      params: {
        book: {
          id$: 'mb-b-gbp',
          oref: 'o1',
          name: 'Q1-GBP',
          start: 20260101,
          end: 20260331,
        },
      },
      out: { ok: true, book: { id: 'mb-b-gbp', bref: 'o1/Q1-GBP/20260101' } },
    },

    {
      name: 'mb-book-usd',
      pattern: 'create:book',
      params: {
        book: {
          id$: 'mb-b-usd',
          oref: 'o1',
          name: 'Q1-USD',
          start: 20260101,
          end: 20260331,
        },
      },
      out: { ok: true, book: { id: 'mb-b-usd', bref: 'o1/Q1-USD/20260101' } },
    },

    // ===========================================
    // TEST: Entries go to the correct specified book
    // ===========================================

    {
      name: 'mb-entry-to-eur',
      pattern: 'create:entry',
      params: {
        id: 'mb-e-eur',
        bref: 'o1/Q1-EUR/20260101',
        daref: 'o1/Asset/Cash',
        caref: 'o1/Income/Sales',
        val: 1000,
        desc: 'EUR Sale',
        date: 20260115,
      },
      out: {
        ok: true,
        credit: {
          id: 'mb-e-eur',
          book_id: 'mb-b-eur',
          bref: 'o1/Q1-EUR/20260101',
        },
        debit: {
          id: 'mb-e-eur',
          book_id: 'mb-b-eur',
          bref: 'o1/Q1-EUR/20260101',
        },
      },
    },

    {
      name: 'mb-entry-to-gbp',
      pattern: 'create:entry',
      params: {
        id: 'mb-e-gbp',
        book_id: 'mb-b-gbp', // Using book_id instead of bref
        daref: 'o1/Asset/Cash',
        caref: 'o1/Income/Sales',
        val: 800,
        desc: 'GBP Sale',
        date: 20260115,
      },
      out: {
        ok: true,
        credit: {
          id: 'mb-e-gbp',
          book_id: 'mb-b-gbp',
          bref: 'o1/Q1-GBP/20260101',
        },
        debit: {
          id: 'mb-e-gbp',
          book_id: 'mb-b-gbp',
          bref: 'o1/Q1-GBP/20260101',
        },
      },
    },

    {
      name: 'mb-entry-to-usd',
      pattern: 'create:entry',
      params: {
        id: 'mb-e-usd',
        bref: 'o1/Q1-USD/20260101',
        daref: 'o1/Asset/Cash',
        caref: 'o1/Income/Sales',
        val: 1200,
        desc: 'USD Sale',
        date: 20260115,
      },
      out: {
        ok: true,
        credit: {
          id: 'mb-e-usd',
          book_id: 'mb-b-usd',
          bref: 'o1/Q1-USD/20260101',
        },
        debit: {
          id: 'mb-e-usd',
          book_id: 'mb-b-usd',
          bref: 'o1/Q1-USD/20260101',
        },
      },
    },

    // ===========================================
    // TEST: Balance shows correct data per book (isolation)
    // ===========================================

    {
      name: 'mb-balance-eur-only',
      pattern: 'balance:account',
      params: { aref: 'o1/Asset/Cash', bref: 'o1/Q1-EUR/20260101' },
      out: { ok: true, book_id: 'mb-b-eur', debitTotal: 1000, balance: 1000 },
    },

    {
      name: 'mb-balance-gbp-only',
      pattern: 'balance:account',
      params: { aref: 'o1/Asset/Cash', book_id: 'mb-b-gbp' },
      out: { ok: true, book_id: 'mb-b-gbp', debitTotal: 800, balance: 800 },
    },

    {
      name: 'mb-balance-usd-only',
      pattern: 'balance:account',
      params: { aref: 'o1/Asset/Cash', bref: 'o1/Q1-USD/20260101' },
      out: { ok: true, book_id: 'mb-b-usd', debitTotal: 1200, balance: 1200 },
    },

    // ===========================================
    // TEST: List entries shows correct data per book (isolation)
    // ===========================================

    {
      name: 'mb-list-entry-eur-only',
      pattern: 'list:entry',
      params: { oref: 'o1', bref: 'o1/Q1-EUR/20260101' },
      out: {
        ok: true,
        debitTotal: 1000,
        debits: [{ id: 'mb-e-eur', val: 1000, book_id: 'mb-b-eur' }],
      },
    },

    {
      name: 'mb-list-entry-gbp-only',
      pattern: 'list:entry',
      params: { oref: 'o1', book_id: 'mb-b-gbp' },
      out: {
        ok: true,
        debitTotal: 800,
        debits: [{ id: 'mb-e-gbp', val: 800, book_id: 'mb-b-gbp' }],
      },
    },

    // ===========================================
    // TEST: Close specific book, others remain open
    // ===========================================

    {
      name: 'mb-close-eur-book',
      pattern: 'close:book',
      params: { bref: 'o1/Q1-EUR/20260101', end: 20260331 },
      out: { ok: true, book_id: 'mb-b-eur', closure_successful: true },
    },

    // EUR book closed - cannot add entries
    {
      name: 'mb-entry-closed-eur-fail',
      pattern: 'create:entry',
      params: {
        id: 'mb-e-fail',
        bref: 'o1/Q1-EUR/20260101',
        daref: 'o1/Asset/Cash',
        caref: 'o1/Income/Sales',
        val: 100,
        desc: 'Should fail',
        date: 20260125,
      },
      out: { ok: false, why: 'book-closed' },
    },

    // GBP book still open - can add entries
    {
      name: 'mb-entry-open-gbp-ok',
      pattern: 'create:entry',
      params: {
        id: 'mb-e-gbp2',
        bref: 'o1/Q1-GBP/20260101',
        daref: 'o1/Asset/Cash',
        caref: 'o1/Income/Sales',
        val: 200,
        desc: 'GBP still open',
        date: 20260125,
      },
      out: {
        ok: true,
        credit: { book_id: 'mb-b-gbp' },
        debit: { book_id: 'mb-b-gbp' },
      },
    },

    // ===========================================
    // SPECIAL ENTRY SCENARIOS
    // ===========================================

    // Setup accounts for special entry tests
    {
      name: 'se-account-cash',
      pattern: 'create:account',
      params: {
        account: {
          id$: 'se-cash',
          oref: 'o2',
          path: 'Asset',
          name: 'Cash',
          normal: 'debit',
        },
      },
      out: { ok: true, account: { id: 'se-cash', aref: 'o2/Asset/Cash' } },
    },

    {
      name: 'se-account-revenue',
      pattern: 'create:account',
      params: {
        account: {
          id$: 'se-revenue',
          oref: 'o2',
          path: 'Income',
          name: 'Service Revenue',
          normal: 'credit',
        },
      },
      out: {
        ok: true,
        account: {
          id: 'se-revenue',
          aref: 'o2/Income/Service Revenue',
          normal: 'credit',
        },
      },
    },

    {
      name: 'se-account-expense',
      pattern: 'create:account',
      params: {
        account: {
          id$: 'se-expense',
          oref: 'o2',
          path: 'Expense',
          name: 'Utilities',
          normal: 'debit',
        },
      },
      out: {
        ok: true,
        account: {
          id: 'se-expense',
          aref: 'o2/Expense/Utilities',
          normal: 'debit',
        },
      },
    },

    {
      name: 'se-book-q1',
      pattern: 'create:book',
      params: {
        book: {
          id$: 'se-book-q1',
          oref: 'o2',
          name: 'Q1',
          start: 20220701,
          end: 20220930,
        },
      },
      out: { ok: true, book: { id: 'se-book-q1', bref: 'o2/Q1/20220701' } },
    },

    // Test entry with debit/credit object format
    {
      name: 'test-entry-object-format',
      pattern: 'create:entry',
      params: {
        id: 'test-obj-format',
        oref: 'o2',
        bref: 'o2/Q1/20220701',
        debit: {
          aref: 'o2/Asset/Cash',
        },
        credit: {
          aref: 'o2/Income/Service Revenue',
        },
        val: 500,
        desc: 'Consulting services',
        date: 20220801,
      },
      out: {
        ok: true,
        credit: {
          val: 500,
          desc: 'Consulting services',
          caref: 'o2/Income/Service Revenue',
        },
        debit: {
          val: 500,
          desc: 'Consulting services',
          daref: 'o2/Asset/Cash',
        },
      },
    },

    // Test Large Value Entry
    {
      name: 'test-large-value-entry',
      pattern: 'create:entry',
      params: {
        id: 'test-large-val',
        oref: 'o2',
        bref: 'o2/Q1/20220701',
        daref: 'o2/Asset/Cash',
        caref: 'o2/Income/Service Revenue',
        val: 999999999.99,
        desc: 'Large transaction',
        date: 20220815,
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

    // Test Small Value Entry
    {
      name: 'test-small-value-entry',
      pattern: 'create:entry',
      params: {
        id: 'test-small-val',
        oref: 'o2',
        bref: 'o2/Q1/20220701',
        daref: 'o2/Asset/Cash',
        caref: 'o2/Income/Service Revenue',
        val: 0.01,
        desc: 'Penny transaction',
        date: 20220820,
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

    // Test creating entry with base currency info
    {
      name: 'test-entry-base-currency',
      pattern: 'create:entry',
      params: {
        id: 'test-base-cur',
        oref: 'o2',
        bref: 'o2/Q1/20220701',
        daref: 'o2/Asset/Cash',
        caref: 'o2/Income/Service Revenue',
        val: 100,
        desc: 'Sale in EUR',
        date: 20220715,
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
          date: 20220715,
        },
        debit: {
          val: 100,
          desc: 'Sale in EUR',
          baseval: 85,
          basecur: 'EUR',
          baserate: 1.18,
          date: 20220715,
        },
      },
    },

    // Test creating entry with custom kind
    {
      name: 'test-entry-custom-kind',
      pattern: 'create:entry',
      params: {
        id: 'test-custom-kind',
        oref: 'o2',
        bref: 'o2/Q1/20220701',
        daref: 'o2/Asset/Cash',
        caref: 'o2/Income/Service Revenue',
        val: 50,
        desc: 'Adjustment',
        date: 20220720,
        kind: 'adjustment',
      },
      out: {
        ok: true,
        credit: {
          val: 50,
          desc: 'Adjustment',
          kind: 'adjustment',
          date: 20220720,
        },
        debit: {
          val: 50,
          desc: 'Adjustment',
          kind: 'adjustment',
          date: 20220720,
        },
      },
    },

    // ===========================================
    // NEGATIVE BALANCE SCENARIOS
    // ===========================================

    // Create entry that gives expense a credit balance (negative for debit normal)
    {
      name: 'test-negative-balance-entry',
      pattern: 'create:entry',
      params: {
        id: 'test-negative',
        oref: 'o2',
        bref: 'o2/Q1/20220701',
        daref: 'o2/Asset/Cash',
        caref: 'o2/Expense/Utilities',
        val: 100,
        desc: 'Refund from utility company',
        date: 20220715,
      },
      out: {
        ok: true,
        credit: {
          val: 100,
          desc: 'Refund from utility company',
        },
        debit: {
          val: 100,
          desc: 'Refund from utility company',
        },
      },
    },

    // Balance the expense account with negative balance
    {
      name: 'test-negative-balance',
      pattern: 'balance:account',
      params: {
        aref: 'o2/Expense/Utilities',
        bref: 'o2/Q1/20220701',
      },
      out: {
        ok: true,
        account_id: 'se-expense',
        aref: 'o2/Expense/Utilities',
        creditTotal: 100,
        debitTotal: 0,
        balance: -100, // Negative balance for debit normal account
        normal: 'debit',
      },
    },

    // ===========================================
    // LIST ENTRY FILTERING TESTS
    // ===========================================

    // Test list entries with credit only
    {
      name: 'test-list-entry-credit-only',
      pattern: 'list:entry',
      params: {
        oref: 'o2',
        bref: 'o2/Q1/20220701',
        aref: 'o2/Income/Service Revenue',
        credit: true,
        debit: false,
      },
      out: {
        ok: true,
        credits: [
          {
            val: 500,
            desc: 'Consulting services',
            caref: 'o2/Income/Service Revenue',
          },
        ],
        debits: [],
      },
    },

    // Test list entries with debit only
    {
      name: 'test-list-entry-debit-only',
      pattern: 'list:entry',
      params: {
        oref: 'o2',
        bref: 'o2/Q1/20220701',
        aref: 'o2/Asset/Cash',
        credit: false,
        debit: true,
      },
      out: {
        ok: true,
        credits: [],
        debits: [
          {
            val: 500,
            desc: 'Consulting services',
            daref: 'o2/Asset/Cash',
          },
        ],
      },
    },

    // ===========================================
    // CLOSING OPENING BALANCE EQUITY ACCOUNT TEST
    // ===========================================

    // First, create an entry to generate the Opening Balance account
    {
      name: 'oeb-setup-account',
      pattern: 'create:account',
      params: {
        account: {
          id$: 'oeb-cash',
          oref: 'o3',
          path: 'Asset',
          name: 'Cash',
          normal: 'debit',
        },
      },
      out: { ok: true, account: { id: 'oeb-cash', aref: 'o3/Asset/Cash' } },
    },

    {
      name: 'oeb-setup-sales',
      pattern: 'create:account',
      params: {
        account: {
          id$: 'oeb-sales',
          oref: 'o3',
          path: 'Income',
          name: 'Sales',
          normal: 'credit',
        },
      },
      out: { ok: true, account: { id: 'oeb-sales', aref: 'o3/Income/Sales' } },
    },

    {
      name: 'oeb-setup-book1',
      pattern: 'create:book',
      params: {
        book: {
          id$: 'oeb-book1',
          oref: 'o3',
          name: 'Period1',
          start: 20230101,
          end: 20230131,
        },
      },
      out: { ok: true, book: { id: 'oeb-book1', bref: 'o3/Period1/20230101' } },
    },

    {
      name: 'oeb-setup-book2',
      pattern: 'create:book',
      params: {
        book: {
          id$: 'oeb-book2',
          oref: 'o3',
          name: 'Period2',
          start: 20230201,
          end: 20230228,
        },
      },
      out: { ok: true, book: { id: 'oeb-book2', bref: 'o3/Period2/20230201' } },
    },

    {
      name: 'oeb-entry',
      pattern: 'create:entry',
      params: {
        id: 'oeb-entry1',
        oref: 'o3',
        bref: 'o3/Period1/20230101',
        daref: 'o3/Asset/Cash',
        caref: 'o3/Income/Sales',
        val: 100,
        desc: 'Initial sale',
        date: 20230115,
      },
      out: { ok: true },
    },

    // Close cash account to create Opening Balance account
    {
      name: 'oeb-close-cash',
      pattern: 'close:account',
      params: {
        aref: 'o3/Asset/Cash',
        bref: 'o3/Period1/20230101',
        target_bref: 'o3/Period2/20230201',
        end: 20230131,
      },
      out: {
        ok: true,
        original_balance: 100,
        opening_balance: 100,
        opening_balance_aref: 'o3/Equity/Opening Balance',
      },
    },

    // Test closing Opening Balance equity account (should fail)
    {
      name: 'test-close-opening-balance-account',
      pattern: 'close:account',
      params: {
        aref: 'o3/Equity/Opening Balance',
        bref: 'o3/Period1/20230101',
        end: 20230131,
      },
      out: {
        ok: false,
        why: 'cannot-close-opening-balance-account',
      },
    },

    // ===========================================
    // ENTRY DATE VALIDATION TESTS
    // ===========================================

    // Setup book with defined period
    {
      name: 'date-val-book',
      pattern: 'create:book',
      params: {
        book: {
          id$: 'date-val-book',
          oref: 'o3',
          name: 'Q1-2022',
          start: 20220101,
          end: 20220331,
        },
      },
      out: {
        ok: true,
        book: { id: 'date-val-book', bref: 'o3/Q1-2022/20220101' },
      },
    },

    // Test create entry before book start date
    {
      name: 'test-entry-before-book-start',
      pattern: 'create:entry',
      params: {
        id: 'date-invalid-start',
        oref: 'o3',
        bref: 'o3/Q1-2022/20220101',
        daref: 'o3/Asset/Cash',
        caref: 'o3/Income/Sales',
        val: 20,
        desc: 'Before start',
        date: 20211215,
      },
      out: {
        ok: false,
        why: 'invalid-entry-period',
      },
    },

    // Test create entry after book end date
    {
      name: 'test-entry-after-book-end',
      pattern: 'create:entry',
      params: {
        id: 'date-invalid-end',
        oref: 'o3',
        bref: 'o3/Q1-2022/20220101',
        daref: 'o3/Asset/Cash',
        caref: 'o3/Income/Sales',
        val: 20,
        desc: 'After end',
        date: 20220513,
      },
      out: {
        ok: false,
        why: 'invalid-entry-period',
      },
    },
  ],
}
