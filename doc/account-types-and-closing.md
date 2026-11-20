# Account types and book closing: requirements

This document is for the contributor who will add account types to `@seneca/ledger` and make book closing follow standard accounting rules. It explains the theory, describes what the plugin does today, and lists what must be true when the work is done. It does not prescribe the implementation; that design is yours, and you should explain it in the pull request.

## 1. Theory in brief

Every account belongs to one of two groups.

- **Temporary accounts** measure activity during one period: revenues, expenses, gains and losses. Owner withdrawals and dividends are also temporary.
- **Permanent accounts** show a position at a point in time: assets, liabilities and equity. This includes accounts that offset another account, such as accumulated depreciation.

When a period ends:

1. Each temporary account is brought to zero by posting the opposite of its balance. An account with a credit balance is debited; an account with a debit balance is credited.
2. The other side of each of those entries goes to one permanent equity account. It is commonly called Retained Earnings (companies) or Owner's Capital (sole owners).
3. Permanent accounts are not reset. Their ending balances are the opening balances of the next period.

Amounts in the books are never negative. A balance is either a debit balance or a credit balance.

- An account's **normal side** is the side its balance is expected on: debit for assets and expenses, credit for liabilities, equity and revenues.
- Occasionally the balance is on the other side. Examples: a cash account when payments exceed the funds, a customer account after an overpayment, an expense account when refunds exceed the period's expenses.
- The closing entry is always the opposite of the balance the account actually has, whichever side that is.

The result on the equity account needs no special case:

- With a profit (revenues greater than expenses), the equity account's credit balance grows.
- With a loss, it shrinks. It can go below zero, which is a valid state (an accumulated deficit) and carries forward like any other balance.
- At break-even it does not change.

After closing, the next period starts with every temporary account at zero and every permanent account at its previous ending balance. Total debits still equal total credits.

There are two accepted bookkeeping techniques for carrying permanent accounts into the next period. They produce the same opening balances.

- **Carry-forward.** Permanent accounts are simply left alone. This is common in English-speaking practice and in tools such as GnuCash and ERPNext.
- **Closing and opening balance accounts.** Every permanent account is zeroed against a closing balance account at the end of the period and reopened against an opening balance account at the start of the next. This is the method taught and used in much of continental Europe (for example Schlussbilanzkonto and Eröffnungsbilanzkonto in Germany, asiento de cierre and asiento de apertura in Spain, accounts 890 and 891 in the French chart of accounts). hledger's `close --migrate` works the same way.

This plugin uses the second technique, and that does not change. With it, the closing entries must stay identifiable, so that the balances of a closed period can still be reported as they were before closing.

One rule holds under both techniques, and European law states it explicitly (Directive 2013/34/EU, Article 6): the opening balances of a period must equal the closing balances of the previous period.

The length of a period is a choice of each organisation. The rules are the same for a month, a quarter or a year.

## 2. What the plugin does today (`main`)

Read these before starting: `src/ledger.ts` (`msgCreateAccount`, `msgUpdateAccount`, `msgCloseAccount`, `msgCloseBook`), `src/types.ts`, `src/ledger-doc.ts`, and the specs in `test/`.

- **Accounts** have `normal` (`debit` or `credit`) and a free-form `path`. There is no field that says whether an account is temporary or permanent.
- **`update:account`** saves whatever fields it receives, with no validation.
- **`close:account`** posts a `closing` entry that moves the account's whole balance against the opening balance account (default `<oref>/Equity/Opening Balance`, created if missing). If a target book is given, it also posts an `opening` entry there, so the balance reappears in the target book.
- **`close:book`** finds every account with entries in the book and runs `close:account` on each one, in batches. It marks the book closed only when every account ended at zero. With a target book it also checks that the opening balance account nets to zero there.
- **Consequence:** income and expense balances are carried into the next book like assets and liabilities. Nothing is ever moved into an equity account.
- A book can have any start and end date, or no end (`end: -1`). Closing an open-ended book sets its end.
- **The target book is optional.** A book can be closed when no next book exists. However, `close:book` refuses a book that is already closed, so a book closed without a target can never be carried forward later.
- **Balances after closing.** `balance:account` on a closed book returns zero for every closed account. There is no way to ask for the balance before the closing entries, although those entries are marked with `kind: 'closing'`.

## 3. Goals and constraints

- **G1.** A caller can declare an account as temporary or permanent, at creation or later.
- **G2.** Closing treats the two groups as the theory in section 1 says.
- **C1. Backward compatible.** A project that upgrades and changes nothing must get exactly the results it gets today. Closings usually run unattended; they must not start failing or return different values.
- **C2. Agnostic.** The plugin must not assume a chart of accounts, account names, a business form, or a period length. It must work the same for monthly, quarterly, yearly or irregular books. Do not add any concept of fiscal year.
- **C3.** Existing message patterns, parameters and result fields keep their names and meanings. New fields are additions.

## 4. Requirements

### R1. Account type

