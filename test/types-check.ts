/* Copyright © 2026 Seneca Project Contributors, MIT License. */

// Compile-time checks for the ledger types. Nothing here runs: if a
// `@ts-expect-error` line stops being an error, `npm run build` fails.

import type { CreditEntity, LedgerSeneca } from '../dist/types'

export async function fieldsListIsNarrowed(seneca: LedgerSeneca) {
  const list = await seneca
    .entity<CreditEntity>('ledger/credit')
    .list$({ book_id: 'b0', fields$: ['credit_id', 'caref'] })

  const first = list[0]
  if (first) {
    const ids: string[] = [first.id, first.credit_id, first.caref]
    void ids

    // @ts-expect-error val was not loaded, so it is not on the type
    void first.val
  }

  await seneca
    .entity<CreditEntity>('ledger/credit')
    // @ts-expect-error a misspelled field name is not a declared field
    .list$({ book_id: 'b0', fields$: ['credit_idd'] })

  // Without fields$, the full entity type is returned.
  const full = await seneca.entity<CreditEntity>('ledger/credit').list$()
  const val: number | undefined = full[0]?.val
  void val
}
