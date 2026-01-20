# AGENTS.md

Agent guidance for working in the `@seneca/ledger` repository.

## Overview

This is a **Seneca.js plugin** that implements double-entry bookkeeping ledger functionality. It provides accounting primitives (accounts, books, entries) following standard debit/credit accounting principles.

**Key concepts:**
- **Account**: A ledger account with a "normal" balance side (debit or credit)
- **Book**: A time-bounded ledger period (e.g., Q1 2022)
- **Entry**: A double-entry transaction that debits one account and credits another

## Commands

| Task | Command |
|------|---------|
| Install | `npm install` |
| Build | `npm run build` |
| Test | `npm test` |
| Test specific | `npm run test-some -- "test name"` |
| Test watch | `npm run test-watch` |
| Format | `npm run prettier` |
| Format file | `npm run prettier:file <file>` |
| Watch (dev) | `npm run watch` |
| Generate docs | `npm run doc` |
| Clean | `npm run clean` |
| Reset | `npm run reset` |

**CI workflow** (`.github/workflows/build.yml`):
1. `npm install`
2. `npm i seneca seneca-promisify seneca-entity @seneca/entity-util` (peer deps)
3. `npm run prettier`
4. `npm run build`
5. `npm test`

## Project Structure

```
seneca-ledger/
├── src/
│   ├── ledger.ts         # Main plugin implementation
│   └── ledger-doc.ts     # Documentation export (placeholder)
├── test/
│   ├── ledger.test.ts    # Jest test file
│   ├── basic.messages.ts # Message-based test definitions
│   └── repl-srv.js       # REPL server for manual testing
├── dist/                 # Compiled output (generated)
├── package.json
├── tsconfig.json
└── jest.config.js
```

## Code Patterns

### Seneca Plugin Structure

The plugin uses the standard Seneca plugin pattern:

```typescript
function ledger(this: any, options: LedgerOptions) {
  const seneca: any = this
  
  seneca
    .fix('biz:ledger')
    .message('create:account', msgCreateAccount)
    .message('get:account', msgGetAccount)
    // ... more message handlers
}
```

All message patterns are prefixed with `biz:ledger`.

### Message Handler Pattern

Message handlers follow this structure:

```typescript
async function msgCreateAccount(
  this: any,
  msg: {
    account: {
      id$?: string
      org_id?: string
      oref?: string
      path?: string | string[]
      name: string
      normal: dc  // 'debit' | 'credit'
    }
  },
) {
  let seneca = this
  
  // Validation
  if (null == account) {
    return { ok: false, why: 'no-account' }
  }
  
  // Business logic...
  
  // Success response
  return { ok: true, account: accountEnt.data$(false) }
}
```

**Key patterns:**
- Always return `{ ok: true/false, ... }`
- Use `why` field for error reasons (e.g., `'account-not-found'`, `'no-val'`)
- Use `null == x` for null/undefined checks (intentional loose equality)
- Access entity data with `ent.data$(false)` to strip Seneca metadata

### Entity Naming Convention

Entities use a configurable base canon (default: `'ledger'`):

```typescript
const accountCanon = options.entity.base + '/account'  // 'ledger/account'
const bookCanon = options.entity.base + '/book'        // 'ledger/book'
const debitCanon = options.entity.base + '/debit'      // 'ledger/debit'
const creditCanon = options.entity.base + '/credit'    // 'ledger/credit'
const balanceCanon = options.entity.base + '/balance'  // 'ledger/balance'
```

### Reference System

The plugin uses human-readable references for convenience:

- **oref**: Organization reference (e.g., `'o0'`)
- **aref**: Account reference: `oref/path/name` (e.g., `'o0/Asset/Cash'`)
- **bref**: Book reference: `oref/book-name/start` (e.g., `'o0/Q1/20220101'`)

### Date Format

Dates are stored as numbers in `YYYYMMDD` format:
- `20220101` = January 1, 2022
- `20220331` = March 31, 2022

