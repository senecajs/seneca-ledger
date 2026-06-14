"use strict";
/* Copyright © 2026 Seneca Project Contributors, MIT License. */
Object.defineProperty(exports, "__esModule", { value: true });
// create:account behaviour: input validation plus the accepted path / org
// variants. Self-contained — every call is independent and needs no seed.
exports.default = {
    print: false,
    pattern: 'biz:ledger',
    allow: { missing: true },
    calls: [
        // Reject create with missing account object
        {
            name: 'test-missing-account',
            pattern: 'create:account',
            params: {},
            out: {
                ok: false,
                why: 'no-account',
            },
        },
        // Reject create with no org
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
        // Reject create with no name
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
        // Reject create with empty name
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
        // Reject create with invalid normal (not debit or credit)
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
        // Accept array path (2 levels)
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
        // Accept deep array path (3 levels)
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
        // Accept org_id in place of oref
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
        // Accept credit-normal income account
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
//# sourceMappingURL=account-validation.messages.js.map