- An account has an optional field `type` with exactly two valid values: `temporary` and `permanent`.
- The plugin does not derive the type from `path`, `name` or `normal`. Only the caller knows that, for example, a withdrawals account under `Equity` is temporary.
- An account without a type is **treated as permanent** wherever the type matters. The plugin never writes a type the caller did not send.

```
effective type of an account:
  the account's type if it has one
  otherwise 'permanent'
```

### R2. `create:account`

- Accepts `type`. It is optional.
- An invalid value is rejected with a clear `why` code, and nothing is saved.
- Creating an account without `type` behaves exactly as today, and the saved account has no `type` field.

### R3. `update:account`

- A caller can set `type` on an account that has none, and can change it later.
- An invalid value is rejected with a clear `why` code, and the account is left unchanged.
- Changing the type never creates, changes or removes entries. It only affects closings that run afterwards.
- Updates that do not mention `type` behave exactly as today.

### R4. The equity account for closing

- Temporary accounts are closed into one permanent equity account, called the _equity account_ below.
- Default: `<oref>/Equity/Retained Earnings`, credit-normal. The plugin creates it when it is first needed, the same way it creates the opening balance account today.
- The caller can name a different account on `close:account` and `close:book`.
- If the caller names an account that cannot be used, the call fails **before any entry is posted**, with a distinct `why` code for each case:
  - the account does not exist (do not silently create a different one);
  - its effective type is temporary;
  - it is the opening balance account;
  - on `close:account`, it is the account being closed.

### R5. `close:account`

```
close account A in book B (optional target book T):
  if A's effective type is 'permanent':
    behave exactly as today
  if A's effective type is 'temporary':
    post one closing entry in B that brings A to zero,
      with the other side on the equity account
    post nothing in T for A
    A's balance in B ends at zero; A has no balance in T
```

- The closing entry is the opposite of the balance the account actually holds: a debit balance is closed with a credit, and a credit balance with a debit. This is usually, but not always, the opposite of the account's normal side.
- The plugin reports a balance that is on the side opposite to `normal` as a negative number. Such an account must still end at zero.
- A temporary account with a zero balance posts nothing and succeeds, as today.
- The result keeps every existing field. It additionally reports the effective type that was used and, for a temporary account, the equity account.

### R6. `close:book`

```
close book B (optional target book T):
  validate as today
  resolve the equity account (R4); fail before posting if it is not usable

  temporary set = accounts with entries in B whose effective type is 'temporary'
  permanent set = every other account with entries in B

  step 1: close every account in the temporary set (R5)
  step 2: only after step 1 has fully finished,
          close every account in the permanent set as today,
          and this set must include the equity account
  step 3: run the checks, then mark B closed only if they all hold
```

Rules that follow from the theory:

