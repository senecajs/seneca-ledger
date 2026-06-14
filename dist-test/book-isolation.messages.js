"use strict";
/* Copyright © 2026 Seneca Project Contributors, MIT License. */
Object.defineProperty(exports, "__esModule", { value: true });
// Multi-book isolation: one org (o1), one period, separate books per currency.
// Entries, balances and closures must stay scoped to their own book.
// Self-contained — builds its own org so it never collides with other suites.
exports.default = {
    print: false,
    pattern: 'biz:ledger',
    allow: { missing: true },
    calls: [
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
        // Entries go to the correct specified book (not another)
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
        // Balance shows correct data per book (isolation)
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
        // List entries shows correct data per book (isolation)
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
        // Close one book, the others stay open
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
};
//# sourceMappingURL=book-isolation.messages.js.map