"use strict";
// close:account scenarios and balance verification.
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    // Create a liability account for testing close:account
    {
        name: 'shop-a3',
        pattern: 'create:account',
        params: {
            account: {
                id$: 'shop-a3',
                oref: 'o0',
                path: 'Liability',
                name: 'Credit Card',
                normal: 'credit',
            },
        },
        out: {
            ok: true,
            account: {
                id: 'shop-a3',
                path0: 'Liability',
                path1: '',
                path2: '',
                org_id: 'o0',
                oref: 'o0',
                aref: 'o0/Liability/Credit Card',
                path: ['Liability'],
                name: 'Credit Card',
                normal: 'credit',
            },
        },
    },
    // Create Q2 book for target closing
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
    // Create entry to give Credit Card account a balance
    {
        name: 'shop-e2',
        pattern: 'create:entry',
        params: {
            id: 'shop-e2',
            oref: 'o0',
            bref: 'o0/Q1/20220101',
            daref: 'o0/Asset/Office',
            caref: 'o0/Liability/Credit Card',
            val: 50,
            desc: 'Buy chair with credit card',
            date: 20220215,
        },
        out: {
            ok: true,
            credit: {
                val: 50,
                desc: 'Buy chair with credit card',
                kind: 'standard',
                oref: 'o0',
                org_id: 'o0',
                bref: 'o0/Q1/20220101',
                book_id: 'shop-b0',
                custom: {},
                baseval: -1,
                basecur: '---',
                baserate: 0,
                credit_id: 'shop-a3',
                caref: 'o0/Liability/Credit Card',
                id: 'shop-e2',
            },
            debit: {
                val: 50,
                desc: 'Buy chair with credit card',
                kind: 'standard',
                oref: 'o0',
                org_id: 'o0',
                bref: 'o0/Q1/20220101',
                book_id: 'shop-b0',
                custom: {},
                baseval: -1,
                basecur: '---',
                baserate: 0,
                debit_id: 'shop-a2',
                daref: 'o0/Asset/Office',
                id: 'shop-e2',
            },
        },
    },
    // Balance Credit Card account before closing
    {
        name: 'shop-ba3-before',
        pattern: 'balance:account',
        params: {
            aref: 'o0/Liability/Credit Card',
            bref: 'o0/Q1/20220101',
        },
        out: {
            ok: true,
            account_id: 'shop-a3',
            aref: 'o0/Liability/Credit Card',
            book_id: 'shop-b0',
            bref: 'o0/Q1/20220101',
            start: 20220101,
            end: 20220331,
            creditTotal: 50,
            debitTotal: 0,
            creditCount: 1,
            debitCount: 0,
            normal: 'credit',
            balance: 50,
        },
    },
    // Close Credit Card account from Q1 to Q2
    {
        name: 'shop-ca3',
        pattern: 'close:account',
        params: {
            aref: 'o0/Liability/Credit Card',
            bref: 'o0/Q1/20220101',
            target_bref: 'o0/Q2/20220401',
            end: 20220331,
        },
        out: {
            ok: true,
            account_id: 'shop-a3',
            aref: 'o0/Liability/Credit Card',
            book_id: 'shop-b0',
            bref: 'o0/Q1/20220101',
            target_book_id: 'shop-b1',
            target_bref: 'o0/Q2/20220401',
            original_balance: 50,
            closing_balance: 0,
            opening_balance: 50,
            opening_balance_aref: 'o0/Equity/Opening Balance',
            closing_date: 20220331,
        },
    },
    // Verify Credit Card account is zeroed in Q1
    {
        name: 'shop-ba3-closed',
        pattern: 'balance:account',
        params: {
            aref: 'o0/Liability/Credit Card',
            bref: 'o0/Q1/20220101',
        },
        out: {
            ok: true,
            account_id: 'shop-a3',
            aref: 'o0/Liability/Credit Card',
            book_id: 'shop-b0',
            bref: 'o0/Q1/20220101',
            start: 20220101,
            end: 20220331,
            creditTotal: 50,
            debitTotal: 50,
            creditCount: 1,
            debitCount: 1,
            normal: 'credit',
            balance: 0,
        },
    },
    // Verify Credit Card account has correct balance in Q2
    {
        name: 'shop-ba3-opened',
        pattern: 'balance:account',
        params: {
            aref: 'o0/Liability/Credit Card',
            bref: 'o0/Q2/20220401',
        },
        out: {
            ok: true,
            account_id: 'shop-a3',
            aref: 'o0/Liability/Credit Card',
            book_id: 'shop-b1',
            bref: 'o0/Q2/20220401',
            start: 20220401,
            end: 20220630,
            creditTotal: 50,
            debitTotal: 0,
            creditCount: 1,
            debitCount: 0,
            normal: 'credit',
            balance: 50,
        },
    },
    // Test closing Cash account (debit normal) with positive balance
    {
        name: 'shop-ca0',
        pattern: 'close:account',
        params: {
            aref: 'o0/Asset/Cash',
            bref: 'o0/Q1/20220101',
            target_bref: 'o0/Q2/20220401',
            end: 20220331,
        },
        out: {
            ok: true,
            account_id: 'shop-a0',
            aref: 'o0/Asset/Cash',
            book_id: 'shop-b0',
            bref: 'o0/Q1/20220101',
            target_book_id: 'shop-b1',
            target_bref: 'o0/Q2/20220401',
            original_balance: 80,
            closing_balance: 0,
            opening_balance: 80,
            opening_balance_aref: 'o0/Equity/Opening Balance',
            closing_date: 20220331,
        },
    },
    // Verify Cash account is zeroed in Q1
    {
        name: 'shop-ba0-closed',
        pattern: 'balance:account',
        params: {
            aref: 'o0/Asset/Cash',
            bref: 'o0/Q1/20220101',
        },
        out: {
            ok: true,
            account_id: 'shop-a0',
            aref: 'o0/Asset/Cash',
            book_id: 'shop-b0',
            bref: 'o0/Q1/20220101',
            start: 20220101,
            end: 20220331,
            creditTotal: 100, // Original 20 + closing credit 80
            debitTotal: 100, // Original debit 100
            creditCount: 2, // Original + closing entry
            debitCount: 1, // Original debit entry
            normal: 'debit',
            balance: 0,
        },
    },
    // Verify Cash account has correct balance in Q2
    {
        name: 'shop-ba0-opened',
        pattern: 'balance:account',
        params: {
            aref: 'o0/Asset/Cash',
            bref: 'o0/Q2/20220401',
        },
        out: {
            ok: true,
            account_id: 'shop-a0',
            aref: 'o0/Asset/Cash',
            book_id: 'shop-b1',
            bref: 'o0/Q2/20220401',
            start: 20220401,
            end: 20220630,
            creditTotal: 0,
            debitTotal: 80,
            creditCount: 0,
            debitCount: 1,
            normal: 'debit',
            balance: 80,
        },
    },
    // Test create a entry before the book start date
    {
        name: 'shop-invalid-entry-start',
        pattern: 'create:entry',
        params: {
            id: 'shop-invalid-entry-start',
            oref: 'o0',
            bref: 'o0/Q1/20220101',
            daref: 'o0/Asset/Cash',
            caref: 'o0/Income/Sales',
            val: 20,
            desc: 'Q1 Sales',
            date: 20211215,
        },
        out: {
            ok: false,
            why: 'invalid-entry-period',
        },
    },
    // Test create a entry after the book end date
    {
        name: 'shop-invalid-entry-end',
        pattern: 'create:entry',
        params: {
            id: 'shop-invalid-entry-end',
            oref: 'o0',
            bref: 'o0/Q1/20220101',
            daref: 'o0/Asset/Cash',
            caref: 'o0/Income/Sales',
            val: 20,
            desc: 'Q1 Sales',
            date: 20220513,
        },
        out: {
            ok: false,
            why: 'invalid-entry-period',
        },
    },
];
//# sourceMappingURL=basic-2-close-account.messages.js.map