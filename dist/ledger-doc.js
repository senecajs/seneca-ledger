"use strict";
/* Copyright © 2026 Seneca Project Contributors, MIT License. */
Object.defineProperty(exports, "__esModule", { value: true });
const docs = {
    msgCreateAccount: {
        desc: 'Create a new ledger account within an organisation. An account is identified by its `oref` (organisation reference), `path` (e.g. `Asset` or `Asset/Current`), and `name`. The `normal` field must be either `"debit"` or `"credit"`.',
        reply_desc: {
            ok: '_true_ if account was created',
            account: 'the saved account entity',
            why: 'reason for failure when ok is _false_',
        },
    },
    msgGetAccount: {
        desc: 'Retrieve a single ledger account by its `aref` (account reference, in the form `oref/path/name`) or by `id`.',
        reply_desc: {
            ok: '_true_ if account was found',
            account: 'the account entity',
        },
    },
    msgListAccount: {
        desc: 'List all ledger accounts that belong to an organisation (`org_id` or `oref`). Optional filters include `path` to narrow results to a specific account category.',
        reply_desc: {
            ok: '_true_ on success',
            accounts: 'array of account entities',
        },
    },
    msgUpdateAccount: {
        desc: 'Update custom fields on an existing ledger account. Supply the `aref` (or `id`) to identify the account and an `account` object containing only the fields to change.',
        reply_desc: {
            ok: '_true_ if account was updated',
            account: 'the updated account entity',
        },
    },
    msgBalanceAccount: {
        desc: 'Calculate the current balance of a ledger account for a given accounting period (book). Sums all debit and credit entries in the book and returns the net balance according to the account\'s `normal` direction.',
        reply_desc: {
            ok: '_true_ on success',
            balance: 'net balance amount',
            account: 'the account entity',
            book: 'the book entity',
        },
    },
    msgExportAccountCSV: {
        desc: 'Export all entries for a single ledger account within a book as a CSV string. Each row represents one journal entry with columns for date, description, debit, credit, and running balance.',
        reply_desc: {
            ok: '_true_ on success',
            csv: 'CSV formatted string of entries',
        },
    },
    msgCloseAccount: {
        desc: 'Close a ledger account within a book. Calculates the closing balance and, when `target_bref` is supplied, creates an opening-balance entry in the target book so the balance carries forward to the next accounting period.',
        reply_desc: {
            ok: '_true_ on success',
            account: 'the closed account entity',
            close: 'closure details including closing balance',
        },
    },
    msgCreateBook: {
        desc: 'Create a new accounting period (book) for an organisation. A book is identified by its `oref`, `name`, and `start` date. Set `end: 0` (or omit `end`) for an open-ended period.',
        reply_desc: {
            ok: '_true_ if book was created',
            book: 'the saved book entity',
        },
    },
    msgGetBook: {
        desc: 'Retrieve a single accounting period (book) by its `bref` (book reference, in the form `oref/name/start`) or by `id`.',
        reply_desc: {
            ok: '_true_ if book was found',
            book: 'the book entity',
        },
    },
    msgListBook: {
        desc: 'List all accounting periods (books) that belong to an organisation (`oref`).',
        reply_desc: {
            ok: '_true_ on success',
            books: 'array of book entities',
        },
    },
    msgUpdateBook: {
        desc: 'Update fields on an existing accounting period (book). Supply the `bref` (or `id`) to identify the book and a `book` object containing the fields to change (e.g. `end` date or custom metadata).',
        reply_desc: {
            ok: '_true_ if book was updated',
            book: 'the updated book entity',
        },
    },
    msgExportBookCSV: {
        desc: 'Export a summary of all accounts in a book as a CSV string. Each row contains the account reference, name, normal direction, total debits, total credits, and net balance for the period.',
        reply_desc: {
            ok: '_true_ on success',
            csv: 'CSV formatted string of account summaries',
        },
    },
    msgCloseBook: {
        desc: 'Close an accounting period (book) by closing all its accounts and marking the book as closed. When `target_bref` is supplied, non-zero closing balances are carried forward as opening entries in the target book.',
        reply_desc: {
            ok: '_true_ on success',
            book: 'the closed book entity',
            accounts: 'array of closure details for each account',
        },
    },
    msgCreateEntry: {
        desc: 'Create a double-entry journal entry that debits one account and credits another within a given book. Both the debit account (`daref` or `debit`) and credit account (`caref` or `credit`) must exist. The entry `date` must fall within the book\'s period, and the book must not be closed.',
        reply_desc: {
            ok: '_true_ on success',
            debit: 'the saved debit entry entity',
            credit: 'the saved credit entry entity',
        },
    },
    msgVoidEntry: {
        desc: 'Void an existing journal entry by generating counter-entries that reverse the original debit and credit amounts. The original entries are preserved with a `kind: "void"` marker. _Note: implementation in progress._',
    },
    msgListEntry: {
        desc: 'List journal entries filtered by organisation (`oref`), book (`bref`), account (`aref`), or date range (`from` / `to`). Either debit or credit entries matching the filters are returned.',
        reply_desc: {
            ok: '_true_ on success',
            entries: 'array of journal entry entities',
        },
    },
    msgListBalance: {
        desc: 'List pre-computed balance records for a book. Balances are written by `balance:book` and reflect the state at the time that action was last run. _Note: implementation in progress._',
    },
    msgBalanceBook: {
        desc: 'Compute and persist balances for all accounts that have entries in the given book. Each balance record stores the net position so that reporting queries can avoid re-summing raw entries. _Note: implementation in progress._',
    },
};
exports.default = docs;
if ('undefined' !== typeof module) {
    module.exports = docs;
}
//# sourceMappingURL=ledger-doc.js.map