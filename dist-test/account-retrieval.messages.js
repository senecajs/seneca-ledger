"use strict";
/* Copyright © 2026 Seneca Project Contributors, MIT License. */
Object.defineProperty(exports, "__esModule", { value: true });
// get / list / update:account edge cases against a seeded chart of accounts.
const seed_1 = require("./seed");
exports.default = {
    print: false,
    pattern: 'biz:ledger',
    allow: { missing: true },
    calls: [
        // --- seed ---
        ...seed_1.chartOfAccounts,
        // --- assertions ---
        // get a nonexistent account
        {
            name: 'test-get-nonexistent-account',
            pattern: 'get:account',
            params: {
                aref: 'o0/Asset/NonExistent',
            },
            out: {
                ok: false,
                why: 'account-not-found',
            },
        },
        // get account by id
        {
            name: 'test-get-account-by-id',
            pattern: 'get:account',
            params: {
                id: 'shop-a0',
            },
            out: {
                ok: true,
                account: {
                    id: 'shop-a0',
                },
            },
        },
        // get account by account_id
        {
            name: 'test-get-account-by-account-id',
            pattern: 'get:account',
            params: {
                account_id: 'shop-a1',
            },
            out: {
                ok: true,
                account: {
                    id: 'shop-a1',
                    aref: 'o0/Income/Sales',
                },
            },
        },
        // list accounts with org filter
        {
            name: 'test-list-accounts-org',
            pattern: 'list:account',
            params: {
                org_id: 'o0',
            },
            out: {
                ok: true,
                q: { org_id: 'o0' },
            },
        },
        // list all accounts (no filter)
        {
            name: 'test-list-all-accounts',
            pattern: 'list:account',
            params: {},
            out: {
                ok: true,
                q: {},
            },
        },
        // update a nonexistent account
        {
            name: 'test-update-nonexistent-account',
            pattern: 'update:account',
            params: {
                aref: 'o0/Asset/NonExistent',
                account: {
                    custom_field: 'value',
                },
            },
            out: {
                ok: false,
                why: 'account-not-found',
            },
        },
        // update with no update data
        {
            name: 'test-update-account-no-data',
            pattern: 'update:account',
            params: {
                id: 'shop-a0',
            },
            out: {
                ok: false,
                why: 'no-account-update',
            },
        },
    ],
};
//# sourceMappingURL=account-retrieval.messages.js.map