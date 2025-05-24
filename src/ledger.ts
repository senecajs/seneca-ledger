/* Copyright © 2022 Seneca Project Contributors, MIT License. */


type LedgerOptions = {
  debug: boolean
  path: {
    partSize: number,
  },
  entity: {
    base: string
  }
}


type dc = 'debit' | 'credit'


/* NOTES
 * oref, aref, bref are mostly for human repl convenience 
 * 
 * Unique constraints:
 * ledger/account: aref
 */


function ledger(this: any, options: LedgerOptions) {
  const seneca: any = this

  const accountCanon = options.entity.base + '/account'
  const bookCanon = options.entity.base + '/book'
  const debitCanon = options.entity.base + '/debit'
  const creditCanon = options.entity.base + '/credit'
  const balanceCanon = options.entity.base + '/balance'


  const makeRef = seneca.util.Nid({ length: 16 })

  seneca
    .fix('biz:ledger')
    .message('create:account', msgCreateAccount)
    .message('get:account', msgGetAccount)
    .message('list:account', msgListAccount)
    .message('update:account', msgUpdateAccount)
    .message('list:account', msgListAccount)
    .message('balance:account', msgBalanceAccount)
    .message('close:account', msgCloseAccount)
    .message('create:book', msgCreateBook)
    .message('get:book', msgGetBook)
    .message('update:book', msgUpdateBook)
    .message('list:book', msgListBook)
    .message('close:book', msgCloseBook)
    .message('list:balance', msgListBalance)
    .message('balance:book', msgBalanceBook)
    .message('create:entry', msgCreateEntry)
    .message('void:entry', msgVoidEntry)
    .message('list:entry', msgListEntry)


  async function msgCreateAccount(this: any, msg: {
    account: {
      id$?: string // specify id
      org_id?: string // Organization holding the ledger, defined externally
      oref?: string // Organization holding the ledger, defined externally
      path?: string | string[], // Classification path. e.g ['Asset']
      name: string
      normal: dc
    }
  }) {
    let seneca = this

    let account = msg.account

    if (null == account) {
      return { ok: false, why: 'no-account' }
    }

    let oref = null == account.oref ? account.org_id : account.oref
    let org_id = null == account.org_id ? account.oref : account.org_id

    if (null == org_id) {
      return { ok: false, why: 'no-org' }
    }

    let name = account.name

    if (null == name || '' == name) {
      return { ok: false, why: 'no-name' }
    }

    let path = ('string' === typeof account.path ? account.path.split('/') :
      account.path) || []
    let pathParts = Array(options.path.partSize).fill(null)
      .reduce(((a: any, _: string, i: number) =>
        (a['path' + i] = null == path[i] ? '' : path[i], a)), ({} as any))

    let aref = account.oref + '/' + path.join('/') + '/' + name

    let normal = account.normal
    if ('credit' !== normal && 'debit' !== normal) {
      return { ok: false, why: 'invalid-normal' }
    }

    let accountEnt = await seneca.entity(accountCanon).data$({
      id$: account.id$,
      ...pathParts,
      org_id,
      oref,
      aref,
      path,
      name,
      normal,
    }).save$()

    return { ok: true, account: accountEnt.data$(false) }
  }


  async function msgGetAccount(this: any, msg: {
    id?: string
    account_id?: string
    aref?: string // Account ref: aref/account-name/account-start
  }) {
    let seneca = this

    let accountEnt = await getAccount(seneca, accountCanon, msg)

    if (null == accountEnt) {
      return { ok: false, why: 'account-not-found' }
    }

    return { ok: true, account: accountEnt.data$(false) }
  }


  async function msgListAccount(this: any, msg: {
    org_id?: string // Organization holding the ledger, defined externally
    oref?: string // Organization holding the ledger, defined externally

  }) {
    let seneca = this

    let org_id = null == msg.org_id ? msg.oref : msg.org_id

    let q: any = {}
    if (null != org_id) {
      q.org_id = org_id
    }

    let list = await seneca.entity(accountCanon).list$(q)
    list = list.map((ent: any) => ent.data$(false))
    return { ok: true, q, list }
  }


  async function msgUpdateAccount(this: any, msg: {
    id?: string
    account_id?: string
    aref?: string // Account ref: oref/path/account-name
    account: any
  }) {
    let seneca = this

    let accountEnt = await getAccount(seneca, accountCanon, msg)

    if (null == accountEnt) {
      return { ok: false, why: 'account-not-found' }
    }

    if (null == msg.account) {
      return { ok: false, why: 'no-account-update' }
    }


    await accountEnt.data$(msg.account).save$()

    return { ok: true, account: accountEnt.data$(false) }
  }


  // TODO: save to ledger/balance by book, default but optional
  async function msgBalanceAccount(this: any, msg: {
    account_id?: string
    aref?: string
    book_id?: string
    bref?: string
    save: boolean // true => save to ledger/balance
  }) {
    let seneca = this

    let accountEnt = await getAccount(seneca, accountCanon, msg)

    if (null == accountEnt) {
      return { ok: false, why: 'account-not-found' }
    }

    let bookEnt = await getBook(seneca, bookCanon, msg)

    if (null == bookEnt) {
      return { ok: false, why: 'book-not-found' }
    }

    let cq = {
      credit_id: accountEnt.id,
      book_id: bookEnt.id,
    }

    let dq = {
      debit_id: accountEnt.id,
      book_id: bookEnt.id,
    }

    let credits = await seneca.entity(creditCanon).list$(cq)
    let debits = await seneca.entity(debitCanon).list$(dq)

    // let creditTotal = credits.map((entry: any) => entry.val)
    //   .reduce((total: number, val: number) => val + total, 0)

    // let debitTotal = debits.map((entry: any) => entry.val)
    //   .reduce((total: number, val: number) => val + total, 0)

    // let balance = 'credit' === accountEnt.normal ? creditTotal - debitTotal :
    //   debitTotal - creditTotal

    let totals = calcTotals(accountEnt, credits, debits)

    let out = {
      ok: true,
      ...totals,
      account_id: accountEnt.id,
      aref: accountEnt.aref,
      book_id: bookEnt.id,
      bref: bookEnt.bref,
      start: bookEnt.start,
      end: bookEnt.end,
      // creditTotal: creditTotal,
      // debitTotal: debitTotal,
      // balance,
      creditCount: credits.length,
      debitCount: debits.length,
      normal: accountEnt.normal,
    }

    return out
  }

  async function msgCloseAccount(this: any, msg: {
    account_id?: string
    aref?: string
    book_id?: string
    bref?: string
    target_book_id?: string
    target_bref?: string
    end?: number
    opening_balance_aref?: string
  }) {
    const seneca = this

    const [accountEnt, bookEnt] = await Promise.all([
      getAccount(seneca, accountCanon, msg),
      getBook(seneca, bookCanon, msg)
    ])

    if (null == accountEnt) {
      return { ok: false, why: 'account-not-found' }
    }

    if (null == bookEnt) {
      return { ok: false, why: 'book-not-found' }
    }

    let targetBookEnt = null
    if (msg.target_book_id || msg.target_bref) {
      targetBookEnt = await getBook(seneca, bookCanon, {
        book_id: msg.target_book_id,
        bref: msg.target_bref
      })

      if (null == targetBookEnt) {
        return { ok: false, why: 'target-book-not-found' }
      }
    }

    const balanceResult = await seneca.post('biz:ledger,balance:account', {
      account_id: accountEnt.id,
      book_id: bookEnt.id,
      save: false
    })

    if (!balanceResult.ok) {
      return { ok: false, why: 'balance-result-failed', error: balanceResult }
    }

    const currentBalance = balanceResult.balance
    if (currentBalance === 0) {
      return {
        ok: true,
        account_id: accountEnt.id,
        aref: accountEnt.aref,
        book_id: bookEnt.id,
        bref: bookEnt.bref,
        target_book_id: targetBookEnt?.id,
        target_bref: targetBookEnt?.bref,
        original_balance: 0,
        closing_balance: 0,
        opening_balance: 0,
        opening_balance_aref: null,
        closing_entries: [],
        opening_entries: [],
        closing_date: msg.end || bookEnt.end
      }
    }

    const closingDate = msg.end || bookEnt.end
    const opAref = msg.opening_balance_aref
      || `${accountEnt.oref}/Equity/Open Balance`

    let opEnt = await getAccount(seneca, accountCanon, {
      aref: opAref
    })

    if (null == opEnt) {
      const createResult = await seneca.post('biz:ledger,create:account', {
        account: {
          org_id: accountEnt.org_id,
          oref: accountEnt.oref,
          path: ['Equity'],
          name: 'Open Balance',
          normal: 'credit'
        }
      })

      if (!createResult?.ok) {
        return { ok: false, why: 'open-balance-create-fail', error: opEnt }
      }

      opEnt = createResult.account
    }

    const absBalance = Math.abs(currentBalance)
    const isDebitBalance = (accountEnt.normal === 'debit' && currentBalance > 0)
      || (accountEnt.normal === 'credit' && currentBalance < 0)

    const baseEntry = {
      val: absBalance,
      desc: `${targetBookEnt ? 'Open' : 'Close'} account: ${accountEnt.name}`
    }

    const entryPromises = []

    const closingEntry = {
      ...baseEntry,
      book_id: bookEnt.id,
      date: closingDate,
      kind: 'closing',
      daref: isDebitBalance ? opEnt.aref : accountEnt.aref,
      caref: isDebitBalance ? accountEnt.aref : opEnt.aref
    }
    entryPromises.push(seneca.post('biz:ledger,create:entry', closingEntry))

    if (targetBookEnt) {
      const openingEntry = {
        ...baseEntry,
        book_id: targetBookEnt.id,
        date: targetBookEnt.start,
        kind: 'opening',
        daref: isDebitBalance ? accountEnt.aref : opEnt.aref,
        caref: isDebitBalance ? opEnt.aref : accountEnt.aref
      }
      entryPromises.push(seneca.post('biz:ledger,create:entry', openingEntry))
    }

    const results = await Promise.all(entryPromises)

    let closingResult = results[0]
    let openingResult = results[1]

    if (!closingResult.ok) {
      return { ok: false, why: 'closing-entry-failed', error: closingResult }
    }

    if (targetBookEnt && !openingResult?.ok) {
      return { ok: false, why: 'opening-entry-failed', error: openingResult }
    }

    const verifyPromises = [
      seneca.post('biz:ledger,balance:account', {
        account_id: accountEnt.id,
        book_id: bookEnt.id,
        save: false
      })
    ]

    if (targetBookEnt) {
      verifyPromises.push(
        seneca.post('biz:ledger,balance:account', {
          account_id: accountEnt.id,
          book_id: targetBookEnt.id,
          save: false
        })
      )
    }

    const verifyResults = await Promise.all(verifyPromises)
    const verifyClosingBalance = verifyResults[0]
    const verifyOpeningBalance = verifyResults[1]

    return {
      ok: true,
      account_id: accountEnt.id,
      aref: accountEnt.aref,
      book_id: bookEnt.id,
      bref: bookEnt.bref,
      target_book_id: targetBookEnt?.id,
      target_bref: targetBookEnt?.bref,
      original_balance: currentBalance,
      closing_balance: verifyClosingBalance.balance,
      opening_balance: verifyOpeningBalance?.balance || null,
      opening_balance_aref: opEnt.aref,
      closing_entries: [closingResult],
      opening_entries: openingResult ? [openingResult] : [],
      closing_date: closingDate
    }
  }


  async function msgCreateBook(this: any, msg: {
    book: {
      id$?: string
      org_id?: string
      oref?: string
      name: string, // Not unique, repeated for time periods
      start: number, // YYYYMMDD
      end?: number, // YYYYMMDD
      time?: any // time spec - timezone etc
    }
  }) {
    let seneca = this

    let book = msg.book

    if (null == book) {
      return { ok: false, why: 'no-book' }
    }

    let start = book.start
    if (null == start) {
      return { ok: false, why: 'no-start' }
    }

    let oref = null == book.oref ? book.org_id : book.oref
    let org_id = null == book.org_id ? book.oref : book.org_id

    if (null == org_id) {
      return { ok: false, why: 'no-org' }
    }

    let end = book.end || -1
    let time = book.time || { kind: 'basic' }

    let name = book.name
    if (null == name || '' == name) {
      return { ok: false, why: 'no-name' }
    }

    let bref = oref + '/' + name + '/' + start

    let bookEnt = await seneca.entity(bookCanon).data$({
      id$: book.id$,
      org_id,
      oref,
      bref,
      name,
      start,
      end,
      time,
    }).save$()

    return { ok: true, book: bookEnt.data$(false) }
  }


  async function msgGetBook(this: any, msg: {
    id?: string
    book_id?: string
    bref?: string // Book ref: aref/book-name/book-start
  }) {
    let seneca = this

    let bookEnt = await getBook(seneca, bookCanon, msg)

    if (null == bookEnt) {
      return { ok: false, why: 'book-not-found' }
    }

    return { ok: true, book: bookEnt.data$(false) }
  }

  async function msgListBook(this: any, msg: {
    org_id?: string // Organization holding the ledger, defined externally
    oref?: string // Organization holding the ledger, defined externally

  }) {
    let seneca = this

    let org_id = null == msg.org_id ? msg.oref : msg.org_id

    let q: any = {}
    if (null != org_id) {
      q.org_id = org_id
    }

    let list = await seneca.entity(bookCanon)
      .list$(q)

    list = list.map((ent: any) => ent.data$(false))

    return { ok: true, q, list }
  }


  async function msgCloseBook(this: any, msg: {
    book_id?: string
    bref?: string
    target_book_id?: string
    target_bref?: string
    end?: number
    opening_balance_aref?: string
    batch_size?: number
  }) {
    const seneca = this

    const bookEnt = await getBook(seneca, bookCanon, msg)
    if (null == bookEnt) {
      return { ok: false, why: 'book-not-found' }
    }

    if (bookEnt.closed === true) {
      return { ok: false, why: 'book-already-closed' }
    }

    let targetBookEnt = null
    if (msg.target_book_id || msg.target_bref) {
      targetBookEnt = await getBook(seneca, bookCanon, {
        book_id: msg.target_book_id,
        bref: msg.target_bref
      })

      if (null == targetBookEnt) {
        return { ok: false, why: 'target-book-not-found' }
      }
    }

    const [allCredits, allDebits] = await Promise.all([
      seneca.entity(creditCanon).list$({ book_id: bookEnt.id }),
      seneca.entity(debitCanon).list$({ book_id: bookEnt.id })
    ])

    const accountIds = new Set<string>()
    allCredits.forEach((entry: Record<string, any>) => accountIds.add(entry.credit_id))
    allDebits.forEach((entry: Record<string, any>) => accountIds.add(entry.debit_id))

    if (accountIds.size === 0) {
      bookEnt.closed = true
      await bookEnt.save$()

      return {
        ok: true,
        book_id: bookEnt.id,
        bref: bookEnt.bref,
        target_book_id: targetBookEnt?.id,
        target_bref: targetBookEnt?.bref,
        message: 'No account entries in this book',
        account_closures: [],
        summary: {
          total_accounts: 0,
          successful_closures: 0,
          failed_closures: 0,
          total_balance_transferred: 0,
          all_accounts_zeroed: true
        },
        balance_check: [],
        op_balance_check: null,
        closure_successful: true
      }
    }

    const opAref = msg.opening_balance_aref || `${bookEnt.oref}/Equity/Open Balance`

    const accountPromises = Array.from(accountIds).map(accountId =>
      getAccount(seneca, accountCanon, { account_id: accountId })
    )
    const accounts = await Promise.all(accountPromises)

    const accountsToClose = accounts.filter(acc => acc?.aref !== opAref)

    if (accountsToClose.length === 0) {
      return {
        ok: true,
        book_id: bookEnt.id,
        bref: bookEnt.bref,
        target_book_id: targetBookEnt?.id,
        target_bref: targetBookEnt?.bref,
        message: 'No accounts to close in this book',
        account_closures: [],
        summary: {
          total_accounts: 0,
          successful_closures: 0,
          failed_closures: 0,
          total_balance_transferred: 0,
          all_accounts_zeroed: true
        },
        balance_check: [],
        op_balance_check: null,
        closure_successful: true
      }
    }

    const batchSize = msg.batch_size || 5
    const accountClosures: Record<string, any>[] = []
    let successfulClosures = 0
    let failedClosures = 0
    let totalBalanceTransferred = 0

    for (let i = 0; i < accountsToClose.length; i += batchSize) {
      const batch = accountsToClose.slice(i, i + batchSize)

      const closurePromises = batch.map(accountEnt =>
        seneca.post('biz:ledger,close:account', {
          account_id: accountEnt.id,
          book_id: bookEnt.id,
          target_book_id: targetBookEnt?.id,
          target_bref: targetBookEnt?.bref,
          end: msg.end,
          opening_balance_aref: msg.opening_balance_aref
        })
      )

      const batchResults = await Promise.all(closurePromises)

      batchResults.forEach((closeResult, i) => {
        const accountEnt = batch[i]

        accountClosures.push({
          account_id: accountEnt.id,
          result: closeResult
        })

        if (closeResult.ok) {
          successfulClosures++
          totalBalanceTransferred += Math.abs(closeResult.original_balance || 0)
        } else {
          failedClosures++
        }
      })
    }

    const balancePromises = accountsToClose.map(accountEnt =>
      seneca.post('biz:ledger,balance:account', {
        account_id: accountEnt.id,
        book_id: bookEnt.id,
        save: false
      })
    )

    const balanceResults = await Promise.all(balancePromises)

    const balanceCheck = balanceResults
      .filter(result => result.ok)
      .map(result => ({
        account_id: result.account_id,
        aref: result.aref,
        balance: result.balance,
        is_zeroed: Math.abs(result.balance) < 0.01
      }))


    let opCheck = null
    if (targetBookEnt) {
      const opBalanceResult = await seneca.post('biz:ledger,balance:account', {
        aref: opAref,
        book_id: targetBookEnt.id,
        save: false
      })

      if (opBalanceResult.ok) {
        opCheck = {
          aref: opAref,
          balance: opBalanceResult.balance,
          creditTotal: opBalanceResult.creditTotal,
          debitTotal: opBalanceResult.debitTotal,
          balanced: Math.abs(opBalanceResult.balance) < 0.01
        }
      }
    }

    const allAccZeroed = balanceCheck.every(v => v.is_zeroed)
    const closureSuccessful = failedClosures === 0 && allAccZeroed

    if (closureSuccessful) {
      bookEnt.closed = true
      await bookEnt.save$()
    }

    return {
      ok: true,
      book_id: bookEnt.id,
      bref: bookEnt.bref,
      target_book_id: targetBookEnt?.id,
      target_bref: targetBookEnt?.bref,
      closing_date: msg.end || bookEnt.end,
      account_closures: accountClosures,
      summary: {
        total_accounts: accountsToClose.length,
        successful_closures: successfulClosures,
        failed_closures: failedClosures,
        total_balance_transferred: totalBalanceTransferred,
        all_accounts_zeroed: allAccZeroed
      },
      balance_check: balanceCheck,
      op_balance_check: opCheck,
      closure_successful: closureSuccessful
    }
  }


  async function msgUpdateBook(this: any, msg: {
    id?: string
    book_id?: string
    bref?: string // Book ref: aref/book-name/book-start
    book: any
  }) {
    let seneca = this

    let bookEnt = await getBook(seneca, bookCanon, msg)

    if (null == bookEnt) {
      return { ok: false, why: 'book-not-found' }
    }

    if (null == msg.book) {
      return { ok: false, why: 'no-book-update' }
    }


    await bookEnt.data$(msg.book).save$()

    return { ok: true, book: bookEnt.data$(false) }
  }

  async function msgListBalance(this: any, msg: any) {
    // TODO: list ledger/balance for book
  }


  async function msgBalanceBook(this: any, msg: any) {
    // TODO: for all accounts in book (from entries), balance account,
    // and save to ledger/balance
  }


  // TODO: mark ledger/balance stale
  async function msgCreateEntry(this: any, msg: {
    id?: string
    book_id?: string
    bref?: string // Book ref: aref/book-name/book-start
    accounth_id?: string
    aref?: string // Account ref: org_ref/path/name

    debit?: {
      account_id?: string
      aref?: string
    }

    credit?: {
      account_id?: string
      aref?: string
    }

    // convenience
    daref?: string
    caref?: string

    date: number // YYYYMMDD
    val: number
    desc: string

    // optional
    baseval?: number
    basecur?: string
    baserate?: number

    kind?: string

    // custom data
    custom?: any

    // custom fields
    entry?: any
  }) {
    let seneca = this

    let out: any = { ok: false }

    let debit = msg.debit || { aref: msg.daref }
    let credit = msg.credit || { aref: msg.caref }


    let bookEnt = await getBook(seneca, bookCanon, msg)

    if (null == bookEnt) {
      return { ok: false, why: 'book-not-found' }
    }

    if (bookEnt.closed) {
      return { ok: false, why: 'book-closed' }
    }

    if (bookEnt.start > msg.date || bookEnt.end < msg.date) {
      return { ok: false, why: 'wrong-book-period' }
    }

    let debitAccountEnt = await getAccount(seneca, accountCanon, {
      ...debit
    })

    if (null == debitAccountEnt) {
      return { ok: false, why: 'debit-account-not-found' }
    }


    let creditAccountEnt = await getAccount(seneca, accountCanon, {
      ...credit
    })

    if (null == creditAccountEnt) {
      return { ok: false, why: 'credit-account-not-found' }
    }


    let val = msg.val

    if (null == val) {
      return { ok: false, why: 'no-val' }
    }


    // If derived from a base currency
    let baseval = msg.baseval || -1
    let basecur = msg.basecur || '---' // currency code, EUR, GBP, USD, etc
    let baserate = msg.baserate || 0


    let desc = msg.desc

    if (null == desc || '' === desc) {
      return { ok: false, why: 'no-desc' }
    }


    let date = msg.date

    if (null == date) {
      return { ok: false, why: 'no-date' }
    }


    let kind = msg.kind || 'standard'

    // custom data
    let custom = msg.custom || {}


    let customFields = 'object' === typeof msg.entry ? msg.entry : {}

    let sharedEntry = {
      ...customFields,
      id$: msg.id,
      ref: makeRef(),
      val,
      desc,
      kind,
      oref: bookEnt.oref,
      org_id: bookEnt.org_id,
      bref: bookEnt.bref,
      book_id: bookEnt.id,
      custom,
      baseval,
      basecur,
      baserate,
    }

    let creditEntry = {
      ...sharedEntry,
      credit_id: creditAccountEnt.id,
      caref: creditAccountEnt.aref,
    }

    let debitEntry = {
      ...sharedEntry,
      debit_id: debitAccountEnt.id,
      daref: debitAccountEnt.aref,
    }

    let creditEnt = await seneca.entity(creditCanon).data$(creditEntry).save$()

    debitEntry.id$ = creditEnt.id
    let debitEnt = await seneca.entity(debitCanon).data$(debitEntry).save$()

    out.ok = true
    out.credit = creditEnt.data$(false)
    out.debit = debitEnt.data$(false)

    return out
  }

  async function msgVoidEntry(this: any, msg: any) {
    // TODO: generate counter entries
  }


  async function msgListEntry(this: any, msg: {
    oref: string
    book_id?: string
    bref?: string
    account_id?: string
    aref?: string
    credit?: boolean
    debit?: boolean
    q?: any
  }) {
    let seneca = this

    let q = msg.q || {}

    if (null == msg.oref) {
      return { ok: false, why: 'org-required' }
    }

    q.oref = msg.oref


    let bookEnt = await getBook(seneca, bookCanon, msg)

    if (null != bookEnt) {
      q.book_id = bookEnt.id
    }


    let accountEnt = await getAccount(seneca, accountCanon, msg)

    let credits = []
    let cq = { ...q }
    if (null != accountEnt) {
      cq.credit_id = accountEnt.id
    }
    if (null == msg.credit || !!msg.credit) {
      credits = await seneca.entity(creditCanon).list$(cq)
      credits = credits.map((entry: any) => entry.data$(false))
    }

    let debits = []
    let dq = { ...q }
    if (null != accountEnt) {
      dq.debit_id = accountEnt.id
    }
    if (null == msg.debit || !!msg.debit) {
      debits = await seneca.entity(debitCanon).list$(dq)
      debits = debits.map((entry: any) => entry.data$(false))
    }


    let totals = calcTotals(accountEnt, credits, debits)


    let out = {
      ok: true,
      ...totals,
      credits,
      debits,
      cq,
      dq,
    }

    return out
  }


}


