// Calls are order-dependent: they run in sequence against one shared seneca.

import setup from './basic-1-setup.messages'
import closeAccount from './basic-2-close-account.messages'
import closeBook from './basic-3-close-book.messages'
import exportCsv from './basic-4-export.messages'
import edge from './basic-5-edge.messages'

export default {
  print: false,
  pattern: 'biz:ledger',
  allow: { missing: true },

  calls: [...setup, ...closeAccount, ...closeBook, ...exportCsv, ...edge],
}
