"use strict";
// Validation and edge case tests for ledger
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    print: false,
    pattern: 'biz:ledger',
    allow: { missing: true },
    calls: [
        // ===========================================
        // ACCOUNT VALIDATION TESTS
        // ===========================================
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
                    oref: 'v0',
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
                    org_id: 'v0',
                    oref: 'v0',
                    aref: 'v0/Asset/Current/Bank Account',
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
        // ===========================================
        // ACCOUNT RETRIEVAL EDGE CASES
        // ===========================================
        // Test get account that doesn't exist
        {
            name: 'test-get-nonexistent-account',
            pattern: 'get:account',
            params: {
                aref: 'v0/Asset/NonExistent',
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
                id: 'test-array-path',
            },
            out: {
                ok: true,
                account: {
                    id: 'test-array-path',
                },
            },
        },
        // Test get account by account_id
        {
            name: 'test-get-account-by-account-id',
            pattern: 'get:account',
            params: {
                account_id: 'test-org-id',
            },
            out: {
                ok: true,
                account: {
                    id: 'test-org-id',
                    aref: 'org001/Expense/Rent',
                },
            },
        },
        // Test list accounts with org filter
        {
            name: 'test-list-accounts-org',
            pattern: 'list:account',
            params: {
                org_id: 'v0',
            },
            out: {
                ok: true,
                q: { org_id: 'v0' },
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
                aref: 'v0/Asset/NonExistent',
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
                id: 'test-array-path',
            },
            out: {
                ok: false,
                why: 'no-account-update',
            },
        },
        // ===========================================
        // BOOK VALIDATION TESTS
        // ===========================================
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
                    oref: 'v0',
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
                    oref: 'v0',
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
                    oref: 'v0',
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
                    org_id: 'v0',
                    oref: 'v0',
                    bref: 'v0/Jan 2023/20230101',
                    name: 'Jan 2023',
                    start: 20230101,
                    end: 20230131,
                    time: { kind: 'utc', timezone: 'America/New_York' },
                },
            },
        },
        // ===========================================
        // BOOK RETRIEVAL EDGE CASES
        // ===========================================
        // Test get book that doesn't exist
        {
            name: 'test-get-nonexistent-book',
            pattern: 'get:book',
            params: {
                bref: 'v0/NonExistent/20230101',
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
                id: 'test-time-book',
            },
            out: {
                ok: true,
                book: {
                    id: 'test-time-book',
                    bref: 'v0/Jan 2023/20230101',
                },
            },
        },
        // Test list books with org filter
        {
            name: 'test-list-books-org',
            pattern: 'list:book',
            params: {
                oref: 'v0',
            },
            out: {
                ok: true,
                q: { org_id: 'v0' },
            },
        },
        // Test update book that doesn't exist
        {
            name: 'test-update-nonexistent-book',
            pattern: 'update:book',
            params: {
                bref: 'v0/NonExistent/20230101',
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
                id: 'test-time-book',
            },
            out: {
                ok: false,
                why: 'no-book-update',
            },
        },
        // ===========================================
        // ENTRY VALIDATION TESTS
        // ===========================================
        // Setup: Create accounts and book for entry tests
        {
            name: 'val-setup-cash',
            pattern: 'create:account',
            params: {
                account: {
                    id$: 'val-cash',
                    oref: 'v0',
                    path: 'Asset',
                    name: 'Cash',
                    normal: 'debit',
                },
            },
            out: {
                ok: true,
                account: {
                    id: 'val-cash',
                    aref: 'v0/Asset/Cash',
                },
            },
        },
        {
            name: 'val-setup-sales',
            pattern: 'create:account',
            params: {
                account: {
                    id$: 'val-sales',
                    oref: 'v0',
                    path: 'Income',
                    name: 'Sales',
                    normal: 'credit',
                },
            },
            out: {
                ok: true,
                account: {
                    id: 'val-sales',
                    aref: 'v0/Income/Sales',
                },
            },
        },
        // Test creating entry with nonexistent book
        {
            name: 'test-entry-nonexistent-book',
            pattern: 'create:entry',
            params: {
                id: 'test-bad-book',
                oref: 'v0',
                bref: 'v0/NonExistent/20230101',
                daref: 'v0/Asset/Cash',
                caref: 'v0/Income/Sales',
                val: 100,
                desc: 'Test',
                date: 20230115,
            },
            out: {
                ok: false,
                why: 'book-not-found',
            },
        },
        // Test creating entry with nonexistent debit account
        {
            name: 'test-entry-nonexistent-debit',
            pattern: 'create:entry',
            params: {
                id: 'test-bad-debit',
                oref: 'v0',
                bref: 'v0/Jan 2023/20230101',
                daref: 'v0/Asset/NonExistent',
                caref: 'v0/Income/Sales',
                val: 100,
                desc: 'Test',
                date: 20230115,
            },
            out: {
                ok: false,
                why: 'debit-account-not-found',
            },
        },
        // Test creating entry with nonexistent credit account
        {
            name: 'test-entry-nonexistent-credit',
            pattern: 'create:entry',
            params: {
                id: 'test-bad-credit',
                oref: 'v0',
                bref: 'v0/Jan 2023/20230101',
                daref: 'v0/Asset/Cash',
                caref: 'v0/Income/NonExistent',
                val: 100,
                desc: 'Test',
                date: 20230115,
            },
            out: {
                ok: false,
                why: 'credit-account-not-found',
            },
        },
        // Test creating entry with no value
        {
            name: 'test-entry-no-val',
            pattern: 'create:entry',
            params: {
                id: 'test-no-val',
                oref: 'v0',
                bref: 'v0/Jan 2023/20230101',
                daref: 'v0/Asset/Cash',
                caref: 'v0/Income/Sales',
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
                oref: 'v0',
                bref: 'v0/Jan 2023/20230101',
                daref: 'v0/Asset/Cash',
                caref: 'v0/Income/Sales',
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
                oref: 'v0',
                bref: 'v0/Jan 2023/20230101',
                daref: 'v0/Asset/Cash',
                caref: 'v0/Income/Sales',
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
                oref: 'v0',
                bref: 'v0/Jan 2023/20230101',
                daref: 'v0/Asset/Cash',
                caref: 'v0/Income/Sales',
                val: 100,
                desc: 'Test',
            },
            out: {
                ok: false,
                why: 'no-date',
            },
        },
        // Test list entries with no oref (should fail)
        {
            name: 'test-list-entry-no-oref',
            pattern: 'list:entry',
            params: {
                bref: 'v0/Jan 2023/20230101',
            },
            out: {
                ok: false,
                why: 'org-required',
            },
        },
        // ===========================================
        // BALANCE ACCOUNT EDGE CASES
        // ===========================================
        // Test balance for nonexistent account
        {
            name: 'test-balance-nonexistent-account',
            pattern: 'balance:account',
            params: {
                aref: 'v0/Asset/NonExistent',
                bref: 'v0/Jan 2023/20230101',
            },
            out: {
                ok: false,
                why: 'account-not-found',
            },
        },
        // Test balance for nonexistent book
        {
            name: 'test-balance-nonexistent-book',
            pattern: 'balance:account',
            params: {
                aref: 'v0/Asset/Cash',
                bref: 'v0/NonExistent/20230101',
            },
            out: {
                ok: false,
                why: 'book-not-found',
            },
        },
        // ===========================================
        // CLOSE ACCOUNT EDGE CASES
        // ===========================================
        // Test closing nonexistent account
        {
            name: 'test-close-nonexistent-account',
            pattern: 'close:account',
            params: {
                aref: 'v0/Asset/NonExistent',
                bref: 'v0/Jan 2023/20230101',
                end: 20230131,
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
                aref: 'v0/Asset/Cash',
                bref: 'v0/NonExistent/20230101',
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
                aref: 'v0/Income/Sales',
                bref: 'v0/Jan 2023/20230101',
                end: 20230131,
            },
            out: {
                ok: true,
                aref: 'v0/Income/Sales',
                original_balance: 0,
                closing_balance: 0,
                opening_balance: 0,
                opening_balance_aref: null,
                closing_entries: [],
                opening_entries: [],
            },
        },
        // Setup: Create target book for closing tests
        {
            name: 'val-setup-target-book',
            pattern: 'create:book',
            params: {
                book: {
                    id$: 'val-target-book',
                    oref: 'v0',
                    name: 'Feb 2023',
                    start: 20230201,
                    end: 20230228,
                },
            },
            out: {
                ok: true,
                book: {
                    id: 'val-target-book',
                    bref: 'v0/Feb 2023/20230201',
                },
            },
        },
        // Test closing account with nonexistent target book
        {
            name: 'test-close-account-bad-target',
            pattern: 'close:account',
            params: {
                aref: 'v0/Asset/Cash',
                bref: 'v0/Jan 2023/20230101',
                target_bref: 'v0/NonExistent/20230101',
                end: 20230131,
            },
            out: {
                ok: false,
                why: 'target-book-not-found',
            },
        },
        // ===========================================
        // EXPORT ACCOUNT EDGE CASES
        // ===========================================
        // Test export for nonexistent account
        {
            name: 'test-export-nonexistent-account',
            pattern: 'export:account,format:csv',
            params: {
                aref: 'v0/Asset/NonExistent',
                bref: 'v0/Jan 2023/20230101',
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
                aref: 'v0/Asset/Cash',
                bref: 'v0/NonExistent/20230101',
            },
            out: {
                ok: false,
                why: 'bookEnt-not-found',
            },
        },
        // ===========================================
        // CLOSE BOOK EDGE CASES
        // ===========================================
        // Test closing nonexistent book
        {
            name: 'test-close-nonexistent-book',
            pattern: 'close:book',
            params: {
                bref: 'v0/NonExistent/20230101',
                end: 20230331,
            },
            out: {
                ok: false,
                why: 'book-not-found',
            },
        },
        // Test closing book with nonexistent target
        {
            name: 'test-close-book-bad-target',
            pattern: 'close:book',
            params: {
                bref: 'v0/Jan 2023/20230101',
                target_bref: 'v0/NonExistent/20230101',
                end: 20230131,
            },
            out: {
                ok: false,
                why: 'target-book-not-found',
            },
        },
        // Create empty book for testing
        {
            name: 'test-empty-book',
            pattern: 'create:book',
            params: {
                book: {
                    id$: 'empty-book',
                    oref: 'v0',
                    name: 'Empty',
                    start: 20231001,
                    end: 20231231,
                },
            },
            out: {
                ok: true,
                book: {
                    id: 'empty-book',
                    bref: 'v0/Empty/20231001',
                },
            },
        },
        // Test closing empty book
        {
            name: 'test-close-empty-book',
            pattern: 'close:book',
            params: {
                bref: 'v0/Empty/20231001',
                end: 20231231,
            },
            out: {
                ok: true,
                book_id: 'empty-book',
                bref: 'v0/Empty/20231001',
                note: 'No account entries in this book',
                summary: {
                    total_accounts: 0,
                    successful_closures: 0,
                    failed_closures: 0,
                    total_balance_transferred: 0,
                    all_accounts_zeroed: true,
                },
                closure_successful: true,
            },
        },
        // Test closing already closed book
        {
            name: 'test-close-already-closed-book',
            pattern: 'close:book',
            params: {
                bref: 'v0/Empty/20231001',
                end: 20231231,
            },
            out: {
                ok: false,
                why: 'book-already-closed',
            },
        },
        // ===========================================
        // EXPORT BOOK EDGE CASES
        // ===========================================
        // Test export for nonexistent book
        {
            name: 'test-export-nonexistent-book',
            pattern: 'export:book,format:csv',
            params: {
                bref: 'v0/NonExistent/20230101',
            },
            out: {
                ok: false,
                why: 'book-not-found',
            },
        },
        // Test export for empty book
        {
            name: 'test-export-empty-book',
            pattern: 'export:book,format:csv',
            params: {
                bref: 'v0/Empty/20231001',
            },
            out: {
                ok: true,
                book_id: 'empty-book',
                bref: 'v0/Empty/20231001',
                note: 'No accounts found in this book',
                total_accounts: 0,
                successful_exports: 0,
                failed_exports: 0,
                exports: [],
            },
        },
        // ===========================================
        // SPECIAL ACCOUNT PATH TESTS
        // ===========================================
        // Create account with 3-level path
        {
            name: 'test-deep-path-account',
            pattern: 'create:account',
            params: {
                account: {
                    id$: 'test-deep-path',
                    oref: 'v0',
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
                    aref: 'v0/Asset/Current/Cash/Petty Cash',
                    path: ['Asset', 'Current', 'Cash'],
                    name: 'Petty Cash',
                },
            },
        },
    ],
};
//# sourceMappingURL=validation.messages.js.map