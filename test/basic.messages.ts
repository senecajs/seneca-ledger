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


    // Open a book for Q2
    {
      name: 'shop-b1',
      pattern: 'create:book',
      params: {
        book: {
          id$: 'shop-b1',
          oref: 'o0',
          name: 'Q2',
          start: 20220401,
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
          time: { kind: 'basic' },
        }
      }
    },


    // Try create an entry on closed book
    {
      name: 'shop-e2',
      pattern: 'create:entry',
      params: {
        id: 'shop-e2',
        oref: 'o0',
        bref: 'o0/Q1/20220101',
        daref: 'o0/Asset/Cash',
        caref: 'o0/Income/Sales',
        val: 200,
        desc: 'Jan Sales',
        date: '20220401',
        custom: {
          geo: 'EU'
        },
        entry: {
          xrep: 'alice'
        }
      },
      out: {
        ok: false,
        why: "book-closed"
      }
    },


    // Create a new entry on a new book
    {
      name: 'shop-e3',
      pattern: 'create:entry',
      params: {
        id: 'shop-e3',
        oref: 'o0',
        bref: 'o0/Q2/20220401',
        daref: 'o0/Asset/Cash',
        caref: 'o0/Income/Sales',
        val: 150,
        desc: 'April Sales',
        date: '20220403',
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
          val: 150,
          desc: 'April Sales',
          kind: 'standard',
          oref: 'o0',
          org_id: 'o0',
          bref: 'o0/Q2/20220401',
          book_id: 'shop-b1',
          custom: { geo: 'EU' },
          baseval: -1,
          basecur: '---',
          baserate: 0,
          credit_id: 'shop-a1',
          caref: 'o0/Income/Sales',
          id: 'shop-e3'
        },
        debit: {
          xrep: 'alice',
          val: 150,
          desc: 'April Sales',
          kind: 'standard',
          oref: 'o0',
          org_id: 'o0',
          bref: 'o0/Q2/20220401',
          book_id: 'shop-b1',
          custom: { geo: 'EU' },
          baseval: -1,
          basecur: '---',
          baserate: 0,
          debit_id: 'shop-a0',
          daref: 'o0/Asset/Cash',
          id: 'shop-e3'
        }
      }
    },


    // Open a book for another org at Q2
    {
      name: 'shop-b0-org1',
      pattern: 'create:book',
      params: {
        book: {
          id$: 'shop-o1-b0',
          oref: 'o1',
          name: 'Q2',
          start: 20220401,
        }
      },
      out: {
        ok: true,
        book: {
          id: 'shop-o1-b0',
          org_id: 'o1',
          oref: 'o1',
          bref: 'o1/Q2/20220401',
          name: 'Q2',
          start: 20220401,
          time: { kind: 'basic' },
        }
      }
    },


    // Create accounts for o1
    {
      name: 'shop-o1-a0',
      pattern: 'create:account',
      params: {
        account: {
          id$: 'shop-o1-a0',
          oref: 'o1',
          path: 'Asset',
          name: 'Cash',
          normal: 'debit'
        }
      },
      out: {
        ok: true,
        account: {
          id: 'shop-o1-a0',
          path0: 'Asset',
          path1: '',
          path2: '',
          org_id: 'o1',
          oref: 'o1',
          aref: 'o1/Asset/Cash',
          path: ['Asset'],
          name: 'Cash',
          normal: 'debit',
        }
      }
    },

    {
      name: 'shop-o1-a1',
      pattern: 'create:account',
      params: {
        account: {
          id$: 'shop-o1-a1',
          oref: 'o1',
          path: 'Income',
          name: 'Sales',
          normal: 'credit'
        }
      },
      out: {
        ok: true,
        account: {
          id: 'shop-o1-a1',
          path0: 'Income',
          path1: '',
          path2: '',
          org_id: 'o1',
          oref: 'o1',
          aref: 'o1/Income/Sales',
          path: ['Income'],
          name: 'Sales',
          normal: 'credit',
        }
      }
    },


    // Create a new entry for o1 b0
    {
      name: 'shop-o1-a1',
      pattern: 'create:entry',
      params: {
        id: 'shop-o1-e0',
        oref: 'o1',
        bref: 'o1/Q2/20220401',
        daref: 'o1/Asset/Cash',
        caref: 'o1/Income/Sales',
        val: 200,
        desc: 'April Sales',
        date: '20220403',
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
          val: 200,
          desc: 'April Sales',
          kind: 'standard',
          oref: 'o1',
          org_id: 'o1',
          bref: 'o1/Q2/20220401',
          book_id: 'shop-o1-b0',
          custom: { geo: 'EU' },
          baseval: -1,
          basecur: '---',
          baserate: 0,
          credit_id: 'shop-o1-a1',
          caref: 'o1/Income/Sales',
          id: 'shop-o1-e0'
        },
        debit: {
          xrep: 'alice',
          val: 200,
          desc: 'April Sales',
          kind: 'standard',
          oref: 'o1',
          org_id: 'o1',
          bref: 'o1/Q2/20220401',
          book_id: 'shop-o1-b0',
          custom: { geo: 'EU' },
          baseval: -1,
          basecur: '---',
          baserate: 0,
          debit_id: 'shop-o1-a0',
          daref: 'o1/Asset/Cash',
          id: 'shop-o1-e0'
        }
      }
    },


    // o0 acc Balance should not be affected by o1 entry
    {
      name: 'shop-le2',
      pattern: 'balance:account',
      params: {
        oref: 'o0',
        bref: 'o0/Q2/20220401',
        aref: 'o0/Asset/Cash',
      },
      out: {
        ok: true,
        account_id: 'shop-a0',
        aref: 'o0/Asset/Cash',
        book_id: 'shop-b1',
        bref: 'o0/Q2/20220401',
        start: 20220401,
        end: -1,
        creditTotal: 0,
        debitTotal: 150,
        creditCount: 0,
        debitCount: 1,
        normal: 'debit',
        balance: 150
      }
    },

    {
      name: 'shop-le3',
      pattern: 'balance:account',
      params: {
        oref: 'o0',
        bref: 'o0/Q2/20220401',
        aref: 'o0/Income/Sales',
      },
      out: {
        ok: true,
        account_id: 'shop-a1',
        aref: 'o0/Income/Sales',
        book_id: 'shop-b1',
        bref: 'o0/Q2/20220401',
        start: 20220401,
        end: -1,
        creditTotal: 150,
        debitTotal: 0,
        creditCount: 1,
        debitCount: 0,
        normal: 'credit',
        balance: 150
      }
    },


    // o1 acc Balance should not be affected by o0 entry
    {
      name: 'shop-o1-le1',
      pattern: 'balance:account',
      params: {
        id: 'shop-o1-e0',
        oref: 'o1',
        bref: 'o1/Q2/20220401',
        aref: 'o1/Asset/Cash',
      },
      out: {
        ok: true,
        account_id: 'shop-o1-a0',
        aref: 'o1/Asset/Cash',
        book_id: 'shop-o1-b0',
        bref: 'o1/Q2/20220401',
        start: 20220401,
        end: -1,
        creditTotal: 0,
        debitTotal: 200,
        creditCount: 0,
        debitCount: 1,
        normal: 'debit',
        balance: 200
      }
    },

    {
      name: 'shop-o1-le2',
      pattern: 'balance:account',
      params: {
        oref: 'o1',
        bref: 'o1/Q2/20220401',
        aref: 'o1/Income/Sales',
      },
      out: {
        ok: true,
        account_id: 'shop-o1-a1',
        aref: 'o1/Income/Sales',
        book_id: 'shop-o1-b0',
        bref: 'o1/Q2/20220401',
        start: 20220401,
        end: -1,
        creditTotal: 200,
        debitTotal: 0,
        creditCount: 1,
        debitCount: 0,
        normal: 'credit',
        balance: 200
      }
    },

    // Close o0 b1
    {
      name: 'shop-o0-c1',
      pattern: 'close:book',
      params: {
        bref: 'o0/Q2/20220401',
        end: 20220630
      },
      out: {
        ok: true
      }
    },

    // Close o1 b0
    {
      name: 'shop-o1-c0',
      pattern: 'close:book',
      params: {
        bref: 'o1/Q2/20220401',
        end: 20220630
      },
      out: {
        ok: true
      }
    },


    // Should not accept a new entry for o0 b1
    {
      name: 'shop-e4',
      pattern: 'create:entry',
      params: {
        id: 'shop-e4',
        oref: 'o0',
        bref: 'o0/Q2/20220401',
        daref: 'o0/Asset/Cash',
        caref: 'o0/Income/Sales',
        val: 50,
        desc: 'April Sales',
        date: '20220703',
        custom: {
          geo: 'EU'
        },
        entry: {
          xrep: 'alice'
        }
      },
      out: {
        ok: false,
        why: 'book-closed'
      }
    },


    // Should not accept a new entry for o1 b0
    {
      name: 'shop-o1-a1',
      pattern: 'create:entry',
      params: {
        id: 'shop-o1-e1',
        oref: 'o1',
        bref: 'o1/Q2/20220401',
        daref: 'o1/Asset/Cash',
        caref: 'o1/Income/Sales',
        val: 130,
        desc: 'April Sales',
        date: '20220703',
        custom: {
          geo: 'EU'
        },
        entry: {
          xrep: 'alice'
        }
      },
      out: {
        ok: false,
        why: 'book-closed'
      }
    }
  ],
}
