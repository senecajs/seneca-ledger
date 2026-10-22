/* Copyright © 2026 Seneca Project Contributors, MIT License. */

const docs: Record<string, { desc: string; reply_desc?: Record<string, string> }> = {
  msgCreateAccount: {
    desc: 'Create a new ledger account within an organisation. An account is identified by its `oref` (or `org_id`), `path` (e.g. `Asset` or `Asset/Current`), and `name`. The `normal` field must be either `"debit"` or `"credit"`.',
    reply_desc: {
      ok: '_true_ if account was created',
      account: 'the saved account entity',
      why: 'reason for failure when ok is _false_',
    },
  },
  msgGetAccount: {
    desc: 'Retrieve a single ledger account by its `aref` (account reference, in the form `oref/path/name`), `account_id`, or `id`.',
    reply_desc: {
      ok: '_true_ if account was found',
      account: 'the account entity',
      why: 'reason for failure when ok is _false_',
    },
  },
  msgListAccount: {
    desc: 'List ledger accounts that belong to an organisation (`org_id` or `oref`). If neither is given, all accounts are listed.',
    reply_desc: {
      ok: '_true_ on success',
      q: 'the query used to list accounts',
      list: 'array of account entities',
    },
  },
  msgUpdateAccount: {
    desc: 'Update fields on an existing ledger account. Supply the `aref` (or `account_id` / `id`) to identify the account and an `account` object containing the fields to change.',
    reply_desc: {
      ok: '_true_ if account was updated',
      account: 'the updated account entity',
      why: 'reason for failure when ok is _false_',
    },
  },
  msgBalanceAccount: {
    desc: 'Calculate the current balance of a ledger account for a given accounting period (book). Sums all debit and credit entries in the book and returns the net balance according to the account\'s `normal` direction.',
    reply_desc: {
      ok: '_true_ on success',
      creditTotal: 'sum of credit entry values',
      debitTotal: 'sum of debit entry values',
      balance: 'net balance according to the account\'s normal direction',
      account_id: 'account identifier',
      aref: 'account reference',
      book_id: 'book identifier',
      bref: 'book reference',
      start: 'book start date',
      end: 'book end date',
      creditCount: 'number of credit entries',
      debitCount: 'number of debit entries',
      normal: 'account normal direction (`debit` or `credit`)',
      when: 'calculation timestamp (unix milliseconds)',
      date: 'calculation date (YYYYMMDD)',
      time: 'calculation time (HHMMSS string, UTC)',
      why: 'reason for failure when ok is _false_',
    },
  },
  msgExportAccountCSV: {
    desc: 'Export all entries for a single ledger account within a book as a CSV string. Each row represents one journal entry with columns for date, description, debit, credit, and running balance.',
    reply_desc: {
      ok: '_true_ on success',
      account_id: 'account identifier',
      aref: 'account reference',
      normal: 'account normal direction (`debit` or `credit`)',
      book_id: 'book identifier',
      bref: 'book reference',
      content: 'CSV formatted string of entries',
      entry_count: 'number of entries exported',
      final_balance: 'account balance for the book',
      closing_balance: 'value of the closing entry, or 0 if none',
      why: 'reason for failure when ok is _false_',
      error: 'the failed balance or entry listing result, when applicable',
    },
  },
  msgCloseAccount: {
    desc: 'Close a ledger account within a book. Creates a closing entry against the opening balance account (default `oref/Equity/Opening Balance`, created if missing) and, when `target_bref` or `target_book_id` is supplied, an opening entry in the target book so the balance carries forward to the next accounting period.',
    reply_desc: {
      ok: '_true_ on success',
      account_id: 'account identifier',
      aref: 'account reference',
      book_id: 'book identifier',
      bref: 'book reference',
      target_book_id: 'target book identifier, if supplied',
      target_bref: 'target book reference, if supplied',
      original_balance: 'account balance before closing',
      closing_balance: 'account balance in the book after closing',
      opening_balance: 'account balance in the target book, or _null_',
      opening_balance_aref: 'reference of the opening balance account, or _null_',
      closing_entries: 'array of closing entry results',
      opening_entries: 'array of opening entry results',
      closing_date: 'date of the closing entry',
      why: 'reason for failure when ok is _false_',
      error: 'the failed sub-operation result, when applicable',
    },
  },
  msgCreateBook: {
    desc: 'Create a new accounting period (book) for an organisation. A book is identified by its `oref` (or `org_id`), `name`, and `start` date. Omit `end` (or set it to `0`) for an open-ended period.',
    reply_desc: {
      ok: '_true_ if book was created',
      book: 'the saved book entity',
      why: 'reason for failure when ok is _false_',
    },
  },
  msgGetBook: {
    desc: 'Retrieve a single accounting period (book) by its `bref` (book reference, in the form `oref/name/start`), `book_id`, or `id`.',
    reply_desc: {
      ok: '_true_ if book was found',
      book: 'the book entity',
      why: 'reason for failure when ok is _false_',
    },
  },
  msgListBook: {
    desc: 'List accounting periods (books) that belong to an organisation (`org_id` or `oref`). If neither is given, all books are listed.',
    reply_desc: {
      ok: '_true_ on success',
      q: 'the query used to list books',
      list: 'array of book entities',
    },
  },
  msgUpdateBook: {
    desc: 'Update fields on an existing accounting period (book). Supply the `bref` (or `book_id` / `id`) to identify the book and a `book` object containing the fields to change.',
    reply_desc: {
      ok: '_true_ if book was updated',
      book: 'the updated book entity',
      why: 'reason for failure when ok is _false_',
    },
  },
  msgExportBookCSV: {
    desc: 'Export every account with entries in a book (excluding the opening balance account) as CSV, processed in batches of `batch_size` (default 5), plus a summary CSV with columns for account name, normal balance, type, total (or closing) balance, and entry count.',
    reply_desc: {
      ok: '_true_ if all account exports succeeded',
      book_id: 'book identifier',
      bref: 'book reference',
      book_name: 'book name',
      total_accounts: 'number of accounts exported',
      successful_exports: 'number of successful account exports',
      failed_exports: 'number of failed account exports',
      exports: 'array of per-account export results',
      summary: 'summary CSV result (`ok`, `content`, or `why` and `error` on failure)',
      note: 'explanation when no accounts were found',
      why: 'reason for failure when the book is not found',
    },
  },
  msgCloseBook: {
    desc: 'Close an accounting period (book) by closing all its accounts in batches of `batch_size` (default 5) and marking the book as closed. When `target_bref` or `target_book_id` is supplied, closing balances are carried forward as opening entries in the target book.',
    reply_desc: {
      ok: '_true_ on success',
      book_id: 'book identifier',
      bref: 'book reference',
      target_book_id: 'target book identifier, if supplied',
      target_bref: 'target book reference, if supplied',
      closing_date: 'book end date used for closing',
      account_closures: 'array of per-account closure results',
      summary: 'totals: `total_accounts`, `successful_closures`, `failed_closures`, `total_balance_transferred`, `all_accounts_zeroed`',
      op_balance_check: 'opening balance account check in the target book, or _null_',
      closure_successful: '_true_ if all accounts closed with zero balance',
      note: 'explanation when no accounts were closed or closure failed',
      why: 'reason for failure when ok is _false_',
      error: 'the failed opening balance account creation result, when applicable',
    },
  },
  msgCreateEntry: {
    desc: 'Create a double-entry journal entry that debits one account and credits another within a given book. Both the debit account (`daref` or `debit`) and credit account (`caref` or `credit`) must exist, and `val`, `desc`, and `date` are required. The entry `date` must fall within the book\'s period, and the book must not be closed.',
    reply_desc: {
      ok: '_true_ on success',
      credit: 'the saved credit entry entity',
      debit: 'the saved debit entry entity',
      why: 'reason for failure when ok is _false_',
    },
  },
  msgVoidEntry: {
    desc: 'Not yet implemented.',
  },
  msgListEntry: {
    desc: 'List journal entries for an organisation (`oref`, required), optionally filtered by book (`bref` or `book_id`), account (`aref`, `account_id`, or `id`), and an extra query `q`. Set `credit: false` or `debit: false` to skip that side.',
    reply_desc: {
      ok: '_true_ on success',
      creditTotal: 'sum of credit entry values',
      debitTotal: 'sum of debit entry values',
      balance: 'net balance when an account is given, otherwise 0',
      credits: 'array of credit entry entities',
      debits: 'array of debit entry entities',
      cq: 'the query used to list credit entries',
      dq: 'the query used to list debit entries',
      why: 'reason for failure when ok is _false_',
    },
  },
  msgListBalance: {
    desc: 'Not yet implemented.',
  },
  msgBalanceBook: {
    desc: 'Not yet implemented.',
  },
}

export default docs

if ('undefined' !== typeof module) {
  module.exports = docs
}
