/* Copyright © 2026 Seneca Project Contributors, MIT License. */

import { test } from 'node:test'
import { expect } from '@hapi/code'

import Seneca from 'seneca'

import Ledger from '..'

test('list:entry does not mutate the caller q', async () => {
  const seneca = await makeSeneca()

  const q = { val: 20 }
  const out = await seneca.post('biz:ledger,list:entry', { oref: 'o0', q })
  expect(out.ok).true()
  expect(out.cq).equal({ val: 20, oref: 'o0' })
  expect(q).equal({ val: 20 })

  const frozen = Object.freeze({ val: 20 })
  const outFrozen = await seneca.post('biz:ledger,list:entry', {
    oref: 'o0',
    q: frozen,
  })
  expect(outFrozen.ok).true()
  expect(outFrozen.cq).equal({ val: 20, oref: 'o0' })
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
