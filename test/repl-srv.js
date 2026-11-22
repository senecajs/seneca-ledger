const Seneca = require('seneca')
const Plugin = require('..')

Seneca({ legacy: false })
  .test('print')
  .use('@seneca/entity')
  .use('@seneca/entity-util', { when: { active: true } })
  .use(Plugin)
  .use('@seneca/repl', { port: 31313 })
