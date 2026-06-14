"use strict";
/* Copyright © 2026 Seneca Project Contributors, MIT License. */
Object.defineProperty(exports, "__esModule", { value: true });
// balance / close / export:account edge cases. A single Cash account in an
// empty Q2 book is enough to exercise the not-found and zero-balance paths;
// the full money-movement behaviour is covered by the lifecycle suite.
const seed_1 = require("./seed");
exports.default = {
    print: false,
    pattern: 'biz:ledger',
    allow: { missing: true },
    calls: [
        // --- seed ---
        seed_1.account.cash,
        seed_1.book.q2,
        // --- balance:account ---
        // balance for a nonexistent account
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
        // balance for a nonexistent book
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
        // balance for an account with no entries
        {
            name: 'test-balance-zero-account',
            pattern: 'balance:account',
            params: {
                aref: 'o0/Asset/Cash',
                bref: 'o0/Q2/20220401',
            },
            out: {
                ok: true,
                account_id: 'shop-a0',
                aref: 'o0/Asset/Cash',
                balance: 0,
            },
        },
        // --- close:account ---
        // close a nonexistent account
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
        // close an account in a nonexistent book
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
        // close an account with zero balance
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
        // close into a nonexistent target book
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
        // --- export:account ---
        // export a nonexistent account
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
        // export an account in a nonexistent book
        {
            name: 'test-export-account-nonexistent-book',
            pattern: 'export:account,format:csv',
            params: {
                aref: 'o0/Asset/Cash',
                bref: 'o0/NonExistent/20230101',
            },
            out: {
                ok: false,
                why: 'book-not-found',
            },
        },
    ],
};
//# sourceMappingURL=account-balance-close-export.messages.js.map