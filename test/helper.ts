/* Copyright © 2026 Seneca Project Contributors, MIT License. */

import Seneca from 'seneca'

import Ledger from '..'

export async function makeSeneca() {
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
