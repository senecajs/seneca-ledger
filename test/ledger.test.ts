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