async function getBook(seneca: any, bookCanon: string, msg: {
  id?: string
  book_id?: string
  bref?: string // Book ref: aref/book-name/book-start
}) {
  let bookEnt: any = null
  if (null != msg.bref) {
    bookEnt = await seneca.entity(bookCanon).load$({ bref: msg.bref })
  }
  if (null == bookEnt && null != msg.id) {
    bookEnt = await seneca.entity(bookCanon).load$(msg.id)
  }
  if (null == bookEnt && null != msg.book_id) {
    bookEnt = await seneca.entity(bookCanon).load$(msg.book_id)
  }

  return bookEnt
}


async function getAccount(seneca: any, accountCanon: string, msg: {
  id?: string
  account_id?: string
  aref?: string // Account ref: org_ref/path/name
}) {
  let accountEnt: any = null
  if (null != msg.aref) {
    accountEnt = await seneca.entity(accountCanon).load$({ aref: msg.aref })
  }
  if (null == accountEnt && null != msg.id) {
    accountEnt = await seneca.entity(accountCanon).load$(msg.id)
  }
  if (null == accountEnt && null != msg.account_id) {
    accountEnt = await seneca.entity(accountCanon).load$(msg.account_id)
  }

  return accountEnt
}


function calcTotals(accountEnt: any, creditEnts: any[], debitEnts: any) {
  let creditTotal = creditEnts.map((entry: any) => entry.val)
    .reduce((total: number, val: number) => val + total, 0)

  let debitTotal = debitEnts.map((entry: any) => entry.val)
    .reduce((total: number, val: number) => val + total, 0)

  let balance = accountEnt ?
    ('credit' === accountEnt.normal ?
      creditTotal - debitTotal : debitTotal - creditTotal) :
    undefined

  return {
    creditTotal,
    debitTotal,
    balance,
  }
}




// Default options.
const defaults: LedgerOptions = {
  debug: false,

  path: {
    partSize: 3,
  },

  entity: {
    base: 'ledger'
  }
}

Object.assign(ledger, {
  defaults, intern: {
    getBook
  }
})

export default ledger

if ('undefined' !== typeof module) {
  module.exports = ledger
}