- **Order matters.** The equity account must be closed and carried forward with its balance _after_ it has received all the temporary balances.
- **The equity account must be carried forward even if it had no entries in B before step 1.** Today accounts are discovered from the book's entries before anything is closed; make sure this case is not missed.
- **Checks before marking the book closed:**
  - every account closed in B ends at zero in B (today's rule, unchanged);
  - with a target book, the opening balance account nets to zero in T (today's rule, unchanged);
  - with a target book, no temporary account has a balance or an opening entry in T;
  - the change in the equity account caused by step 1 equals the net of the temporary balances.
- **Retry is safe.** If a closing fails part-way, running `close:book` again must complete it without posting any entry twice.
- **No target book.** Step 1 still applies. Step 2 behaves as today.
- **Open-ended books** are handled as today.
- The result keeps every existing field with its current meaning. It additionally reports the equity account used, how many accounts were temporary and permanent, and the signed net result moved into equity (positive for a profit, negative for a loss).

### R7. Opening the next book

- In the target book, each permanent account starts with its ending balance from the closed book, as today.
- Temporary accounts start at zero and receive no opening entry.
- The equity account's opening balance includes the closed period's result. A negative balance is carried with the correct sign.
- An account that was permanent (or untyped) in earlier periods and is then set to `temporary` may already hold a carried-forward balance. Its next closing moves the whole balance into equity. This is expected; document it.

### R8. Opening a book later from a closed book

Callers do not always have the next book ready when they close. Both orders must work:

- **Next book first.** Create the next book, then close the old one with it as target. This works today and must keep working.
- **Close first, open later.** Close a book with no target. At any later time, carry its balances into a new book.

```
open book T from closed book B:
  B must be closed; T must be open
  T receives exactly the opening entries it would have received
    if B had been closed with T as target
  temporary accounts receive nothing
  doing it a second time for the same B and T posts nothing
```

- Propose the message pattern and parameters for this to the core committers before you implement it.
- The result must be identical in both orders: same entries in T, same balances.
- State what happens when a caller tries to carry one closed book into two different books, and justify the choice.

### R9. Balances of a closed period

- A caller can obtain an account's balance in a book **as it was before the closing entries**, for temporary and permanent accounts alike. This is what an income statement or a balance sheet of the closed period needs.
- The default behaviour of `balance:account` does not change.
- Closing and opening entries stay distinguishable from ordinary entries (`kind`), including the new entries that close temporary accounts.

### R10. Backward compatibility

- With no account typed, every message returns the same output and posts the same entries as on `main`.
- **Acceptance test:** the existing specs in `test/` pass without being edited. Add new specs; do not change existing expectations. If you believe one must change, raise it with the core committers first.
- Permanent accounts keep being zeroed in the closed book through the opening balance account. This is by design (see section 1), not a temporary measure.
- Do not change how amounts are compared or rounded.

### R11. Documentation and types

- Update `src/types.ts`, including the inputs, results and the action map, so TypeScript callers see the new fields.
- Update `src/ledger-doc.ts` and regenerate the README sections with `npm run doc`.
- Add a short README section that explains account types, the default-to-permanent rule, the equity account, and how to adopt types in an existing ledger.
- Add a release note. This is a feature release with no breaking change.

## 5. Automated tests

Tests are the main evidence that this work is correct. A pull request without the coverage below is not ready for review.

General rules:

- Follow the existing style: message specs in `test/*.messages.ts`, run from `test/ledger.test.ts`.
- Assert on the entries that were posted (`list:entry`) and on balances (`balance:account`), not only on the reply of `close:book`.
- Use exact amounts. Choose figures that make a wrong direction or a double posting visible.
- Every new `why` code and every new branch has at least one test.
- Run with Node's built-in coverage and include the figures for `src/ledger.ts` in the pull request.
- `npm run build`, `npm test` and `npm run prettier:check` all pass.

Invariants to assert in every closing scenario:

- In each book, total debits equal total credits.
- After closing with a target book, only permanent accounts have a balance in the target book.
- The equity account changes by exactly revenues minus expenses.
- Each permanent account's opening balance in the target book equals its pre-closing balance in the closed book.
- The opening balance account nets to zero in the target book.

Scenarios that must be covered:

| Area           | Scenario                                                                                                                               |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Types          | Create with each valid type, without a type, and with an invalid type                                                                  |
| Types          | Update sets a type on an untyped account; changes a type; rejects an invalid type and leaves the account unchanged                     |
| Types          | An untyped account is not given a type by any message                                                                                  |
| Result         | Period with a profit                                                                                                                   |
| Result         | Period with a loss                                                                                                                     |
| Result         | Break-even period                                                                                                                      |
| Result         | Equity account goes below zero and the negative balance is carried into the next book                                                  |
| Result         | Debit-normal temporary account holding a credit balance, and credit-normal temporary account holding a debit balance: both end at zero |
| Result         | Temporary account with a zero balance                                                                                                  |
| Equity account | Default account is created when missing and reused when present                                                                        |
| Equity account | Caller override is used                                                                                                                |
| Equity account | Each rejection in R4, with proof that no entry was posted                                                                              |
| Equity account | Equity account had no entries in the book before closing and is still carried forward                                                  |
| Workflow       | `close:account` directly on a temporary account, with and without a target book                                                        |
| Workflow       | `close:book` without a target book                                                                                                     |
| Workflow       | Open-ended book                                                                                                                        |
| Workflow       | Retry after a partial failure posts nothing twice                                                                                      |
| Workflow       | Entries cannot be added to the closed book (unchanged rule)                                                                            |
| Open later     | Close without a target, then open a new book from the closed one; entries and balances identical to closing with a target              |
| Open later     | Opening twice from the same closed book posts nothing the second time                                                                  |
| Open later     | Rejections: source book not closed, target book closed, unknown books                                                                  |
| Closed period  | Pre-closing balance of temporary and permanent accounts is retrievable after closing; default `balance:account` output unchanged       |
| Periods        | Three consecutive monthly books: equity accumulates and temporary accounts restart at zero each month                                  |
| Periods        | Books of unequal length                                                                                                                |
| Compatibility  | All accounts untyped: results identical to `main` (existing specs unedited)                                                            |
| Compatibility  | Mix of typed and untyped accounts in one book                                                                                          |
| Compatibility  | Account switched to `temporary` after holding a carried-forward balance (R7)                                                           |
| Isolation      | Two organisations, and two books of one organisation, do not affect each other                                                         |
| Export         | `export:account` and `export:book` still work after a closing with types                                                               |

## 6. Out of scope

- Switching to the carry-forward technique for permanent accounts (see section 1).
- An intermediate "income summary" account.
- Reopening a closed book, reversing entries, and `void:entry`.
- Account classes such as asset or liability, and any validation of `path`.
- Any notion of fiscal year or period calendar.

## 7. What to include in the pull request

- A short description of your design and why you chose it.
- How each requirement (R1 to R11) is met, with the tests that prove it.
- Coverage figures and confirmation that the existing specs are unedited.
- Anything in this document you found unclear or disagree with. Raise questions early rather than guessing.
