"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
        {
            name: 'cash-a0',
            pattern: 'create:account',
            params: {
                account: {
                    id$: 'cash-a0',
                    oref: 'o0',
                    path: 'Asset',
                    name: 'Cash',
                    normal: 'debit',
                },
            },
            out: {
                ok: true,
                account: {
                    id: 'cash-a0',
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
        {
            name: 'test-create-sales-account',
            pattern: 'create:account',
            params: {
                account: {
                    id$: 'income-sales',
                    oref: 'o0',
                    path: 'Income',
                    name: 'Sales',
                    normal: 'credit',
                },
            },
            out: {
                ok: true,
                account: {
                    id: 'income-sales',
                    aref: 'o0/Income/Sales',
                    normal: 'credit',
                },
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
        {
            name: 'mb-book-eur',
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
            out: {
                ok: true, book: {
                    id: 'mb-b-eur',
                    bref: 'o0/Q1-EUR/20260101'
                }
            },
        },
        // Test creating entry with base currency info
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
        // Test creating entry with custom kind
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
        // Test entry with debit/credit object format
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
        // // Test Large Value Entry
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
        // // Test Small Value Entry
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
    ],
};
//# sourceMappingURL=entry.messages.js.map