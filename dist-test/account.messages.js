"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    print: false,
    pattern: 'biz:ledger',
    allow: { missing: true },
    calls: [
        // Edge Cases for Balance Account
        // Test balance for nonexistent account
        {
            name: 'test-balance-nonexistent-account',
            pattern: 'balance:account',
            params: {
                aref: 'o0/Asset/NonExistent',
                bref: 'o0/Q1/20220101',
            },
            out: {
                ok: false,
                why: 'account-not-found',
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
        // Test balance for nonexistent book
        {
            name: 'test-balance-nonexistent-book',
            pattern: 'balance:account',
            params: {
                aref: 'o0/Asset/Cash',
                bref: 'o0/NonExistent/20230101',
            },
            out: {
                ok: false,
                why: 'book-not-found',
            },
        },
        {
            name: 'cash-b1',
            pattern: 'create:book',
            params: {
                book: {
                    id$: 'cash-b1',
                    oref: 'o0',
                    name: 'Q2',
                    start: 20220401,
                    end: 20220630,
                },
            },
            out: {
                ok: true,
                book: {
                    id: 'cash-b1',
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
        // Test balance for account with zero balance
        {
            name: 'test-balance-zero-account',
            pattern: 'balance:account',
            params: {
                aref: 'o0/Asset/Cash',
                bref: 'o0/Q2/20220401',
            },
            out: {
                ok: true,
                account_id: 'cash-a0',
                aref: 'o0/Asset/Cash',
                balance: 0,
            },
        },
        // Edge Cases for Close Account
        // Test closing nonexistent account
        {
            name: 'test-close-nonexistent-account',
            pattern: 'close:account',
            params: {
                aref: 'o0/Asset/NonExistent',
                bref: 'o0/Q3/20220701',
                end: 20220930,
            },
            out: {
                ok: false,
                why: 'account-not-found',
            },
        },
        // Test closing account in nonexistent book
        {
            name: 'test-close-account-nonexistent-book',
            pattern: 'close:account',
            params: {
                aref: 'o0/Asset/Cash',
                bref: 'o0/NonExistent/20230101',
                end: 20230331,
            },
            out: {
                ok: false,
                why: 'book-not-found',
            },
        },
        // Test closing account with zero balance
        {
            name: 'test-close-zero-balance-account',
            pattern: 'close:account',
            params: {
                aref: 'o0/Asset/Cash',
                bref: 'o0/Q2/20220401',
                end: 20220430,
            },
            out: {
                ok: true,
                aref: 'o0/Asset/Cash',
                original_balance: 0,
                closing_balance: 0,
                opening_balance: 0,
                opening_balance_aref: null,
                closing_entries: [],
                opening_entries: [],
            },
        },
        // Test closing account with nonexistent target book
        {
            name: 'test-close-account-bad-target',
            pattern: 'close:account',
            params: {
                aref: 'o0/Asset/Cash',
                bref: 'o0/Q2/20220401',
                target_bref: 'o0/NonExistent/20230101',
                end: 20220930,
            },
            out: {
                ok: false,
                why: 'target-book-not-found',
            },
        },
        // Edge Cases for Export Account CSV
        // Test export for nonexistent account
        {
            name: 'test-export-nonexistent-account',
            pattern: 'export:account,format:csv',
            params: {
                aref: 'o0/Asset/NonExistent',
                bref: 'o0/Q1/20220101',
            },
            out: {
                ok: false,
                why: 'account-not-found',
            },
        },
        // Test export for nonexistent book
        {
            name: 'test-export-account-nonexistent-book',
            pattern: 'export:account,format:csv',
            params: {
                aref: 'o0/Asset/Cash',
                bref: 'o0/NonExistent/20230101',
            },
            out: {
                ok: false,
                why: 'bookEnt-not-found',
            },
        },
        // Multi-path Account Testing
        // Create account with 3-level path
        {
            name: 'test-deep-path-account',
            pattern: 'create:account',
            params: {
                account: {
                    id$: 'test-deep-path',
                    oref: 'o0',
                    path: ['Asset', 'Current', 'Cash'],
                    name: 'Petty Cash',
                    normal: 'debit',
                },
            },
            out: {
                ok: true,
                account: {
                    id: 'test-deep-path',
                    path0: 'Asset',
                    path1: 'Current',
                    path2: 'Cash',
                    aref: 'o0/Asset/Current/Cash/Petty Cash',
                    path: ['Asset', 'Current', 'Cash'],
                    name: 'Petty Cash',
                },
            },
        },
        // Test Complex Entry Scenarios
        // Create revenue account for testing
        {
            name: 'test-revenue-account',
            pattern: 'create:account',
            params: {
                account: {
                    id$: 'test-revenue',
                    oref: 'o0',
                    path: 'Income',
                    name: 'Service Revenue',
                    normal: 'credit',
                },
            },
            out: {
                ok: true,
                account: {
                    id: 'test-revenue',
                    aref: 'o0/Income/Service Revenue',
                    normal: 'credit',
                },
            },
        },
    ],
};
//# sourceMappingURL=account.messages.js.map