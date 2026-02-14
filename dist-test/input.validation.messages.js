"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    print: false,
    pattern: 'biz:ledger',
    allow: { missing: true },
    calls: [
        // Test creating account with missing account object
        {
            name: 'test-missing-account',
            pattern: 'create:account',
            params: {},
            out: {
                ok: false,
                why: 'no-account',
            },
        },
        // Test creating account with no org
        {
            name: 'test-no-org-account',
            pattern: 'create:account',
            params: {
                account: {
                    path: 'Asset',
                    name: 'Test',
                    normal: 'debit',
                },
            },
            out: {
                ok: false,
                why: 'no-org',
            },
        },
        // Test creating account with no name
        {
            name: 'test-no-name-account',
            pattern: 'create:account',
            params: {
                account: {
                    oref: 'o0',
                    path: 'Asset',
                    normal: 'debit',
                },
            },
            out: {
                ok: false,
                why: 'no-name',
            },
        },
        // Test creating account with empty name
        {
            name: 'test-empty-name-account',
            pattern: 'create:account',
            params: {
                account: {
                    oref: 'o0',
                    path: 'Asset',
                    name: '',
                    normal: 'debit',
                },
            },
            out: {
                ok: false,
                why: 'no-name',
            },
        },
        // Test creating account with invalid normal (not debit or credit)
        {
            name: 'test-invalid-normal',
            pattern: 'create:account',
            params: {
                account: {
                    oref: 'o0',
                    path: 'Asset',
                    name: 'Invalid',
                    normal: 'invalid',
                },
            },
            out: {
                ok: false,
                why: 'invalid-normal',
            },
        },
        // Test creating account with array path
        {
            name: 'test-array-path-account',
            pattern: 'create:account',
            params: {
                account: {
                    id$: 'test-array-path',
                    oref: 'o0',
                    path: ['Asset', 'Current'],
                    name: 'Bank Account',
                    normal: 'debit',
                },
            },
            out: {
                ok: true,
                account: {
                    id: 'test-array-path',
                    path0: 'Asset',
                    path1: 'Current',
                    path2: '',
                    org_id: 'o0',
                    oref: 'o0',
                    aref: 'o0/Asset/Current/Bank Account',
                    path: ['Asset', 'Current'],
                    name: 'Bank Account',
                    normal: 'debit',
                },
            },
        },
        // Test creating account with org_id instead of oref
        {
            name: 'test-org-id-account',
            pattern: 'create:account',
            params: {
                account: {
                    id$: 'test-org-id',
                    org_id: 'org001',
                    path: 'Expense',
                    name: 'Rent',
                    normal: 'debit',
                },
            },
            out: {
                ok: true,
                account: {
                    id: 'test-org-id',
                    path0: 'Expense',
                    path1: '',
                    path2: '',
                    org_id: 'org001',
                    oref: 'org001',
                    aref: 'org001/Expense/Rent',
                    path: ['Expense'],
                    name: 'Rent',
                    normal: 'debit',
                },
            },
        },
        // Test Negative Balance Scenarios
        // Create expense account for negative balance testing
        {
            name: 'test-expense-account',
            pattern: 'create:account',
            params: {
                account: {
                    id$: 'test-expense',
                    oref: 'o0',
                    path: 'Expense',
                    name: 'Utilities',
                    normal: 'debit',
                },
            },
            out: {
                ok: true,
                account: {
                    id: 'test-expense',
                    aref: 'o0/Expense/Utilities',
                    normal: 'debit',
                },
            },
        },
        // Create entry that gives expense a credit balance (negative for debit normal)
        {
            name: 'test-negative-balance-entry',
            pattern: 'create:entry',
            params: {
                id: 'test-negative',
                oref: 'o0',
                bref: 'o0/Q3/20220701',
                daref: 'o0/Asset/Cash',
                caref: 'o0/Expense/Utilities',
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
                aref: 'o0/Expense/Utilities',
                bref: 'o0/Q3/20220701',
            },
            out: {
                ok: true,
                account_id: 'test-expense',
                aref: 'o0/Expense/Utilities',
                creditTotal: 100,
                debitTotal: 0,
                balance: -100, // Negative balance for debit normal account
                normal: 'debit',
            },
        },
    ],
};
//# sourceMappingURL=input.validation.messages.js.map