/* Copyright © 2026 Seneca Project Contributors, MIT License. */

import { describe, test } from 'node:test'
import { expect } from '@hapi/code'

import Seneca from 'seneca'
import SenecaMsgTest from 'seneca-msg-test'
// import { Maintain } from '@seneca/maintain'

import LedgerDoc from '..'
import Ledger from '..'

import LedgerLifecycleMessages from './ledger-lifecycle.messages'
import AccountValidationMessages from './account-validation.messages'
import AccountRetrievalMessages from './account-retrieval.messages'
import AccountBalanceCloseExportMessages from './account-balance-close-export.messages'
import BookSingleMessages from './book-single.messages'
import BookIsolationMessages from './book-isolation.messages'
import EntryValidationMessages from './entry-validation.messages'

// Each suite runs against its own fresh seneca instance so test contexts stay
// isolated. The lifecycle suite is the only intentionally ordered, stateful
// scenario; every other suite is a coherent set of edge cases that seeds just
// the state it needs (see ./seed).
const suites = {
  'ledger-lifecycle': LedgerLifecycleMessages,
  'account-validation': AccountValidationMessages,
  'account-retrieval': AccountRetrievalMessages,
  'account-balance-close-export': AccountBalanceCloseExportMessages,
  'book-single': BookSingleMessages,
  'book-isolation': BookIsolationMessages,
  'entry-validation': EntryValidationMessages,
}

describe('ledger', () => {
  test('happy', async () => {
    expect(LedgerDoc).exist()

    const seneca = Seneca({ legacy: false })
      .test()
      .use('promisify')
      .use('entity')
      .use(Ledger)
    await seneca.ready()
  })

  for (const [name, messages] of Object.entries(suites)) {
    test(name, async () => {
      const seneca = await makeSeneca()
      await SenecaMsgTest(seneca, messages)()
    })
  }

  test('close:account fails when a balance check fails', async () => {
    const seneca = await makeSeneca()

    await seneca.post('biz:ledger,create:account', {
      account: { oref: 'o9', path: 'Asset', name: 'Cash', normal: 'debit' },
    })
    await seneca.post('biz:ledger,create:account', {
      account: { oref: 'o9', path: 'Income', name: 'Sales', normal: 'credit' },
    })
    await seneca.post('biz:ledger,create:book', {
      book: { oref: 'o9', name: 'Q1', start: 20220101, end: 20220331 },
    })
    const entry = await seneca.post('biz:ledger,create:entry', {
      oref: 'o9',
      bref: 'o9/Q1/20220101',
      daref: 'o9/Asset/Cash',
      caref: 'o9/Income/Sales',
      val: 100,
      desc: 'sale',
      date: 20220115,
    })
    expect(entry.ok).true()

    // close:account calls balance:account once for the current balance,
    // then again to check the result. Let the first call through and fail
    // the check.
    let balanceCalls = 0
    seneca.message(
      'biz:ledger,balance:account',
      async function (this: any, msg: any) {
        balanceCalls++
        if (1 < balanceCalls) {
          return { ok: false, why: 'forced-balance-failure' }
        }
        return this.prior(msg)
      },
    )

    const out = await seneca.post('biz:ledger,close:account', {
      aref: 'o9/Asset/Cash',
      bref: 'o9/Q1/20220101',
    })
    expect(out).include({ ok: false, why: 'closing-balance-check-failed' })
    expect(out.error).include({ ok: false, why: 'forced-balance-failure' })
  })

  // test('maintain', Maintain)
})

async function makeSeneca() {
  const seneca = Seneca({ legacy: false })
    .test()
    .use('promisify')
    .use('entity')
    .use('entity-util', { when: { active: true } })
    .use(Ledger)

  await seneca.ready()

  // print all message patterns
  // console.log(seneca.list())

  return seneca
}
