"use strict";
// close:book, cross-book balance verification, opening-balance checks.
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    // Test close:book method - Close Q1 book and transfer all accounts to Q2
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
            closing_date: 20220331,
            summary: {
                total_accounts: 4, // Cash, Sales, Office, Credit Card - doesn't count Opening Balance
                successful_closures: 4,
                failed_closures: 0,
                total_balance_transferred: 170, // 100 (Sales) + 70 (Office) = remaining balances
                all_accounts_zeroed: true,
            },
            closure_successful: true,
        },
    },
    // Verify all accounts are zeroed in Q1 after book closure
    {
        name: 'shop-verify-cash-after-book-close',
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
    {
        name: 'shop-verify-sales-after-book-close',
        pattern: 'balance:account',
        params: {
            aref: 'o0/Income/Sales',
            bref: 'o0/Q1/20220101',
        },
        out: {
            ok: true,
            account_id: 'shop-a1',
            aref: 'o0/Income/Sales',
            book_id: 'shop-b0',
            bref: 'o0/Q1/20220101',
            start: 20220101,
            end: 20220331,
            creditTotal: 100, // Original credit 100
            debitTotal: 100, // Closing debit 100
            creditCount: 1, // Original credit entry
            debitCount: 1, // Closing entry
            normal: 'credit',
            balance: 0,
        },
    },
    {
        name: 'shop-verify-office-after-book-close',
        pattern: 'balance:account',
        params: {
            aref: 'o0/Asset/Office',
            bref: 'o0/Q1/20220101',
        },
        out: {
            ok: true,
            account_id: 'shop-a2',
            aref: 'o0/Asset/Office',
            book_id: 'shop-b0',
            bref: 'o0/Q1/20220101',
            start: 20220101,
            end: 20220331,
            creditTotal: 70, // Closing credit 70
            debitTotal: 70, // Original debits: 20 + 50 = 70
            creditCount: 1, // Closing entry
            debitCount: 2, // Two original debit entries
            normal: 'debit',
            balance: 0,
        },
    },
    {
        name: 'shop-verify-credit-card-after-book-close',
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
            creditTotal: 50, // Original credit 50
            debitTotal: 50, // Closing debit 50
            creditCount: 1, // Original credit entry
            debitCount: 1, // Closing entry
            normal: 'credit',
            balance: 0,
        },
    },
    // Verify all accounts have correct balances in Q2 after book closure
    {
        name: 'shop-verify-cash-q2-after-book-close',
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
            debitTotal: 80, // Opening debit 80
            creditCount: 0,
            debitCount: 1, // Opening entry
            normal: 'debit',
            balance: 80,
        },
    },
    {
        name: 'shop-verify-sales-q2-after-book-close',
        pattern: 'balance:account',
        params: {
            aref: 'o0/Income/Sales',
            bref: 'o0/Q2/20220401',
        },
        out: {
            ok: true,
            account_id: 'shop-a1',
            aref: 'o0/Income/Sales',
            book_id: 'shop-b1',
            bref: 'o0/Q2/20220401',
            start: 20220401,
            end: 20220630,
            creditTotal: 100, // Opening credit 100
            debitTotal: 0,
            creditCount: 1, // Opening entry
            debitCount: 0,
            normal: 'credit',
            balance: 100,
        },
    },
    {
        name: 'shop-verify-office-q2-after-book-close',
        pattern: 'balance:account',
        params: {
            aref: 'o0/Asset/Office',
            bref: 'o0/Q2/20220401',
        },
        out: {
            ok: true,
            account_id: 'shop-a2',
            aref: 'o0/Asset/Office',
            book_id: 'shop-b1',
            bref: 'o0/Q2/20220401',
            start: 20220401,
            end: 20220630,
            creditTotal: 0,
            debitTotal: 70, // Opening debit 70
            creditCount: 0,
            debitCount: 1, // Opening entry
            normal: 'debit',
            balance: 70,
        },
    },
    {
        name: 'shop-verify-credit-card-q2-after-book-close',
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
            creditTotal: 50, // Opening credit 50
            debitTotal: 0,
            creditCount: 1, // Opening entry
            debitCount: 0,
            normal: 'credit',
            balance: 50,
        },
    },
    // Verify Opening Balance Equity nets to zero across both books
    {
        name: 'shop-verify-open-balance-q1-after-book-close',
        pattern: 'balance:account',
        params: {
            aref: 'o0/Equity/Opening Balance',
            bref: 'o0/Q1/20220101',
        },
        out: {
            ok: true,
            aref: 'o0/Equity/Opening Balance',
            book_id: 'shop-b0',
            bref: 'o0/Q1/20220101',
            start: 20220101,
            end: 20220331,
            creditTotal: 150, // 50 (Credit Card) + 100 (Sales)
            debitTotal: 150, // 80 (Cash) + 70 (Office)
            normal: 'credit',
            balance: 0, // Should net to zero in closing book
        },
    },
    {
        name: 'shop-verify-open-balance-q2-after-book-close',
        pattern: 'balance:account',
        params: {
            aref: 'o0/Equity/Opening Balance',
            bref: 'o0/Q2/20220401',
        },
        out: {
            ok: true,
            aref: 'o0/Equity/Opening Balance',
            book_id: 'shop-b1',
            bref: 'o0/Q2/20220401',
            start: 20220401,
            end: 20220630,
            creditTotal: 150, // 80 (Cash) + 70 (Office)
            debitTotal: 150, // 50 (Credit Card) + 100 (Sales)
            normal: 'credit',
            balance: 0, // Should net to zero in opening book
        },
    },
    // Add some entries to Q2 to test closing without target
    {
        name: 'shop-e3',
        pattern: 'create:entry',
        params: {
            id: 'shop-e3',
            oref: 'o0',
            bref: 'o0/Q2/20220401',
            daref: 'o0/Asset/Cash',
            caref: 'o0/Income/Sales',
            val: 200,
            desc: 'Q2 Sales',
            date: 20220515,
        },
        out: {
            ok: true,
            credit: {
                val: 200,
                desc: 'Q2 Sales',
                kind: 'standard',
                oref: 'o0',
                org_id: 'o0',
                bref: 'o0/Q2/20220401',
                book_id: 'shop-b1',
                custom: {},
                baseval: -1,
                basecur: '---',
                baserate: 0,
                credit_id: 'shop-a1',
                caref: 'o0/Income/Sales',
                id: 'shop-e3',
            },
            debit: {
                val: 200,
                desc: 'Q2 Sales',
                kind: 'standard',
                oref: 'o0',
                org_id: 'o0',
                bref: 'o0/Q2/20220401',
                book_id: 'shop-b1',
                custom: {},
                baseval: -1,
                basecur: '---',
                baserate: 0,
                debit_id: 'shop-a0',
                daref: 'o0/Asset/Cash',
                id: 'shop-e3',
            },
        },
    },
    // Create Q3 book for target closing
    {
        name: 'shop-b2',
        pattern: 'create:book',
        params: {
            book: {
                id$: 'shop-b2',
                oref: 'o0',
                name: 'Q3',
                start: 20220701,
                end: 20220930,
            },
        },
        out: {
            ok: true,
            book: {
                id: 'shop-b2',
                org_id: 'o0',
                oref: 'o0',
                bref: 'o0/Q3/20220701',
                name: 'Q3',
                start: 20220701,
                end: 20220930,
                time: { kind: 'basic' },
            },
        },
    },
    // Close Q2 book without specifying target (only close, don't open)
    {
        name: 'shop-cb1-no-target',
        pattern: 'close:book',
        params: {
            bref: 'o0/Q2/20220401',
            target_bref: 'o0/Q3/20220701',
            end: 20220630,
        },
        out: {
            ok: true,
            book_id: 'shop-b1',
            bref: 'o0/Q2/20220401',
            closing_date: 20220630,
            summary: {
                total_accounts: 4, // All accounts that have entries in Q2
                successful_closures: 4,
                failed_closures: 0,
                total_balance_transferred: 700,
                all_accounts_zeroed: true,
            },
            closure_successful: true,
        },
    },
    // Try to add entry to Q1 book (closed on 20220331)
    {
        name: 'shop-fail-q1-entry',
        pattern: 'create:entry',
        params: {
            id: 'shop-fail-e1',
            oref: 'o0',
            bref: 'o0/Q1/20220101',
            daref: 'o0/Asset/Cash',
            caref: 'o0/Income/Sales',
            val: 500,
            desc: 'Attempted entry after Q1 closure',
            date: 20220215,
        },
        out: {
            ok: false,
            why: 'book-closed',
        },
    },
    // Try to add entry to Q2 book (closed on 20220630)
    {
        name: 'shop-fail-q2-entry',
        pattern: 'create:entry',
        params: {
            id: 'shop-fail-e2',
            oref: 'o0',
            bref: 'o0/Q2/20220401',
            daref: 'o0/Asset/Office',
            caref: 'o0/Asset/Cash',
            val: 300,
            desc: 'Attempted entry after Q2 closure',
            date: 20220517,
        },
        out: {
            ok: false,
            why: 'book-closed',
        },
    },
];
//# sourceMappingURL=basic-3-close-book.messages.js.map