export default {
  print: false,
  pattern: 'biz:ledger',
  allow: { missing: true },

  calls: [
    // Edge Cases for Book Retrieval

    // Test get book that doesn't exist
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

    {
      name: 'shop-b0',
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
      out: {
        ok: true,
        book: {
          id: 'shop-b0',
          org_id: 'o0',
          oref: 'o0',
          bref: 'o0/Q1/20220101',
          name: 'Q1',
          start: 20220101,
          time: { kind: 'basic' },
        },
      },
    },

    // Test get book by id
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

    // Test list books with org filter
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

    // Test update book that doesn't exist
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

    // Test update book with no update data
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

    // Edge Cases for Close Book

    // Test closing nonexistent book
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

    {
      name: 'shop-a0',
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
      out: {
        ok: true,
        account: {
          id: 'shop-a0',
          path0: 'Asset',
          path1: '',
          path2: '',
          org_id: 'o0',
          oref: 'o0',
          aref: 'o0/Asset/Cash',
          path: ['Asset'],
          name: 'Cash',
          normal: 'debit',
        },
      },
    },

    {
      name: 'shop-a1',
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
      out: {
        ok: true,
        account: {
          id: 'shop-a1',
          path0: 'Income',
          path1: '',
          path2: '',
          org_id: 'o0',
          oref: 'o0',
          aref: 'o0/Income/Sales',
          path: ['Income'],
          name: 'Sales',
          normal: 'credit',
        },
      },
    },

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

    // Test closing Opening Balance equity account (should fail)
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

    // Test closing already closed book
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

    // Test closing book with nonexistent target
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

    // Create empty book for testing
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

    // Test closing empty book
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

    // Edge Cases for Export Book CSV

    // Test export for nonexistent book
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

    // Test export for empty book
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

    // MULTI-BOOK TESTS Same org, same period, different books (e.g., currency)

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

    // TEST: Entries go to the correct specified book (not another)

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

    // TEST Balance shows correct data per book (isolation)

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

    // TEST List entries shows correct data per book (isolation)

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

    // TEST Close specific book, others remain open

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
  ],
}
