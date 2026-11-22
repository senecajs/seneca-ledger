# Changes

## 0.7.0 2026-11-22

First entry of this change log. Earlier versions are on npm and in the git
history.

Seneca 4:

- The peer dependency is `seneca` `^4.0.0` (was `>=3||>=4.0.0-rc2`). Seneca 3
  users stay on `@seneca/ledger@0.6`.
- The entity plugin peer is `@seneca/entity` `^29.0.0` (was `seneca-entity`
  `>=19`).
- The peer dependency `seneca-promisify` is removed. Seneca 4 has promises
  built in (D4).
- Node.js 24 or later (`engines.node` `>=24`), as in 0.6.
- TypeScript: the types load `@seneca/entity`, which declares the `entity`
  member on the Seneca 4 `Instance` (B10).
- The tests and the README load plugins by their full names, such as
  `@seneca/entity` (B14), and no longer use `promisify`.

Also in this release, from `main` since 0.6.4:

- Types: precise types replace `any` in the public types, the default export
  is typed as `LedgerPlugin`, and the types can be imported from the package
  root (`import type { ListEntryInput } from '@seneca/ledger'`). This is a
  breaking change for TypeScript users only.
- Types: `list$` with `fields$` is typed by the fields loaded.
- Fixed: `require('@seneca/ledger/dist/types')` threw a `ReferenceError`.
- Fixed: `close:account` reports a failed balance check as
  `{ ok: false, why: 'closing-balance-check-failed' }` (or
  `'opening-balance-check-failed'`) instead of `ok: true` with an undefined
  balance.
- Fixed: `list:entry` copies the caller's `q` instead of changing it.
- Fixed: `export:book` orders accounts by normal balance, name and `aref`,
  with a fixed sort locale, so the order no longer depends on the store or
  the host.

Build:

- `test/tsconfig.json` sets `checkers: 1`, so that TypeScript 7 writes the
  same `dist-test` declarations on every build.
- `prepublishOnly` runs the build. `repository.url` uses `git+https`, and
  `publishConfig.access` is `public`.
