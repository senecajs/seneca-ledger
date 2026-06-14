// Calls are order-dependent: they run in sequence against one shared seneca.

import single from './book-1-single.messages'
import multibook from './book-2-multibook.messages'

export default {
  print: false,
  pattern: 'biz:ledger',
  allow: { missing: true },

  calls: [...single, ...multibook],
}
