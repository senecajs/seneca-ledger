"use strict";
// Basic ledger: sent email invite to a friend
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    print: false,
    pattern: 'biz:ledger',
    allow: { missing: true },
    calls: [
        // See https://fundsnetservices.com/debits-and-credits
        // Chart of Accounts
        {
            name: 'shop-a0',
            pattern: 'create:account',
            params: {
                account: {
                    id$: 'shop-a0',
                    oref: 'o0',
                    path: 'Asset',
                    name: 'Cash',
                    normal: 'debit',
                },
            },
            out: {
                ok: true,
                account: {
                    id: 'shop-a0',
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
        {
            name: 'shop-ua0',
            pattern: 'update:account',
            params: {
                id: 'shop-a0',
                account: {
                    xfoo: 1, // custom field
                },
            },
            out: {
                ok: true,
                account: {
                    id: 'shop-a0',
                    path0: 'Asset',
                    path1: '',
                    path2: '',
                    org_id: 'o0',
                    oref: 'o0',
                    aref: 'o0/Asset/Cash',
                    path: ['Asset'],
                    name: 'Cash',
                    normal: 'debit',
                    xfoo: 1,
                },
            },
        },
        {
            name: 'shop-a1',
            pattern: 'create:account',
            params: {
                account: {
                    id$: 'shop-a1',
                    oref: 'o0',
                    path: 'Income',
                    name: 'Sales',
                    normal: 'credit',
                },
            },
            out: {
                ok: true,
                account: {
                    id: 'shop-a1',
                    path0: 'Income',
                    path1: '',
                    path2: '',
                    org_id: 'o0',
                    oref: 'o0',
                    aref: 'o0/Income/Sales',
                    path: ['Income'],
                    name: 'Sales',
                    normal: 'credit',
                },
            },
        },
        {
            name: 'shop-a2',
            pattern: 'create:account',
            params: {
                account: {
                    id$: 'shop-a2',
                    oref: 'o0',
                    path: 'Asset',
                    name: 'Office',
                    normal: 'debit',
                },
            },
            out: {
                ok: true,
                account: {
                    id: 'shop-a2',
                    path0: 'Asset',
                    path1: '',
                    path2: '',
                    org_id: 'o0',
                    oref: 'o0',
                    aref: 'o0/Asset/Office',
                    path: ['Asset'],
                    name: 'Office',
                    normal: 'debit',
                },
            },
        },
        // Open a book
        {
            name: 'shop-b0',
            pattern: 'create:book',
            params: {
                book: {
                    id$: 'shop-b0',
                    oref: 'o0',
                    name: 'Q1',
                    start: 20220101,
                },
            },
            out: {
                ok: true,
                book: {
                    id: 'shop-b0',
                    org_id: 'o0',
                    oref: 'o0',
                    bref: 'o0/Q1/20220101',
                    name: 'Q1',
                    start: 20220101,
                    time: { kind: 'basic' },
                },
            },
        },
        {
            name: 'shop-ub0',
            pattern: 'update:book',
            params: {
                id: 'shop-b0',
                book: {
                    end: 20220331,
                    xbar: 2, // custom field
                },
            },
            out: {
                ok: true,
                book: {
                    id: 'shop-b0',
                    org_id: 'o0',
                    oref: 'o0',
                    bref: 'o0/Q1/20220101',
                    name: 'Q1',
                    start: 20220101,
                    end: 20220331,
                    time: { kind: 'basic' },
                    xbar: 2,
                },
            },
        },
        // Post journal entries
        {
            name: 'shop-e0',
            pattern: 'create:entry',
            params: {
                id: 'shop-e0',
                oref: 'o0',
                bref: 'o0/Q1/20220101',
                daref: 'o0/Asset/Cash',
                caref: 'o0/Income/Sales',
                val: 100,
                desc: 'Jan Sales',
                date: 20220131,
                custom: {
                    geo: 'EU',
                },
                entry: {
                    xrep: 'alice',
                },
            },
            out: {
                ok: true,
                credit: {
                    xrep: 'alice',
                    val: 100,
                    desc: 'Jan Sales',
                    kind: 'standard',
                    oref: 'o0',
                    org_id: 'o0',
                    bref: 'o0/Q1/20220101',
                    book_id: 'shop-b0',
                    custom: { geo: 'EU' },
                    baseval: -1,
                    basecur: '---',
                    baserate: 0,
                    date: 20220131,
                    credit_id: 'shop-a1',
                    caref: 'o0/Income/Sales',
                    id: 'shop-e0',
                },
                debit: {
                    xrep: 'alice',
                    val: 100,
                    desc: 'Jan Sales',
                    kind: 'standard',
                    oref: 'o0',
                    org_id: 'o0',
                    bref: 'o0/Q1/20220101',
                    book_id: 'shop-b0',
                    custom: { geo: 'EU' },
                    baseval: -1,
                    basecur: '---',
                    baserate: 0,
                    date: 20220131,
                    debit_id: 'shop-a0',
                    daref: 'o0/Asset/Cash',
                    id: 'shop-e0',
                },
            },
        },
        {
            name: 'shop-e1',
            pattern: 'create:entry',
            params: {
                id: 'shop-e1',
                oref: 'o0',
                bref: 'o0/Q1/20220101',
                daref: 'o0/Asset/Office',
                caref: 'o0/Asset/Cash',
                val: 20,
                desc: 'Buy desk',
                date: 20220202,
            },
            out: {
                ok: true,
                credit: {
                    val: 20,
                    desc: 'Buy desk',
                    kind: 'standard',
                    oref: 'o0',
                    org_id: 'o0',
                    bref: 'o0/Q1/20220101',
                    book_id: 'shop-b0',
                    custom: {},
                    baseval: -1,
                    basecur: '---',
                    baserate: 0,
                    date: 20220202,
                    credit_id: 'shop-a0',
                    caref: 'o0/Asset/Cash',
                    id: 'shop-e1',
                },
                debit: {
                    val: 20,
                    desc: 'Buy desk',
                    kind: 'standard',
                    oref: 'o0',
                    org_id: 'o0',
                    bref: 'o0/Q1/20220101',
                    book_id: 'shop-b0',
                    custom: {},
                    baseval: -1,
                    basecur: '---',
                    baserate: 0,
                    date: 20220202,
                    debit_id: 'shop-a2',
                    daref: 'o0/Asset/Office',
                    id: 'shop-e1',
                },
            },
        },
        {
            // print: true,
            name: 'shop-le0',
            pattern: 'list:entry',
            params: {
                oref: 'o0',
                bref: 'o0/Q1/20220101',
            },
            out: {
                ok: true,
                creditTotal: 120,
                debitTotal: 120,
                credits: [
                    {
                        val: 100,
                        desc: 'Jan Sales',
                        caref: 'o0/Income/Sales',
                        id: 'shop-e0',
                    },
                    {
                        val: 20,
                        desc: 'Buy desk',
                        caref: 'o0/Asset/Cash',
                        id: 'shop-e1',
                    },
                ],
                debits: [
                    {
                        val: 100,
                        desc: 'Jan Sales',
                        daref: 'o0/Asset/Cash',
                        id: 'shop-e0',
                    },
                    {
                        val: 20,
                        desc: 'Buy desk',
                        daref: 'o0/Asset/Office',
                        id: 'shop-e1',
                    },
                ],
                cq: { oref: 'o0', book_id: 'shop-b0' },
                dq: { oref: 'o0', book_id: 'shop-b0' },
            },
        },
        {
            // print: true,
            name: 'shop-le1',
            pattern: 'list:entry',
            params: {
                id: 'shop-e1',
                oref: 'o0',
                bref: 'o0/Q1/20220101',
                aref: 'o0/Asset/Cash',
            },
            out: {
                ok: true,
                creditTotal: 20,
                debitTotal: 100,
                balance: 80,
                credits: [
                    {
                        val: 20,
                        desc: 'Buy desk',
                        kind: 'standard',
                        oref: 'o0',
                        org_id: 'o0',
                        bref: 'o0/Q1/20220101',
                        book_id: 'shop-b0',
                        custom: {},
                        baseval: -1,
                        basecur: '---',
                        baserate: 0,
                        credit_id: 'shop-a0',
                        caref: 'o0/Asset/Cash',
                        id: 'shop-e1',
                    },
                ],
                debits: [
                    {
                        xrep: 'alice',
                        val: 100,
                        desc: 'Jan Sales',
                        kind: 'standard',
                        oref: 'o0',
                        org_id: 'o0',
                        bref: 'o0/Q1/20220101',
                        book_id: 'shop-b0',
                        custom: { geo: 'EU' },
                        baseval: -1,
                        basecur: '---',
                        baserate: 0,
                        debit_id: 'shop-a0',
                        daref: 'o0/Asset/Cash',
                        id: 'shop-e0',
                    },
                ],
                cq: { oref: 'o0', book_id: 'shop-b0', credit_id: 'shop-a0' },
                dq: { oref: 'o0', book_id: 'shop-b0', debit_id: 'shop-a0' },
            },
        },
        // Balance
        {
            name: 'shop-le0',
            pattern: 'balance:account',
            params: {
                id: 'shop-e1',
                oref: 'o0',
                bref: 'o0/Q1/20220101',
                aref: 'o0/Asset/Cash',
            },
            out: {
                ok: true,
                account_id: 'shop-a0',
                aref: 'o0/Asset/Cash',
                book_id: 'shop-b0',
                bref: 'o0/Q1/20220101',
                start: 20220101,
                end: 20220331,
                creditTotal: 20,
                debitTotal: 100,
                creditCount: 1,
                debitCount: 1,
                normal: 'debit',
                balance: 80,
            },
        },
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
            name: 'shop-add-q2-entry',
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
            name: 'shop-add-q2-entry',
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
            name: 'shop-add-q2-entry',
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
            name: 'shop-b1',
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
        // Export Cash Q1 o0 Account
        {
            name: 'export-cash-q1-acc',
            pattern: 'export:account,format:csv',
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
                content: '# Cash - Q1 - o0\n' +
                    'Date,Description,Debit,Credit,Balance\n' +
                    '20220131,Jan Sales,100,,100\n' +
                    '20220202,Buy desk,,20,80\n' +
                    '20220331,Closing Balance,,80,0\n',
                entry_count: 3,
                final_balance: 0,
            },
        },
        // Export Sales Q1 o0 Account
        {
            name: 'export-sales-q1-acc',
            pattern: 'export:account,format:csv',
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
                content: '# Sales - Q1 - o0\n' +
                    'Date,Description,Debit,Credit,Balance\n' +
                    '20220131,Jan Sales,,100,100\n' +
                    '20220331,Closing Balance,100,,0\n',
                entry_count: 2,
                final_balance: 0,
            },
        },
        // Export Office Q1 o0 Account
        {
            name: 'export-office-q1-acc',
            pattern: 'export:account,format:csv',
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
                content: '# Office - Q1 - o0\n' +
                    'Date,Description,Debit,Credit,Balance\n' +
                    '20220202,Buy desk,20,,20\n' +
                    '20220215,Buy chair with credit card,50,,70\n' +
                    '20220331,Closing Balance,,70,0\n',
                entry_count: 3,
                final_balance: 0,
            },
        },
        // Export Credit Card Q1 o0 Account
        {
            name: 'export-credit-card-q1-acc',
            pattern: 'export:account,format:csv',
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
                content: '# Credit Card - Q1 - o0\n' +
                    'Date,Description,Debit,Credit,Balance\n' +
                    '20220215,Buy chair with credit card,,50,50\n' +
                    '20220331,Closing Balance,50,,0\n',
                entry_count: 2,
                final_balance: 0,
            },
        },
        // Export Cash Q2 o0 Account
        {
            name: 'export-cash-q2-acc',
            pattern: 'export:account,format:csv',
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
                content: '# Cash - Q2 - o0\n' +
                    'Date,Description,Debit,Credit,Balance\n' +
                    '20220401,Opening Balance,80,,80\n' +
                    '20220515,Q2 Sales,200,,280\n' +
                    '20220630,Closing Balance,,280,0\n',
                entry_count: 3,
                final_balance: 0,
            },
        },
        // Export Sales Q2 o0 Account
        {
            name: 'export-sales-q2-acc',
            pattern: 'export:account,format:csv',
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
                content: '# Sales - Q2 - o0\n' +
                    'Date,Description,Debit,Credit,Balance\n' +
                    '20220401,Opening Balance,,100,100\n' +
                    '20220515,Q2 Sales,,200,300\n' +
                    '20220630,Closing Balance,300,,0\n',
                entry_count: 3,
                final_balance: 0,
            },
        },
        // Export Office Q2 o0 Account
        {
            name: 'export-office-q2-acc',
            pattern: 'export:account,format:csv',
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
                content: '# Office - Q2 - o0\n' +
                    'Date,Description,Debit,Credit,Balance\n' +
                    '20220401,Opening Balance,70,,70\n' +
                    '20220630,Closing Balance,,70,0\n',
                entry_count: 2,
                final_balance: 0,
            },
        },
        // Export Credit Card Q2 o0 Account
        {
            name: 'export-credit-card-q2-acc',
            pattern: 'export:account,format:csv',
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
                content: '# Credit Card - Q2 - o0\n' +
                    'Date,Description,Debit,Credit,Balance\n' +
                    '20220401,Opening Balance,,50,50\n' +
                    '20220630,Closing Balance,50,,0\n',
                entry_count: 2,
                final_balance: 0,
            },
        },
        // Export Cash Q3 o0 Account
        {
            name: 'export-cash-q3-acc',
            pattern: 'export:account,format:csv',
            params: {
                aref: 'o0/Asset/Cash',
                bref: 'o0/Q3/20220701',
            },
            out: {
                ok: true,
                account_id: 'shop-a0',
                aref: 'o0/Asset/Cash',
                book_id: 'shop-b2',
                bref: 'o0/Q3/20220701',
                content: '# Cash - Q3 - o0\n' +
                    'Date,Description,Debit,Credit,Balance\n' +
                    '20220701,Opening Balance,280,,280\n',
                entry_count: 1,
                final_balance: 280,
                closing_balance: 0,
            },
        },
        // Export Sales Q3 o0 Account
        {
            name: 'export-sales-q3-acc',
            pattern: 'export:account,format:csv',
            params: {
                aref: 'o0/Income/Sales',
                bref: 'o0/Q3/20220701',
            },
            out: {
                ok: true,
                account_id: 'shop-a1',
                aref: 'o0/Income/Sales',
                book_id: 'shop-b2',
                bref: 'o0/Q3/20220701',
                content: '# Sales - Q3 - o0\n' +
                    'Date,Description,Debit,Credit,Balance\n' +
                    '20220701,Opening Balance,,300,300\n',
                entry_count: 1,
                final_balance: 300,
            },
        },
        // Export Office Q3 o0 Account
        {
            name: 'export-office-q3-acc',
            pattern: 'export:account,format:csv',
            params: {
                aref: 'o0/Asset/Office',
                bref: 'o0/Q3/20220701',
            },
            out: {
                ok: true,
                account_id: 'shop-a2',
                aref: 'o0/Asset/Office',
                book_id: 'shop-b2',
                bref: 'o0/Q3/20220701',
                content: '# Office - Q3 - o0\n' +
                    'Date,Description,Debit,Credit,Balance\n' +
                    '20220701,Opening Balance,70,,70\n',
                entry_count: 1,
                final_balance: 70,
            },
        },
        // Export Credit Card Q3 o0 Account
        {
            name: 'export-credit-card-q3-acc',
            pattern: 'export:account,format:csv',
            params: {
                aref: 'o0/Liability/Credit Card',
                bref: 'o0/Q3/20220701',
            },
            out: {
                ok: true,
                account_id: 'shop-a3',
                aref: 'o0/Liability/Credit Card',
                book_id: 'shop-b2',
                bref: 'o0/Q3/20220701',
                content: '# Credit Card - Q3 - o0\n' +
                    'Date,Description,Debit,Credit,Balance\n' +
                    '20220701,Opening Balance,,50,50\n',
                entry_count: 1,
                final_balance: 50,
            },
        },
        // Export Book Q1 o0
        {
            name: 'export-book-q1-o0',
            pattern: 'export:book,format:csv',
            params: {
                bref: 'o0/Q1/20220101',
            },
            out: {
                book_id: 'shop-b0',
                bref: 'o0/Q1/20220101',
                book_name: 'Q1',
                total_accounts: 4,
                successful_exports: 4,
                failed_exports: 0,
                summary: {
                    ok: true,
                    content: '# Book Summary: Q1\n' +
                        '# Organization: o0\n' +
                        '# Period: 20220101 to 20220331\n' +
                        '\n' +
                        'Account,Normal Balance,Type,Closing Balance,Entry Count\n' +
                        'Sales,credit,Income,100,2\n' +
                        'Cash,debit,Asset,80,3\n' +
                        'Credit Card,credit,Liability,50,2\n' +
                        'Office,debit,Asset,70,3\n',
                },
            },
        },
        // Export Book Q2 o0
        {
            name: 'export-book-q2-o0',
            pattern: 'export:book,format:csv',
            params: {
                bref: 'o0/Q2/20220401',
            },
            out: {
                ok: true,
                book_id: 'shop-b1',
                bref: 'o0/Q2/20220401',
                book_name: 'Q2',
                total_accounts: 4,
                successful_exports: 4,
                failed_exports: 0,
                summary: {
                    ok: true,
                    content: '# Book Summary: Q2\n' +
                        '# Organization: o0\n' +
                        '# Period: 20220401 to 20220630\n' +
                        '\n' +
                        'Account,Normal Balance,Type,Closing Balance,Entry Count\n' +
                        'Credit Card,credit,Liability,50,2\n' +
                        'Sales,credit,Income,300,3\n' +
                        'Cash,debit,Asset,280,3\n' +
                        'Office,debit,Asset,70,2\n',
                },
            },
        },
        // Export Book Q3 o0
        {
            name: 'export-book-q3-o0',
            pattern: 'export:book,format:csv',
            params: {
                bref: 'o0/Q3/20220701',
            },
            out: {
                ok: true,
                book_id: 'shop-b2',
                bref: 'o0/Q3/20220701',
                book_name: 'Q3',
                total_accounts: 4,
                successful_exports: 4,
                failed_exports: 0,
                summary: {
                    ok: true,
                    content: '# Book Summary: Q3\n' +
                        '# Organization: o0\n' +
                        '# Period: 20220701 to 20220930\n' +
                        '\n' +
                        'Account,Normal Balance,Type,Total Balance,Entry Count\n' +
                        'Credit Card,credit,Liability,50,1\n' +
                        'Sales,credit,Income,300,1\n' +
                        'Cash,debit,Asset,280,1\n' +
                        'Office,debit,Asset,70,1\n',
                },
            },
        },
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
        // Edge Cases for Account Retrieval
        // Test get account that doesn't exist
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
        // Test get account by id
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
        // Test get account by account_id
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
        // Test list accounts with org filter
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
        // Test list all accounts (no filter)
        {
            name: 'test-list-all-accounts',
            pattern: 'list:account',
            params: {},
            out: {
                ok: true,
                q: {},
            },
        },
        // Test update account that doesn't exist
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
        // Test update account with no update data
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
        // Edge Cases for Book Creation
        // Test creating book with missing book object
        {
            name: 'test-missing-book',
            pattern: 'create:book',
            params: {},
            out: {
                ok: false,
                why: 'no-book',
            },
        },
        // Test creating book with no start date
        {
            name: 'test-no-start-book',
            pattern: 'create:book',
            params: {
                book: {
                    oref: 'o0',
                    name: 'Test Period',
                },
            },
            out: {
                ok: false,
                why: 'no-start',
            },
        },
        // Test creating book with no org
        {
            name: 'test-no-org-book',
            pattern: 'create:book',
            params: {
                book: {
                    name: 'Test Period',
                    start: 20230101,
                },
            },
            out: {
                ok: false,
                why: 'no-org',
            },
        },
        // Test creating book with no name
        {
            name: 'test-no-name-book',
            pattern: 'create:book',
            params: {
                book: {
                    oref: 'o0',
                    start: 20230101,
                },
            },
            out: {
                ok: false,
                why: 'no-name',
            },
        },
        // Test creating book with custom time spec
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
        // Edge Cases for Book Retrieval
        // Test get book that doesn't exist
        {
            name: 'test-get-nonexistent-book',
            pattern: 'get:book',
            params: {
                bref: 'o0/NonExistent/20230101',
            },
            out: {
                ok: false,
                why: 'book-not-found',
            },
        },
        // Test get book by id
        {
            name: 'test-get-book-by-id',
            pattern: 'get:book',
            params: {
                id: 'shop-b0',
            },
            out: {
                ok: true,
                book: {
                    id: 'shop-b0',
                    bref: 'o0/Q1/20220101',
                },
            },
        },
        // Test list books with org filter
        {
            name: 'test-list-books-org',
            pattern: 'list:book',
            params: {
                oref: 'o0',
            },
            out: {
                ok: true,
                q: { org_id: 'o0' },
                list: [
                    {
                        org_id: 'o0',
                        oref: 'o0',
                        bref: 'o0/Q1/20220101',
                        name: 'Q1',
                        start: 20220101,
                        end: 20220331,
                        time: { kind: 'basic' },
                        id: 'shop-b0',
                        xbar: 2,
                        closed: true
                    },
                    {
                        org_id: 'o0',
                        oref: 'o0',
                        bref: 'o0/Q2/20220401',
                        name: 'Q2',
                        start: 20220401,
                        end: 20220630,
                        time: { kind: 'basic' },
                        id: 'shop-b1',
                        closed: true
                    },
                    {
                        org_id: 'o0',
                        oref: 'o0',
                        bref: 'o0/Q3/20220701',
                        name: 'Q3',
                        start: 20220701,
                        end: 20220930,
                        time: { kind: 'basic' },
                        id: 'shop-b2'
                    },
                    {
                        org_id: 'o0',
                        oref: 'o0',
                        bref: 'o0/Jan 2023/20230101',
                        name: 'Jan 2023',
                        start: 20230101,
                        end: 20230131,
                        time: { kind: 'utc', timezone: 'America/New_York' },
                        id: 'test-time-book'
                    }
                ]
            },
        },
        // Test update book that doesn't exist
        {
            name: 'test-update-nonexistent-book',
            pattern: 'update:book',
            params: {
                bref: 'o0/NonExistent/20230101',
                book: {
                    end: 20230331,
                },
            },
            out: {
                ok: false,
                why: 'book-not-found',
            },
        },
        // Test update book with no update data
        {
            name: 'test-update-book-no-data',
            pattern: 'update:book',
            params: {
                id: 'shop-b0',
            },
            out: {
                ok: false,
                why: 'no-book-update',
            },
        },
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
        // // Test creating entry with nonexistent debit account
        // {
        //   name: 'test-entry-nonexistent-debit',
        //   pattern: 'create:entry',
        //   params: {
        //     id: 'test-bad-debit',
        //     oref: 'o0',
        //     bref: 'o0/Q1/20220101',
        //     daref: 'o0/Asset/NonExistent',
        //     caref: 'o0/Income/Sales',
        //     val: 100,
        //     desc: 'Test',
        //     date: 20220115,
        //   },
        //   out: {
        //     ok: false,
        //     why: 'debit-account-not-found',
        //   },
        // },
        //
        // // Test creating entry with nonexistent credit account
        // {
        //   name: 'test-entry-nonexistent-credit',
        //   pattern: 'create:entry',
        //   params: {
        //     id: 'test-bad-credit',
        //     oref: 'o0',
        //     bref: 'o0/Q1/20220101',
        //     daref: 'o0/Asset/Cash',
        //     caref: 'o0/Income/NonExistent',
        //     val: 100,
        //     desc: 'Test',
        //     date: 20220115,
        //   },
        //   out: {
        //     ok: false,
        //     why: 'credit-account-not-found',
        //   },
        // },
        //
        // // Test creating entry with no value
        // {
        //   name: 'test-entry-no-val',
        //   pattern: 'create:entry',
        //   params: {
        //     id: 'test-no-val',
        //     oref: 'o0',
        //     bref: 'o0/Q1/20220101',
        //     daref: 'o0/Asset/Cash',
        //     caref: 'o0/Income/Sales',
        //     desc: 'Test',
        //     date: 20220115,
        //   },
        //   out: {
        //     ok: false,
        //     why: 'no-val',
        //   },
        // },
        //
        // // Test creating entry with no description
        // {
        //   name: 'test-entry-no-desc',
        //   pattern: 'create:entry',
        //   params: {
        //     id: 'test-no-desc',
        //     oref: 'o0',
        //     bref: 'o0/Q1/20220101',
        //     daref: 'o0/Asset/Cash',
        //     caref: 'o0/Income/Sales',
        //     val: 100,
        //     date: 20220115,
        //   },
        //   out: {
        //     ok: false,
        //     why: 'no-desc',
        //   },
        // },
        //
        // // Test creating entry with empty description
        // {
        //   name: 'test-entry-empty-desc',
        //   pattern: 'create:entry',
        //   params: {
        //     id: 'test-empty-desc',
        //     oref: 'o0',
        //     bref: 'o0/Q1/20220101',
        //     daref: 'o0/Asset/Cash',
        //     caref: 'o0/Income/Sales',
        //     val: 100,
        //     desc: '',
        //     date: 20220115,
        //   },
        //   out: {
        //     ok: false,
        //     why: 'no-desc',
        //   },
        // },
        //
        // // Test creating entry with no date
        // {
        //   name: 'test-entry-no-date',
        //   pattern: 'create:entry',
        //   params: {
        //     id: 'test-no-date',
        //     oref: 'o0',
        //     bref: 'o0/Q1/20220101',
        //     daref: 'o0/Asset/Cash',
        //     caref: 'o0/Income/Sales',
        //     val: 100,
        //     desc: 'Test',
        //   },
        //   out: {
        //     ok: false,
        //     why: 'no-date',
        //   },
        // },
        //
        // // Test creating entry with base currency info
        // {
        //   name: 'test-entry-base-currency',
        //   pattern: 'create:entry',
        //   params: {
        //     id: 'test-base-cur',
        //     oref: 'o0',
        //     bref: 'o0/Q3/20220701',
        //     daref: 'o0/Asset/Cash',
        //     caref: 'o0/Income/Sales',
        //     val: 100,
        //     desc: 'Sale in EUR',
        //     date: 20220715,
        //     baseval: 85,
        //     basecur: 'EUR',
        //     baserate: 1.18,
        //   },
        //   out: {
        //     ok: true,
        //     credit: {
        //       val: 100,
        //       desc: 'Sale in EUR',
        //       baseval: 85,
        //       basecur: 'EUR',
        //       baserate: 1.18,
        //       date: 20220715,
        //     },
        //     debit: {
        //       val: 100,
        //       desc: 'Sale in EUR',
        //       baseval: 85,
        //       basecur: 'EUR',
        //       baserate: 1.18,
        //       date: 20220715,
        //     },
        //   },
        // },
        //
        // // Test creating entry with custom kind
        // {
        //   name: 'test-entry-custom-kind',
        //   pattern: 'create:entry',
        //   params: {
        //     id: 'test-custom-kind',
        //     oref: 'o0',
        //     bref: 'o0/Q3/20220701',
        //     daref: 'o0/Asset/Cash',
        //     caref: 'o0/Income/Sales',
        //     val: 50,
        //     desc: 'Adjustment',
        //     date: 20220720,
        //     kind: 'adjustment',
        //   },
        //   out: {
        //     ok: true,
        //     credit: {
        //       val: 50,
        //       desc: 'Adjustment',
        //       kind: 'adjustment',
        //       date: 20220720,
        //     },
        //     debit: {
        //       val: 50,
        //       desc: 'Adjustment',
        //       kind: 'adjustment',
        //       date: 20220720,
        //     },
        //   },
        // },
        //
        // // Test list entries with no oref (should fail)
        // {
        //   name: 'test-list-entry-no-oref',
        //   pattern: 'list:entry',
        //   params: {
        //     bref: 'o0/Q1/20220101',
        //   },
        //   out: {
        //     ok: false,
        //     why: 'org-required',
        //   },
        // },
        //
        // // Test list entries with credit only
        // {
        //   name: 'test-list-entry-credit-only',
        //   pattern: 'list:entry',
        //   params: {
        //     oref: 'o0',
        //     bref: 'o0/Q1/20220101',
        //     aref: 'o0/Income/Sales',
        //     credit: true,
        //     debit: false,
        //   },
        //   out: {
        //     ok: true,
        //     credits: [
        //       {
        //         val: 100,
        //         desc: 'Jan Sales',
        //         caref: 'o0/Income/Sales',
        //       },
        //     ],
        //     debits: [],
        //   },
        // },
        //
        // // Test list entries with debit only
        // {
        //   name: 'test-list-entry-debit-only',
        //   pattern: 'list:entry',
        //   params: {
        //     oref: 'o0',
        //     bref: 'o0/Q1/20220101',
        //     aref: 'o0/Asset/Cash',
        //     credit: false,
        //     debit: true,
        //   },
        //   out: {
        //     ok: true,
        //     credits: [],
        //     debits: [
        //       {
        //         val: 100,
        //         desc: 'Jan Sales',
        //         daref: 'o0/Asset/Cash',
        //       },
        //     ],
        //   },
        // },
        //
        // // Edge Cases for Balance Account
        //
        // // Test balance for nonexistent account
        // {
        //   name: 'test-balance-nonexistent-account',
        //   pattern: 'balance:account',
        //   params: {
        //     aref: 'o0/Asset/NonExistent',
        //     bref: 'o0/Q1/20220101',
        //   },
        //   out: {
        //     ok: false,
        //     why: 'account-not-found',
        //   },
        // },
        //
        // // Test balance for nonexistent book
        // {
        //   name: 'test-balance-nonexistent-book',
        //   pattern: 'balance:account',
        //   params: {
        //     aref: 'o0/Asset/Cash',
        //     bref: 'o0/NonExistent/20230101',
        //   },
        //   out: {
        //     ok: false,
        //     why: 'book-not-found',
        //   },
        // },
        //
        // // Test balance for account with zero balance
        // {
        //   name: 'test-balance-zero-account',
        //   pattern: 'balance:account',
        //   params: {
        //     aref: 'o0/Asset/Cash',
        //     bref: 'o0/Q1/20220101',
        //   },
        //   out: {
        //     ok: true,
        //     account_id: 'shop-a0',
        //     aref: 'o0/Asset/Cash',
        //     balance: 0,
        //   },
        // },
        //
        // // Edge Cases for Close Account
        //
        // // Test closing nonexistent account
        // {
        //   name: 'test-close-nonexistent-account',
        //   pattern: 'close:account',
        //   params: {
        //     aref: 'o0/Asset/NonExistent',
        //     bref: 'o0/Q3/20220701',
        //     end: 20220930,
        //   },
        //   out: {
        //     ok: false,
        //     why: 'account-not-found',
        //   },
        // },
        //
        // // Test closing account in nonexistent book
        // {
        //   name: 'test-close-account-nonexistent-book',
        //   pattern: 'close:account',
        //   params: {
        //     aref: 'o0/Asset/Cash',
        //     bref: 'o0/NonExistent/20230101',
        //     end: 20230331,
        //   },
        //   out: {
        //     ok: false,
        //     why: 'book-not-found',
        //   },
        // },
        //
        // // Test closing Opening Balance equity account (should fail)
        // {
        //   name: 'test-close-opening-balance-account',
        //   pattern: 'close:account',
        //   params: {
        //     aref: 'o0/Equity/Opening Balance',
        //     bref: 'o0/Q3/20220701',
        //     end: 20220930,
        //   },
        //   out: {
        //     ok: false,
        //     why: 'cannot-close-opening-balance-account',
        //   },
        // },
        //
        // // Test closing account with zero balance
        // {
        //   name: 'test-close-zero-balance-account',
        //   pattern: 'close:account',
        //   params: {
        //     aref: 'o0/Income/Sales',
        //     bref: 'o0/Q3/20220701',
        //     end: 20220930,
        //   },
        //   out: {
        //     ok: true,
        //     aref: 'o0/Income/Sales',
        //     original_balance: 0,
        //     closing_balance: 0,
        //     opening_balance: 0,
        //     opening_balance_aref: null,
        //     closing_entries: [],
        //     opening_entries: [],
        //   },
        // },
        //
        // // Test closing account with nonexistent target book
        // {
        //   name: 'test-close-account-bad-target',
        //   pattern: 'close:account',
        //   params: {
        //     aref: 'o0/Asset/Cash',
        //     bref: 'o0/Q3/20220701',
        //     target_bref: 'o0/NonExistent/20230101',
        //     end: 20220930,
        //   },
        //   out: {
        //     ok: false,
        //     why: 'target-book-not-found',
        //   },
        // },
        //
        // // Edge Cases for Export Account CSV
        //
        // // Test export for nonexistent account
        // {
        //   name: 'test-export-nonexistent-account',
        //   pattern: 'export:account,format:csv',
        //   params: {
        //     aref: 'o0/Asset/NonExistent',
        //     bref: 'o0/Q1/20220101',
        //   },
        //   out: {
        //     ok: false,
        //     why: 'account-not-found',
        //   },
        // },
        //
        // // Test export for nonexistent book
        // {
        //   name: 'test-export-account-nonexistent-book',
        //   pattern: 'export:account,format:csv',
        //   params: {
        //     aref: 'o0/Asset/Cash',
        //     bref: 'o0/NonExistent/20230101',
        //   },
        //   out: {
        //     ok: false,
        //     why: 'bookEnt-not-found',
        //   },
        // },
        //
        // // Edge Cases for Close Book
        //
        // // Test closing nonexistent book
        // {
        //   name: 'test-close-nonexistent-book',
        //   pattern: 'close:book',
        //   params: {
        //     bref: 'o0/NonExistent/20230101',
        //     end: 20230331,
        //   },
        //   out: {
        //     ok: false,
        //     why: 'book-not-found',
        //   },
        // },
        //
        // // Test closing already closed book
        // {
        //   name: 'test-close-already-closed-book',
        //   pattern: 'close:book',
        //   params: {
        //     bref: 'o0/Q1/20220101',
        //     end: 20220331,
        //   },
        //   out: {
        //     ok: false,
        //     why: 'book-already-closed',
        //   },
        // },
        //
        // // Test closing book with nonexistent target
        // {
        //   name: 'test-close-book-bad-target',
        //   pattern: 'close:book',
        //   params: {
        //     bref: 'o0/Q3/20220701',
        //     target_bref: 'o0/NonExistent/20230101',
        //     end: 20220930,
        //   },
        //   out: {
        //     ok: false,
        //     why: 'target-book-not-found',
        //   },
        // },
        //
        // // Create empty book for testing
        // {
        //   name: 'test-empty-book',
        //   pattern: 'create:book',
        //   params: {
        //     book: {
        //       id$: 'empty-book',
        //       oref: 'o0',
        //       name: 'Empty',
        //       start: 20231001,
        //       end: 20231231,
        //     },
        //   },
        //   out: {
        //     ok: true,
        //     book: {
        //       id: 'empty-book',
        //       bref: 'o0/Empty/20231001',
        //     },
        //   },
        // },
        //
        // // Test closing empty book
        // {
        //   name: 'test-close-empty-book',
        //   pattern: 'close:book',
        //   params: {
        //     bref: 'o0/Empty/20231001',
        //     end: 20231231,
        //   },
        //   out: {
        //     ok: true,
        //     book_id: 'empty-book',
        //     bref: 'o0/Empty/20231001',
        //     note: 'No account entries in this book',
        //     summary: {
        //       total_accounts: 0,
        //       successful_closures: 0,
        //       failed_closures: 0,
        //       total_balance_transferred: 0,
        //       all_accounts_zeroed: true,
        //     },
        //     closure_successful: true,
        //   },
        // },
        //
        // // Edge Cases for Export Book CSV
        //
        // // Test export for nonexistent book
        // {
        //   name: 'test-export-nonexistent-book',
        //   pattern: 'export:book,format:csv',
        //   params: {
        //     bref: 'o0/NonExistent/20230101',
        //   },
        //   out: {
        //     ok: false,
        //     why: 'book-not-found',
        //   },
        // },
        //
        // // Test export for empty book
        // {
        //   name: 'test-export-empty-book',
        //   pattern: 'export:book,format:csv',
        //   params: {
        //     bref: 'o0/Empty/20231001',
        //   },
        //   out: {
        //     ok: true,
        //     book_id: 'empty-book',
        //     bref: 'o0/Empty/20231001',
        //     note: 'No accounts found in this book',
        //     total_accounts: 0,
        //     successful_exports: 0,
        //     failed_exports: 0,
        //     exports: [],
        //   },
        // },
        //
        // // Test Negative Balance Scenarios
        //
        // // Create expense account for negative balance testing
        // {
        //   name: 'test-expense-account',
        //   pattern: 'create:account',
        //   params: {
        //     account: {
        //       id$: 'test-expense',
        //       oref: 'o0',
        //       path: 'Expense',
        //       name: 'Utilities',
        //       normal: 'debit',
        //     },
        //   },
        //   out: {
        //     ok: true,
        //     account: {
        //       id: 'test-expense',
        //       aref: 'o0/Expense/Utilities',
        //       normal: 'debit',
        //     },
        //   },
        // },
        //
        // // Create entry that gives expense a credit balance (negative for debit normal)
        // {
        //   name: 'test-negative-balance-entry',
        //   pattern: 'create:entry',
        //   params: {
        //     id: 'test-negative',
        //     oref: 'o0',
        //     bref: 'o0/Q3/20220701',
        //     daref: 'o0/Asset/Cash',
        //     caref: 'o0/Expense/Utilities',
        //     val: 100,
        //     desc: 'Refund from utility company',
        //     date: 20220715,
        //   },
        //   out: {
        //     ok: true,
        //     credit: {
        //       val: 100,
        //       desc: 'Refund from utility company',
        //     },
        //     debit: {
        //       val: 100,
        //       desc: 'Refund from utility company',
        //     },
        //   },
        // },
        //
        // // Balance the expense account with negative balance
        // {
        //   name: 'test-negative-balance',
        //   pattern: 'balance:account',
        //   params: {
        //     aref: 'o0/Expense/Utilities',
        //     bref: 'o0/Q3/20220701',
        //   },
        //   out: {
        //     ok: true,
        //     account_id: 'test-expense',
        //     aref: 'o0/Expense/Utilities',
        //     creditTotal: 100,
        //     debitTotal: 0,
        //     balance: -100, // Negative balance for debit normal account
        //     normal: 'debit',
        //   },
        // },
        //
        // // Multi-path Account Testing
        //
        // // Create account with 3-level path
        // {
        //   name: 'test-deep-path-account',
        //   pattern: 'create:account',
        //   params: {
        //     account: {
        //       id$: 'test-deep-path',
        //       oref: 'o0',
        //       path: ['Asset', 'Current', 'Cash'],
        //       name: 'Petty Cash',
        //       normal: 'debit',
        //     },
        //   },
        //   out: {
        //     ok: true,
        //     account: {
        //       id: 'test-deep-path',
        //       path0: 'Asset',
        //       path1: 'Current',
        //       path2: 'Cash',
        //       aref: 'o0/Asset/Current/Cash/Petty Cash',
        //       path: ['Asset', 'Current', 'Cash'],
        //       name: 'Petty Cash',
        //     },
        //   },
        // },
        //
        // // Test Complex Entry Scenarios
        //
        // // Create revenue account for testing
        // {
        //   name: 'test-revenue-account',
        //   pattern: 'create:account',
        //   params: {
        //     account: {
        //       id$: 'test-revenue',
        //       oref: 'o0',
        //       path: 'Income',
        //       name: 'Service Revenue',
        //       normal: 'credit',
        //     },
        //   },
        //   out: {
        //     ok: true,
        //     account: {
        //       id: 'test-revenue',
        //       aref: 'o0/Income/Service Revenue',
        //       normal: 'credit',
        //     },
        //   },
        // },
        //
        // // Test entry with debit/credit object format
        // {
        //   name: 'test-entry-object-format',
        //   pattern: 'create:entry',
        //   params: {
        //     id: 'test-obj-format',
        //     oref: 'o0',
        //     bref: 'o0/Q3/20220701',
        //     debit: {
        //       aref: 'o0/Asset/Cash',
        //     },
        //     credit: {
        //       aref: 'o0/Income/Service Revenue',
        //     },
        //     val: 500,
        //     desc: 'Consulting services',
        //     date: 20220801,
        //   },
        //   out: {
        //     ok: true,
        //     credit: {
        //       val: 500,
        //       desc: 'Consulting services',
        //       caref: 'o0/Income/Service Revenue',
        //     },
        //     debit: {
        //       val: 500,
        //       desc: 'Consulting services',
        //       daref: 'o0/Asset/Cash',
        //     },
        //   },
        // },
        //
        // // Test Large Value Entry
        // {
        //   name: 'test-large-value-entry',
        //   pattern: 'create:entry',
        //   params: {
        //     id: 'test-large-val',
        //     oref: 'o0',
        //     bref: 'o0/Q3/20220701',
        //     daref: 'o0/Asset/Cash',
        //     caref: 'o0/Income/Service Revenue',
        //     val: 999999999.99,
        //     desc: 'Large transaction',
        //     date: 20220815,
        //   },
        //   out: {
        //     ok: true,
        //     credit: {
        //       val: 999999999.99,
        //     },
        //     debit: {
        //       val: 999999999.99,
        //     },
        //   },
        // },
        //
        // // Test Small Value Entry
        // {
        //   name: 'test-small-value-entry',
        //   pattern: 'create:entry',
        //   params: {
        //     id: 'test-small-val',
        //     oref: 'o0',
        //     bref: 'o0/Q3/20220701',
        //     daref: 'o0/Asset/Cash',
        //     caref: 'o0/Income/Service Revenue',
        //     val: 0.01,
        //     desc: 'Penny transaction',
        //     date: 20220820,
        //   },
        //   out: {
        //     ok: true,
        //     credit: {
        //       val: 0.01,
        //     },
        //     debit: {
        //       val: 0.01,
        //     },
        //   },
        // },
    ],
};
//# sourceMappingURL=basic.messages.js.map