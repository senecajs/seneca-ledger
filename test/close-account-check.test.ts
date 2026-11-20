/* Copyright © 2026 Seneca Project Contributors, MIT License. */

import { test } from 'node:test'
import { expect } from '@hapi/code'

import Seneca from 'seneca'

import Ledger from '..'

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

async function makeSeneca() {
  const seneca = Seneca({ legacy: false })
    .test()
    .use('promisify')
    .use('entity')
    .use('entity-util', { when: { active: true } })
    .use(Ledger)

  await seneca.ready()

  return seneca
}
