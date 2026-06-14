// export:account and export:book CSV output.

export default [
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
      content:
        '# Cash - Q1 - o0\n' +
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
      content:
        '# Sales - Q1 - o0\n' +
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
      content:
        '# Office - Q1 - o0\n' +
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
      content:
        '# Credit Card - Q1 - o0\n' +
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
      content:
        '# Cash - Q2 - o0\n' +
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
      content:
        '# Sales - Q2 - o0\n' +
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
      content:
        '# Office - Q2 - o0\n' +
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
      content:
        '# Credit Card - Q2 - o0\n' +
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
      content:
        '# Cash - Q3 - o0\n' +
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
      content:
        '# Sales - Q3 - o0\n' +
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
      content:
        '# Office - Q3 - o0\n' +
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
      content:
        '# Credit Card - Q3 - o0\n' +
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
      ok: true,
      book_id: 'shop-b0',
      bref: 'o0/Q1/20220101',
      book_name: 'Q1',
      total_accounts: 4,
      successful_exports: 4,
      failed_exports: 0,
      summary: {
        ok: true,
        content:
          '# Book Summary: Q1\n' +
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
        content:
          '# Book Summary: Q2\n' +
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
        content:
          '# Book Summary: Q3\n' +
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
]