### Double-Entry Accounting

Every entry creates two records with matching IDs:
1. A credit entry in `ledger/credit`
2. A debit entry in `ledger/debit`

Balance calculation:
- For **debit normal** accounts: `balance = debitTotal - creditTotal`
- For **credit normal** accounts: `balance = creditTotal - debitTotal`

## Testing

### Test Structure

Tests use `seneca-msg-test` for message-based testing:

```typescript
// test/basic.messages.ts
export default {
  print: false,
  pattern: 'biz:ledger',
  allow: { missing: true },
  calls: [
    {
      name: 'shop-a0',
      pattern: 'create:account',
      params: { account: { /* ... */ } },
      out: { ok: true, account: { /* expected */ } },
    },
    // ... more test cases
  ],
}
```

### Running Tests

```bash
# All tests
npm test

# Specific test by name
npm run test-some -- "happy"

# Watch mode
npm run test-watch
```

### Test Setup Pattern

```typescript
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
```

Required plugins:
- `seneca-promisify`: Async/await support
- `seneca-entity`: Entity persistence
- `@seneca/entity-util`: Entity utilities (timestamps, etc.)

## TypeScript

- **Target**: ES2019
- **Module**: CommonJS
- **Strict mode**: Enabled
- **Source maps**: Enabled
- **Output**: `dist/`

The plugin exports both ES module and CommonJS:

```typescript
export default ledger

if ('undefined' !== typeof module) {
  module.exports = ledger
}
```

## Code Style

- **Prettier config**: Single quotes, no semicolons
- **Indentation**: 2 spaces
- **Null checks**: Use `null == x` (loose equality) for null/undefined
- **Async**: All message handlers are async
- **Types**: Defined at top of file, not exported

## API Reference

### Accounts

| Pattern | Description |
|---------|-------------|
| `create:account` | Create new account |
| `get:account` | Get account by id/aref |
| `list:account` | List accounts by org |
| `update:account` | Update account fields |
| `balance:account` | Calculate account balance |
| `close:account` | Close account with balancing entries |
| `export:account,format:csv` | Export account to CSV |

### Books

| Pattern | Description |
|---------|-------------|
| `create:book` | Create new book/period |
| `get:book` | Get book by id/bref |
| `list:book` | List books by org |
| `update:book` | Update book fields |
| `balance:book` | Balance all accounts in book (TODO) |
| `close:book` | Close book and transfer balances |
| `export:book,format:csv` | Export all accounts to CSV |

### Entries

| Pattern | Description |
|---------|-------------|
| `create:entry` | Create double-entry transaction |
| `list:entry` | List entries with filters |
| `void:entry` | Void an entry (TODO) |

### Balances

| Pattern | Description |
|---------|-------------|
| `list:balance` | List saved balances (TODO) |

## Gotchas

1. **Book date validation**: Entries must have dates within the book's `start`/`end` range
2. **Closed books**: Cannot add entries to closed books (returns `{ ok: false, why: 'book-closed' }`)
3. **Opening Balance account**: Auto-created when closing accounts; cannot be closed itself
4. **Entry IDs**: Both credit and debit entries share the same ID
5. **Balance calculation**: Depends on account's `normal` field (debit vs credit)
6. **Path splitting**: Account paths can be string (`'Asset'`) or array (`['Asset', 'Current']`)

## Development Notes

- The `msgListBalance` and `msgBalanceBook` functions are TODO stubs
- The `msgVoidEntry` function is a TODO stub
- Tests cover the full accounting cycle: create accounts → create book → post entries → close accounts → close book → verify balances

## Dependencies

**Peer dependencies** (must be installed separately):
- `seneca` (>=3 or >=4.0.0-rc2)
- `seneca-entity` (>=19)
- `seneca-promisify` (>=3)

**Dev dependencies include:**
- `jest` with `esbuild-jest` transform
- `typescript`
- `prettier`
- `seneca-msg-test`
- `seneca-doc`
