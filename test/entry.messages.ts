export default {
  print: false,
  pattern: 'biz:ledger',
  allow: { missing: true },

  calls: [
    // Edge Cases for Entry Creation

    // Test creating entry with nonexistent book
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

    // Test creating entry with nonexistent debit account
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

    // Test creating entry with nonexistent credit account
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

    // Test creating entry with no value
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

    // Test creating entry with no description
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

    // Test creating entry with empty description
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

    // Test creating entry with no date
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

    // Test creating entry with base currency info
    {
      name: 'test-entry-base-currency',
      pattern: 'create:entry',
      params: {
        id: 'test-base-cur',
        oref: 'o0',
        bref: 'o0/Q3/20220701',
        daref: 'o0/Asset/Cash',
        caref: 'o0/Income/Sales',
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
        oref: 'o0',
        bref: 'o0/Q3/20220701',
        daref: 'o0/Asset/Cash',
        caref: 'o0/Income/Sales',
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

    // Test list entries with no oref (should fail)
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

    // Test list entries with credit only
    {
      name: 'test-list-entry-credit-only',
      pattern: 'list:entry',
      params: {
        oref: 'o0',
        bref: 'o0/Q1/20220101',
        aref: 'o0/Income/Sales',
        credit: true,
        debit: false,
      },
      out: {
        ok: true,
        credits: [
          {
            val: 100,
            desc: 'Jan Sales',
            caref: 'o0/Income/Sales',
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
        oref: 'o0',
        bref: 'o0/Q1/20220101',
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
            desc: 'Jan Sales',
            daref: 'o0/Asset/Cash',
          },
        ],
      },
    },

    // Test entry with debit/credit object format
    {
      name: 'test-entry-object-format',
      pattern: 'create:entry',
      params: {
        id: 'test-obj-format',
        oref: 'o0',
        bref: 'o0/Q3/20220701',
        debit: {
          aref: 'o0/Asset/Cash',
        },
        credit: {
          aref: 'o0/Income/Service Revenue',
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
          caref: 'o0/Income/Service Revenue',
        },
        debit: {
          val: 500,
          desc: 'Consulting services',
          daref: 'o0/Asset/Cash',
        },
      },
    },

    // Test Large Value Entry
    {
      name: 'test-large-value-entry',
      pattern: 'create:entry',
      params: {
        id: 'test-large-val',
        oref: 'o0',
        bref: 'o0/Q3/20220701',
        daref: 'o0/Asset/Cash',
        caref: 'o0/Income/Service Revenue',
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
        oref: 'o0',
        bref: 'o0/Q3/20220701',
        daref: 'o0/Asset/Cash',
        caref: 'o0/Income/Service Revenue',
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
  ],
}
