// Basic ledger: sent email invite to a friend

export default {
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
          normal: 'debit'
        }
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
        }
      }
    },

    {
      name: 'shop-ua0',
      pattern: 'update:account',
      params: {
        id: 'shop-a0',
        account: {
          xfoo: 1  // custom field
        }
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
        }
      }
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
          normal: 'credit'
        }
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
        }
      }
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
          normal: 'debit'
        }
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
        }
      }
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
        }
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
        }
      }
    },

    {
      name: 'shop-ub0',
      pattern: 'update:book',
      params: {
        id: 'shop-b0',
        book: {
          end: 20220331,
          xbar: 2 // custom field
        }
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
          xbar: 2
        }
      }
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
        date: '20220131',
        custom: {
          geo: 'EU'
        },
        entry: {
          xrep: 'alice'
        }
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
          credit_id: 'shop-a1',
          caref: 'o0/Income/Sales',
          id: 'shop-e0'
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
          debit_id: 'shop-a0',
          daref: 'o0/Asset/Cash',
          id: 'shop-e0'
        }
      }
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
        date: '20220102',
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
          credit_id: 'shop-a0',
          caref: 'o0/Asset/Cash',
          id: 'shop-e1'
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
          debit_id: 'shop-a2',
          daref: 'o0/Asset/Office',
          id: 'shop-e1'
        }
      }
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
            id: 'shop-e0'
          },
          {
            val: 20,
            desc: 'Buy desk',
            caref: 'o0/Asset/Cash',
            id: 'shop-e1'
          }
        ],
        debits: [
          {
            val: 100,
            desc: 'Jan Sales',
            daref: 'o0/Asset/Cash',
            id: 'shop-e0'
          },
          {
            val: 20,
            desc: 'Buy desk',
            daref: 'o0/Asset/Office',
            id: 'shop-e1'
          }
        ],
        cq: { oref: 'o0', book_id: 'shop-b0' },
        dq: { oref: 'o0', book_id: 'shop-b0' }
      }
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
            id: 'shop-e1'
          }
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
            id: 'shop-e0'
          }
        ],
        cq: { oref: 'o0', book_id: 'shop-b0', credit_id: 'shop-a0' },
        dq: { oref: 'o0', book_id: 'shop-b0', debit_id: 'shop-a0' }
      }
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
        balance: 80
      }
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
          normal: 'credit'
        }
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
        }
      }
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
          end: 20220630
        }
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
        }
      }
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
          id: 'shop-e2'
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
          id: 'shop-e2'
        }
      }
    },


    // Balance Credit Card account before closing
    {
      name: 'shop-ba3-before',
      pattern: 'balance:account',
      params: {
        aref: 'o0/Liability/Credit Card',
        bref: 'o0/Q1/20220101',
        save: false
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
        balance: 50
      }
    },


    // Close Credit Card account from Q1 to Q2
    {
      name: 'shop-ca3',
      pattern: 'close:account',
      params: {
        aref: 'o0/Liability/Credit Card',
        bref: 'o0/Q1/20220101',
        target_bref: 'o0/Q2/20220401',
        end: 20220331
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
        opening_balance_aref: 'o0/Equity/Open Balance',
        closing_date: 20220331
      }
    },


    // Verify Credit Card account is zeroed in Q1
    {
      name: 'shop-ba3-closed',
      pattern: 'balance:account',
      params: {
        aref: 'o0/Liability/Credit Card',
        bref: 'o0/Q1/20220101',
        save: false
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
        balance: 0
      }
    },


    // Verify Credit Card account has correct balance in Q2
    {
      name: 'shop-ba3-opened',
      pattern: 'balance:account',
      params: {
        aref: 'o0/Liability/Credit Card',
        bref: 'o0/Q2/20220401',
        save: false
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
        balance: 50
      }
    },


    // Test closing Cash account (debit normal) with positive balance
    {
      name: 'shop-ca0',
      pattern: 'close:account',
      params: {
        aref: 'o0/Asset/Cash',
        bref: 'o0/Q1/20220101',
        target_bref: 'o0/Q2/20220401',
        end: 20220331
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
        opening_balance_aref: 'o0/Equity/Open Balance',
        closing_date: 20220331
      }
    },


    // Verify Cash account is zeroed in Q1
    {
      name: 'shop-ba0-closed',
      pattern: 'balance:account',
      params: {
        aref: 'o0/Asset/Cash',
        bref: 'o0/Q1/20220101',
        save: false
      },
      out: {
        ok: true,
        account_id: 'shop-a0',
        aref: 'o0/Asset/Cash',
        book_id: 'shop-b0',
        bref: 'o0/Q1/20220101',
        start: 20220101,
        end: 20220331,
        creditTotal: 100,  // Original 20 + closing credit 80
        debitTotal: 100,   // Original debit 100
        creditCount: 2,    // Original + closing entry
        debitCount: 1,     // Original debit entry
        normal: 'debit',
        balance: 0
      }
    },


    // Verify Cash account has correct balance in Q2
    {
      name: 'shop-ba0-opened',
      pattern: 'balance:account',
      params: {
        aref: 'o0/Asset/Cash',
        bref: 'o0/Q2/20220401',
        save: false
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
        balance: 80
      }
    },


    // Test Open Balance Equity account in Q1 (closing entries only)
    {
      name: 'shop-ba-open-balance-q1',
      pattern: 'balance:account',
      params: {
        aref: 'o0/Equity/Open Balance',
        bref: 'o0/Q1/20220101',
        save: false
      },
      out: {
        ok: true,
        aref: 'o0/Equity/Open Balance',
        book_id: 'shop-b0',
        bref: 'o0/Q1/20220101',
        start: 20220101,
        end: 20220331,
        creditTotal: 50,   // Only Credit Card closing: Credit Open Balance 50
        debitTotal: 80,    // Only Cash closing: Debit Open Balance 80
        normal: 'credit',
        balance: -30       // 50 - 80 = -30
      }
    },


    // Test Open Balance Equity account has net zero balance in Q2 (opening entries only)
    {
      name: 'shop-ba-open-balance',
      pattern: 'balance:account',
      params: {
        aref: 'o0/Equity/Open Balance',
        bref: 'o0/Q2/20220401',
        save: false
      },
      out: {
        ok: true,
        aref: 'o0/Equity/Open Balance',
        book_id: 'shop-b1',
        bref: 'o0/Q2/20220401',
        start: 20220401,
        end: 20220630,
        creditTotal: 80,   // Only Cash opening: Credit Open Balance 80
        debitTotal: 50,    // Only Credit Card opening: Debit Open Balance 50  
        normal: 'credit',
        balance: 30        // 80 - 50 = 30 (not zero because closing entries are in Q1)
      }
    },


    // Test close:book method - Close Q1 book and transfer all accounts to Q2
    {
      name: 'shop-cb0',
      pattern: 'close:book',
      params: {
        bref: 'o0/Q1/20220101',
        target_bref: 'o0/Q2/20220401',
        end: 20220331
      },
      out: {
        ok: true,
        book_id: 'shop-b0',
        bref: 'o0/Q1/20220101',
        target_book_id: 'shop-b1',
        target_bref: 'o0/Q2/20220401',
        closing_date: 20220331,
        summary: {
          total_accounts: 4,  // Cash, Sales, Office, Credit Card
          successful_closures: 4,
          failed_closures: 0,
          total_balance_transferred: 170,  // 100 (Sales) + 70 (Office) = remaining balances
          all_accounts_zeroed: true
        },
        closure_successful: true
      }
    },


    // Verify all accounts are zeroed in Q1 after book closure
    {
      name: 'shop-verify-cash-after-book-close',
      pattern: 'balance:account',
      params: {
        aref: 'o0/Asset/Cash',
        bref: 'o0/Q1/20220101',
        save: false
      },
      out: {
        ok: true,
        account_id: 'shop-a0',
        aref: 'o0/Asset/Cash',
        book_id: 'shop-b0',
        bref: 'o0/Q1/20220101',
        start: 20220101,
        end: 20220331,
        creditTotal: 100,  // Original 20 + closing credit 80
        debitTotal: 100,   // Original debit 100
        creditCount: 2,    // Original + closing entry
        debitCount: 1,     // Original debit entry
        normal: 'debit',
        balance: 0
      }
    },


    {
      name: 'shop-verify-sales-after-book-close',
      pattern: 'balance:account',
      params: {
        aref: 'o0/Income/Sales',
        bref: 'o0/Q1/20220101',
        save: false
      },
      out: {
        ok: true,
        account_id: 'shop-a1',
        aref: 'o0/Income/Sales',
        book_id: 'shop-b0',
        bref: 'o0/Q1/20220101',
        start: 20220101,
        end: 20220331,
        creditTotal: 100,  // Original credit 100
        debitTotal: 100,   // Closing debit 100
        creditCount: 1,    // Original credit entry
        debitCount: 1,     // Closing entry
        normal: 'credit',
        balance: 0
      }
    },


    {
      name: 'shop-verify-office-after-book-close',
      pattern: 'balance:account',
      params: {
        aref: 'o0/Asset/Office',
        bref: 'o0/Q1/20220101',
        save: false
      },
      out: {
        ok: true,
        account_id: 'shop-a2',
        aref: 'o0/Asset/Office',
        book_id: 'shop-b0',
        bref: 'o0/Q1/20220101',
        start: 20220101,
        end: 20220331,
        creditTotal: 70,   // Closing credit 70
        debitTotal: 70,    // Original debits: 20 + 50 = 70
        creditCount: 1,    // Closing entry
        debitCount: 2,     // Two original debit entries
        normal: 'debit',
        balance: 0
      }
    },


    {
      name: 'shop-verify-credit-card-after-book-close',
      pattern: 'balance:account',
      params: {
        aref: 'o0/Liability/Credit Card',
        bref: 'o0/Q1/20220101',
        save: false
      },
      out: {
        ok: true,
        account_id: 'shop-a3',
        aref: 'o0/Liability/Credit Card',
        book_id: 'shop-b0',
        bref: 'o0/Q1/20220101',
        start: 20220101,
        end: 20220331,
        creditTotal: 50,   // Original credit 50
        debitTotal: 50,    // Closing debit 50
        creditCount: 1,    // Original credit entry
        debitCount: 1,     // Closing entry
        normal: 'credit',
        balance: 0
      }
    },


    // Verify all accounts have correct balances in Q2 after book closure
    {
      name: 'shop-verify-cash-q2-after-book-close',
      pattern: 'balance:account',
      params: {
        aref: 'o0/Asset/Cash',
        bref: 'o0/Q2/20220401',
        save: false
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
        debitTotal: 80,    // Opening debit 80
        creditCount: 0,
        debitCount: 1,     // Opening entry
        normal: 'debit',
        balance: 80
      }
    },


    {
      name: 'shop-verify-sales-q2-after-book-close',
      pattern: 'balance:account',
      params: {
        aref: 'o0/Income/Sales',
        bref: 'o0/Q2/20220401',
        save: false
      },
      out: {
        ok: true,
        account_id: 'shop-a1',
        aref: 'o0/Income/Sales',
        book_id: 'shop-b1',
        bref: 'o0/Q2/20220401',
        start: 20220401,
        end: 20220630,
        creditTotal: 100,  // Opening credit 100
        debitTotal: 0,
        creditCount: 1,    // Opening entry
        debitCount: 0,
        normal: 'credit',
        balance: 100
      }
    },


    {
      name: 'shop-verify-office-q2-after-book-close',
      pattern: 'balance:account',
      params: {
        aref: 'o0/Asset/Office',
        bref: 'o0/Q2/20220401',
        save: false
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
        debitTotal: 70,    // Opening debit 70
        creditCount: 0,
        debitCount: 1,     // Opening entry
        normal: 'debit',
        balance: 70
      }
    },


    {
      name: 'shop-verify-credit-card-q2-after-book-close',
      pattern: 'balance:account',
      params: {
        aref: 'o0/Liability/Credit Card',
        bref: 'o0/Q2/20220401',
        save: false
      },
      out: {
        ok: true,
        account_id: 'shop-a3',
        aref: 'o0/Liability/Credit Card',
        book_id: 'shop-b1',
        bref: 'o0/Q2/20220401',
        start: 20220401,
        end: 20220630,
        creditTotal: 50,   // Opening credit 50
        debitTotal: 0,
        creditCount: 1,    // Opening entry
        debitCount: 0,
        normal: 'credit',
        balance: 50
      }
    },


    // Verify Opening Balance Equity nets to zero across both books
    {
      name: 'shop-verify-open-balance-q1-after-book-close',
      pattern: 'balance:account',
      params: {
        aref: 'o0/Equity/Open Balance',
        bref: 'o0/Q1/20220101',
        save: false
      },
      out: {
        ok: true,
        aref: 'o0/Equity/Open Balance',
        book_id: 'shop-b0',
        bref: 'o0/Q1/20220101',
        start: 20220101,
        end: 20220331,
        creditTotal: 150,  // 50 (Credit Card) + 100 (Sales)
        debitTotal: 150,   // 80 (Cash) + 70 (Office)
        normal: 'credit',
        balance: 0         // Should net to zero in closing book
      }
    },


    {
      name: 'shop-verify-open-balance-q2-after-book-close',
      pattern: 'balance:account',
      params: {
        aref: 'o0/Equity/Open Balance',
        bref: 'o0/Q2/20220401',
        save: false
      },
      out: {
        ok: true,
        aref: 'o0/Equity/Open Balance',
        book_id: 'shop-b1',
        bref: 'o0/Q2/20220401',
        start: 20220401,
        end: 20220630,
        creditTotal: 150,  // 80 (Cash) + 70 (Office)
        debitTotal: 150,   // 50 (Credit Card) + 100 (Sales)
        normal: 'credit',
        balance: 0         // Should net to zero in opening book
      }
    },


    // Test closing a book with no target (just close, don't open anywhere)
    {
      name: 'shop-create-q3-book',
      pattern: 'create:book',
      params: {
        book: {
          id$: 'shop-b2',
          oref: 'o0',
          name: 'Q3',
          start: 20220701,
          end: 20220930
        }
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
        }
      }
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
          id: 'shop-e3'
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
          id: 'shop-e3'
        }
      }
    },


    // Close Q2 book without specifying target (only close, don't open)
    {
      name: 'shop-cb1-no-target',
      pattern: 'close:book',
      params: {
        bref: 'o0/Q2/20220401',
        end: 20220630
      },
      out: {
        ok: true,
        book_id: 'shop-b1',
        bref: 'o0/Q2/20220401',
        closing_date: 20220630,
        summary: {
          total_accounts: 4,  // All accounts that have entries in Q2
          successful_closures: 4,
          failed_closures: 0,
          total_balance_transferred: 700, // 50 + 300 + 280 + 70
          all_accounts_zeroed: true
        },
        closure_successful: true
      }
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
        why: 'book-closed'
      }
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
        why: 'book-closed'
      }
    },
  ],
}
