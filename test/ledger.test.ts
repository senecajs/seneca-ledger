/* Copyright © 2026 Seneca Project Contributors, MIT License. */

import { describe, test } from 'node:test'
import { expect } from '@hapi/code'

import Seneca from 'seneca'
import SenecaMsgTest from 'seneca-msg-test'
// import { Maintain } from '@seneca/maintain'

import LedgerDoc from '..'
import Ledger from '..'

import BasicMessages from './basic.messages'
import AccountMessages from './account.messages'
import BookMessages from './book.messages'
import EntryMessages from './entry.messages'
import InputMessages from './input.messages'

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

  test('basic.messages', async () => {
    const seneca = await makeSeneca()
    await SenecaMsgTest(seneca, BasicMessages)()
  })

  test('account.messages', async () => {
    const seneca = await makeSeneca()
    await SenecaMsgTest(seneca, AccountMessages)()
  })

  test('book.messages', async () => {
    const seneca = await makeSeneca()
    await SenecaMsgTest(seneca, BookMessages)()
  })

  test('entry.messages', async () => {
    const seneca = await makeSeneca()
    await SenecaMsgTest(seneca, EntryMessages)()
  })

  test('input.messages', async () => {
    const seneca = await makeSeneca()
    await SenecaMsgTest(seneca, InputMessages)()
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
