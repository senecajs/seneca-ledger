"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* NOTES
 * oref, aref, bref are mostly for human repl convenience
 *
 * Unique constraints:
 * ledger/account: aref
 */
function ledger(options) {
    const seneca = this;
    const accountCanon = options.entity.base + '/account';
    const bookCanon = options.entity.base + '/book';
    const debitCanon = options.entity.base + '/debit';
    const creditCanon = options.entity.base + '/credit';
    const balanceCanon = options.entity.base + '/balance';
    const makeRef = seneca.util.Nid({ length: 16 });
    seneca
        .fix('biz:ledger')
        .message('create:account', msgCreateAccount)
        .message('get:account', msgGetAccount)
        .message('list:account', msgListAccount)
        .message('update:account', msgUpdateAccount)
        .message('list:account', msgListAccount)
        .message('balance:account', msgBalanceAccount)
        .message('export:account,format:csv', msgExportAccountCSV)
        .message('close:account', msgCloseAccount)
        .message('create:book', msgCreateBook)
        .message('get:book', msgGetBook)
        .message('update:book', msgUpdateBook)
        .message('list:book', msgListBook)
        .message('export:book,format:csv', msgExportBookCSV)
        .message('close:book', msgCloseBook)
        .message('list:balance', msgListBalance)
        .message('balance:book', msgBalanceBook)
        .message('create:entry', msgCreateEntry)
        .message('void:entry', msgVoidEntry)
        .message('list:entry', msgListEntry);
    async function msgCreateAccount(msg) {
        let seneca = this;
        let account = msg.account;
        if (null == account) {
            return { ok: false, why: 'no-account' };
        }
        let oref = null == account.oref ? account.org_id : account.oref;
        let org_id = null == account.org_id ? account.oref : account.org_id;
        if (null == org_id) {
            return { ok: false, why: 'no-org' };
        }
        let name = account.name;
        if (null == name || '' == name) {
            return { ok: false, why: 'no-name' };
        }
        let path = ('string' === typeof account.path
            ? account.path.split('/')
            : account.path) || [];
        let pathParts = Array(options.path.partSize)
            .fill(null)
            .reduce((a, _, i) => ((a['path' + i] = null == path[i] ? '' : path[i]),
            a), {});
        let aref = account.oref + '/' + path.join('/') + '/' + name;
        let normal = account.normal;
        if ('credit' !== normal && 'debit' !== normal) {
            return { ok: false, why: 'invalid-normal' };
        }
        let accountEnt = await seneca
            .entity(accountCanon)
            .data$({
            id$: account.id$,
            ...pathParts,
            org_id,
            oref,
            aref,
            path,
            name,
            normal,
        })
            .save$();
        return { ok: true, account: accountEnt.data$(false) };
    }
    async function msgGetAccount(msg) {
        let seneca = this;
        let accountEnt = await getAccount(seneca, accountCanon, msg);
        if (null == accountEnt) {
            return { ok: false, why: 'account-not-found' };
        }
        return { ok: true, account: accountEnt.data$(false) };
    }
    async function msgListAccount(msg) {
        let seneca = this;
        let org_id = null == msg.org_id ? msg.oref : msg.org_id;
        let q = {};
        if (null != org_id) {
            q.org_id = org_id;
        }
        let list = await seneca.entity(accountCanon).list$(q);
        list = list.map((ent) => ent.data$(false));
        return { ok: true, q, list };
    }
    async function msgUpdateAccount(msg) {
        let seneca = this;
        let accountEnt = await getAccount(seneca, accountCanon, msg);
        if (null == accountEnt) {
            return { ok: false, why: 'account-not-found' };
        }
        if (null == msg.account) {
            return { ok: false, why: 'no-account-update' };
        }
        await accountEnt.data$(msg.account).save$();
        return { ok: true, account: accountEnt.data$(false) };
    }
    // TODO: save to ledger/balance by book, default but optional
    async function msgBalanceAccount(msg) {
        let seneca = this;
        let accountEnt = await getAccount(seneca, accountCanon, msg);
        if (null == accountEnt) {
            return { ok: false, why: 'account-not-found' };
        }
        let bookEnt = await getBook(seneca, bookCanon, msg);
        if (null == bookEnt) {
            return { ok: false, why: 'book-not-found' };
        }
        let cq = {
            credit_id: accountEnt.id,
            book_id: bookEnt.id,
        };
        let dq = {
            debit_id: accountEnt.id,
            book_id: bookEnt.id,
        };
        let credits = await seneca.entity(creditCanon).list$(cq);
        let debits = await seneca.entity(debitCanon).list$(dq);
        // let creditTotal = credits.map((entry: any) => entry.val)
        //   .reduce((total: number, val: number) => val + total, 0)
        // let debitTotal = debits.map((entry: any) => entry.val)
        //   .reduce((total: number, val: number) => val + total, 0)
        // let balance = 'credit' === accountEnt.normal ? creditTotal - debitTotal :
        //   debitTotal - creditTotal
        let totals = calcTotals(accountEnt, credits, debits);
        const currUnixTime = Date.now();
        let out = {
            ok: true,
            ...totals,
            account_id: accountEnt.id,
            aref: accountEnt.aref,
            book_id: bookEnt.id,
            bref: bookEnt.bref,
            start: bookEnt.start,
            end: bookEnt.end,
            // creditTotal: creditTotal,
            // debitTotal: debitTotal,
            // balance,
            creditCount: credits.length,
            debitCount: debits.length,
            normal: accountEnt.normal,
            when: currUnixTime,
            date: formatDateToYYYYMMDD(currUnixTime),
            time: timestamp2timestr(currUnixTime),
        };
        return out;
    }
    async function msgExportAccountCSV(msg) {
        const seneca = this;
        const [accountEnt, bookEnt] = await Promise.all([
            getAccount(seneca, accountCanon, msg),
            getBook(seneca, bookCanon, msg),
        ]);
        if (!accountEnt) {
            return { ok: false, why: 'account-not-found' };
        }
        if (!bookEnt) {
            return { ok: false, why: 'bookEnt-not-found' };
        }
        const [balanceResult, entriesResult] = await Promise.all([
            seneca.post('biz:ledger,balance:account', {
                account_id: accountEnt.id,
                book_id: bookEnt.id,
                save: false,
            }),
            seneca.post('biz:ledger,list:entry', {
                oref: accountEnt.oref,
                book_id: bookEnt.id,
                account_id: accountEnt.id,
            }),
        ]);
        if (!balanceResult.ok) {
            return {
                ok: false,
                why: 'balance-calculation-failed',
                error: balanceResult,
            };
        }
        if (!entriesResult.ok) {
            return { ok: false, why: 'entries-fetch-failed', error: entriesResult };
        }
        const entries = processEntries(entriesResult, bookEnt.start, accountEnt.normal);
        const csvContent = generateAccountCSV(accountEnt, bookEnt, entries, balanceResult);
        const fileName = msg.file_name ||
            `${accountEnt.name}_${bookEnt.name}_${bookEnt.oref}.csv`
                .toLowerCase()
                .replace(/[^a-zA-Z0-9.]/g, '_');
        let closingBalance = 0;
        if (accountEnt.name !== 'Opening Balance' && entries.length > 0) {
            const closingEntry = entries.find((entry) => entry.kind === 'closing');
            closingBalance = closingEntry ? closingEntry.val : 0;
        }
        return {
            ok: true,
            account_id: accountEnt.id,
            aref: accountEnt.aref,
            normal: accountEnt.normal,
            book_id: bookEnt.id,
            bref: bookEnt.bref,
            fileName,
            content: csvContent,
            entry_count: entries.length,
            final_balance: balanceResult.balance,
            closing_balance: closingBalance,
        };
    }
    async function msgCloseAccount(msg) {
        var _a;
        const seneca = this;
        const [accountEnt, bookEnt] = await Promise.all([
            getAccount(seneca, accountCanon, msg),
            getBook(seneca, bookCanon, msg),
        ]);
        if (null == accountEnt) {
            return { ok: false, why: 'account-not-found' };
        }
        if (null == bookEnt) {
            return { ok: false, why: 'book-not-found' };
        }
        if (accountEnt.name === 'Opening Balance' &&
            ((_a = accountEnt.path) === null || _a === void 0 ? void 0 : _a.includes('Equity'))) {
            return {
                ok: false,
                why: 'cannot-close-opening-balance-account',
            };
        }
        let targetBookEnt = null;
        if (msg.target_book_id || msg.target_bref) {
            targetBookEnt = await getBook(seneca, bookCanon, {
                book_id: msg.target_book_id,
                bref: msg.target_bref,
            });
            if (null == targetBookEnt) {
                return { ok: false, why: 'target-book-not-found' };
            }
        }
        const balanceResult = await seneca.post('biz:ledger,balance:account', {
            account_id: accountEnt.id,
            book_id: bookEnt.id,
            save: false,
        });
        if (!balanceResult.ok) {
            return { ok: false, why: 'balance-result-failed', error: balanceResult };
        }
        const closingDate = msg.end || bookEnt.end;
        const currentBalance = balanceResult.balance;
        if (currentBalance === 0) {
            return {
                ok: true,
                account_id: accountEnt.id,
                aref: accountEnt.aref,
                book_id: bookEnt.id,
                bref: bookEnt.bref,
                target_book_id: targetBookEnt === null || targetBookEnt === void 0 ? void 0 : targetBookEnt.id,
                target_bref: targetBookEnt === null || targetBookEnt === void 0 ? void 0 : targetBookEnt.bref,
                original_balance: 0,
                closing_balance: 0,
                opening_balance: 0,
                opening_balance_aref: null,
                closing_entries: [],
                opening_entries: [],
                closing_date: closingDate,
            };
        }
        const obAref = msg.opening_balance_aref || `${accountEnt.oref}/Equity/Opening Balance`;
        let obEnt = await getAccount(seneca, accountCanon, {
            aref: obAref,
        });
        if (null == obEnt) {
            const createResult = await seneca.post('biz:ledger,create:account', {
                account: {
                    org_id: accountEnt.org_id,
                    oref: accountEnt.oref,
                    path: ['Equity'],
                    name: 'Opening Balance',
                    normal: 'credit',
                },
            });
            if (!(createResult === null || createResult === void 0 ? void 0 : createResult.ok)) {
                return { ok: false, why: 'opening-balance-create-fail', error: obEnt };
            }
            obEnt = createResult.account;
        }
        const absBalance = Math.abs(currentBalance);
        const isDebitBalance = (accountEnt.normal === 'debit' && currentBalance > 0) ||
            (accountEnt.normal === 'credit' && currentBalance < 0);
        const baseEntry = {
            val: absBalance,
        };
        const entryPromises = [];
        const closingEntry = {
            ...baseEntry,
            desc: 'Closing Balance',
            book_id: bookEnt.id,
            date: closingDate,
            kind: 'closing',
            daref: isDebitBalance ? obEnt.aref : accountEnt.aref,
            caref: isDebitBalance ? accountEnt.aref : obEnt.aref,
        };
        entryPromises.push(seneca.post('biz:ledger,create:entry', closingEntry));
        if (targetBookEnt) {
            const openingEntry = {
                ...baseEntry,
                desc: 'Opening Balance',
                book_id: targetBookEnt.id,
                date: targetBookEnt.start,
                kind: 'opening',
                daref: isDebitBalance ? accountEnt.aref : obEnt.aref,
                caref: isDebitBalance ? obEnt.aref : accountEnt.aref,
            };
            entryPromises.push(seneca.post('biz:ledger,create:entry', openingEntry));
        }
        const results = await Promise.all(entryPromises);
        let closingResult = results[0];
        let openingResult = results[1];
        if (!closingResult.ok) {
            return { ok: false, why: 'closing-entry-failed', error: closingResult };
        }
        if (targetBookEnt && !openingResult.ok) {
            return { ok: false, why: 'opening-entry-failed', error: openingResult };
        }
        const verifyPromises = [
            seneca.post('biz:ledger,balance:account', {
                account_id: accountEnt.id,
                book_id: bookEnt.id,
                save: false,
            }),
        ];
        if (targetBookEnt) {
            verifyPromises.push(seneca.post('biz:ledger,balance:account', {
                account_id: accountEnt.id,
                book_id: targetBookEnt.id,
                save: false,
            }));
        }
        const verifyResults = await Promise.all(verifyPromises);
        const verifyClosingBalance = verifyResults[0];
        const verifyOpeningBalance = verifyResults[1];
        return {
            ok: true,
            account_id: accountEnt.id,
            aref: accountEnt.aref,
            book_id: bookEnt.id,
            bref: bookEnt.bref,
            target_book_id: targetBookEnt === null || targetBookEnt === void 0 ? void 0 : targetBookEnt.id,
            target_bref: targetBookEnt === null || targetBookEnt === void 0 ? void 0 : targetBookEnt.bref,
            original_balance: currentBalance,
            closing_balance: verifyClosingBalance.balance,
            opening_balance: (verifyOpeningBalance === null || verifyOpeningBalance === void 0 ? void 0 : verifyOpeningBalance.balance) || null,
            opening_balance_aref: obEnt.aref,
            closing_entries: [closingResult],
            opening_entries: openingResult ? [openingResult] : [],
            closing_date: closingDate,
        };
    }
    async function msgCreateBook(msg) {
        let seneca = this;
        let book = msg.book;
        if (null == book) {
            return { ok: false, why: 'no-book' };
        }
        let start = book.start;
        if (null == start) {
            return { ok: false, why: 'no-start' };
        }
        let oref = null == book.oref ? book.org_id : book.oref;
        let org_id = null == book.org_id ? book.oref : book.org_id;
        if (null == org_id) {
            return { ok: false, why: 'no-org' };
        }
        let end = book.end || -1;
        let time = book.time || { kind: 'basic' };
        let name = book.name;
        if (null == name || '' == name) {
            return { ok: false, why: 'no-name' };
        }
        let bref = oref + '/' + name + '/' + start;
        let bookEnt = await seneca
            .entity(bookCanon)
            .data$({
            id$: book.id$,
            org_id,
            oref,
            bref,
            name,
            start,
            end,
            time,
        })
            .save$();
        return { ok: true, book: bookEnt.data$(false) };
    }
    async function msgGetBook(msg) {
        let seneca = this;
        let bookEnt = await getBook(seneca, bookCanon, msg);
        if (null == bookEnt) {
            return { ok: false, why: 'book-not-found' };
        }
        return { ok: true, book: bookEnt.data$(false) };
    }
    async function msgListBook(msg) {
        let seneca = this;
        let org_id = null == msg.org_id ? msg.oref : msg.org_id;
        let q = {};
        if (null != org_id) {
            q.org_id = org_id;
        }
        let list = await seneca.entity(bookCanon).list$(q);
        list = list.map((ent) => ent.data$(false));
        return { ok: true, q, list };
    }
    async function msgExportBookCSV(msg) {
        const seneca = this;
        const bookEnt = await getBook(seneca, bookCanon, msg);
        if (!bookEnt) {
            return { ok: false, why: 'book-not-found' };
        }
        const [allCredits, allDebits] = await Promise.all([
            seneca.entity(creditCanon).list$({
                book_id: bookEnt.id,
                fields$: ['credit_id', 'caref'],
            }),
            seneca.entity(debitCanon).list$({
                book_id: bookEnt.id,
                fields$: ['debit_id', 'daref'],
            }),
        ]);
        const accountIds = [
            ...new Set([
                ...allCredits.map((entry) => entry.credit_id),
                ...allDebits.map((entry) => entry.debit_id),
            ]),
        ];
        if (accountIds.length === 0) {
            return {
                ok: true,
                book_id: bookEnt.id,
                bref: bookEnt.bref,
                note: 'No accounts found in this book',
                total_accounts: 0,
                successful_exports: 0,
                failed_exports: 0,
                exports: [],
            };
        }
        const accountPromises = accountIds.map((accountId) => getAccount(seneca, accountCanon, { account_id: accountId }));
        const accounts = await Promise.all(accountPromises);
        const validAccounts = accounts.filter((acc) => acc !== null && acc.aref !== `${bookEnt.oref}/Equity/Opening Balance`);
        if (validAccounts.length === 0) {
            return {
                ok: true,
                book_id: bookEnt.id,
                bref: bookEnt.bref,
                note: 'No valid accounts found',
                total_accounts: 0,
                successful_exports: 0,
                failed_exports: 0,
                exports: [],
            };
        }
        const batchSize = msg.batch_size || 5;
        const shouldSave = msg.save !== false;
        const exportResults = [];
        let successfulExports = 0;
        let failedExports = 0;
        for (let i = 0; i < validAccounts.length; i += batchSize) {
            const batch = validAccounts.slice(i, i + batchSize);
            const exportPromises = batch.map((accountEnt) => seneca.post('biz:ledger,export:account,format:csv', {
                account_id: accountEnt.id,
                book_id: bookEnt.id,
                file_path: msg.file_path,
                save: shouldSave,
            }));
            const batchResults = await Promise.all(exportPromises);
            batchResults.forEach((exportResult, i) => {
                const accountEnt = batch[i];
                exportResults.push({
                    account_id: accountEnt.id,
                    aref: accountEnt.aref,
                    name: accountEnt.name,
                    result: exportResult,
                });
                if (exportResult.ok) {
                    successfulExports++;
                }
                else {
                    failedExports++;
                }
            });
        }
        const summaryResult = await generateBookSummaryCSV(bookEnt, exportResults.filter((r) => r.result.ok));
        return {
            ok: failedExports === 0,
            book_id: bookEnt.id,
            bref: bookEnt.bref,
            book_name: bookEnt.name,
            output_directory: shouldSave ? msg.file_path : null,
            total_accounts: validAccounts.length,
            successful_exports: successfulExports,
            failed_exports: failedExports,
            exports: exportResults,
            summary: summaryResult,
        };
    }
    async function msgCloseBook(msg) {
        const seneca = this;
        const bookEnt = await getBook(seneca, bookCanon, msg);
        if (null == bookEnt) {
            return { ok: false, why: 'book-not-found' };
        }
        if (bookEnt.closed === true) {
            return { ok: false, why: 'book-already-closed' };
        }
        let targetBookEnt = null;
        if (msg.target_book_id || msg.target_bref) {
            targetBookEnt = await getBook(seneca, bookCanon, {
                book_id: msg.target_book_id,
                bref: msg.target_bref,
            });
            if (null == targetBookEnt) {
                return { ok: false, why: 'target-book-not-found' };
            }
        }
        const [allCredits, allDebits] = await Promise.all([
            seneca
                .entity(creditCanon)
                .list$({ book_id: bookEnt.id, fields$: ['credit_id'] }),
            seneca
                .entity(debitCanon)
                .list$({ book_id: bookEnt.id, fields$: ['debit_id'] }),
        ]);
        const accountIds = [
            ...new Set([
                ...allCredits.map((entry) => entry.credit_id),
                ...allDebits.map((entry) => entry.debit_id),
            ]),
        ];
        if (bookEnt.end <= 0) {
            bookEnt.end = msg.end || formatDateToYYYYMMDD(Date.now());
        }
        if (accountIds.length === 0) {
            bookEnt.closed = true;
            await bookEnt.save$();
            return {
                ok: true,
                book_id: bookEnt.id,
                bref: bookEnt.bref,
                target_book_id: targetBookEnt === null || targetBookEnt === void 0 ? void 0 : targetBookEnt.id,
                target_bref: targetBookEnt === null || targetBookEnt === void 0 ? void 0 : targetBookEnt.bref,
                note: 'No account entries in this book',
                account_closures: [],
                summary: {
                    total_accounts: 0,
                    successful_closures: 0,
                    failed_closures: 0,
                    total_balance_transferred: 0,
                    all_accounts_zeroed: true,
                },
                op_balance_check: null,
                closure_successful: true,
            };
        }
        const obAref = msg.opening_balance_aref || `${bookEnt.oref}/Equity/Opening Balance`;
        let obEnt = await getAccount(seneca, accountCanon, { aref: obAref });
        if (null == obEnt) {
            const createResult = await seneca.post('biz:ledger,create:account', {
                account: {
                    org_id: bookEnt.org_id,
                    oref: bookEnt.oref,
                    path: ['Equity'],
                    name: 'Opening Balance',
                    normal: 'credit',
                },
            });
            if (!(createResult === null || createResult === void 0 ? void 0 : createResult.ok)) {
                return {
                    ok: false,
                    why: 'opening-balance-create-fail',
                    error: createResult,
                };
            }
            obEnt = createResult.account;
        }
        const accountPromises = accountIds.map((accountId) => getAccount(seneca, accountCanon, { account_id: accountId }));
        const accounts = await Promise.all(accountPromises);
        const accountsToClose = accounts.filter((acc) => (acc === null || acc === void 0 ? void 0 : acc.aref) !== obAref);
        if (accountsToClose.length === 0) {
            bookEnt.closed = true;
            await bookEnt.save$();
            return {
                ok: true,
                book_id: bookEnt.id,
                bref: bookEnt.bref,
                target_book_id: targetBookEnt === null || targetBookEnt === void 0 ? void 0 : targetBookEnt.id,
                target_bref: targetBookEnt === null || targetBookEnt === void 0 ? void 0 : targetBookEnt.bref,
                note: 'No accounts to close in this book',
                account_closures: [],
                summary: {
                    total_accounts: 0,
                    successful_closures: 0,
                    failed_closures: 0,
                    total_balance_transferred: 0,
                    all_accounts_zeroed: true,
                },
                op_balance_check: null,
                closure_successful: true,
            };
        }
        const batchSize = msg.batch_size || 5;
        const accountClosures = [];
        let successfulClosures = 0;
        let failedClosures = 0;
        let totalBalanceTransferred = 0;
        for (let i = 0; i < accountsToClose.length; i += batchSize) {
            const batch = accountsToClose.slice(i, i + batchSize);
            const closurePromises = batch.map((accountEnt) => seneca.post('biz:ledger,close:account', {
                account_id: accountEnt.id,
                book_id: bookEnt.id,
                target_book_id: targetBookEnt === null || targetBookEnt === void 0 ? void 0 : targetBookEnt.id,
                target_bref: targetBookEnt === null || targetBookEnt === void 0 ? void 0 : targetBookEnt.bref,
                end: bookEnt.end,
                opening_balance_aref: obAref,
            }));
            const batchResults = await Promise.all(closurePromises);
            batchResults.forEach((closeResult, i) => {
                const accountEnt = batch[i];
                accountClosures.push({
                    account_id: accountEnt.id,
                    result: closeResult,
                });
                if (closeResult.ok) {
                    successfulClosures++;
                    totalBalanceTransferred += Math.abs(closeResult.original_balance || 0);
                }
                else {
                    failedClosures++;
                }
            });
        }
        let obCheck = null;
        if (targetBookEnt) {
            const obBalanceResult = await seneca.post('biz:ledger,balance:account', {
                aref: obAref,
                book_id: targetBookEnt.id,
                save: false,
            });
            if (obBalanceResult.ok) {
                obCheck = {
                    aref: obAref,
                    balance: obBalanceResult.balance,
                    creditTotal: obBalanceResult.creditTotal,
                    debitTotal: obBalanceResult.debitTotal,
                    balanced: Math.abs(obBalanceResult.balance) < 0.01,
                };
            }
        }
        const allAccZeroed = accountClosures.every((ac) => ac.result.closing_balance === 0);
        const closureSuccessful = failedClosures === 0 && allAccZeroed;
        const outClosure = {
            ok: true,
            book_id: bookEnt.id,
            bref: bookEnt.bref,
            target_book_id: targetBookEnt === null || targetBookEnt === void 0 ? void 0 : targetBookEnt.id,
            target_bref: targetBookEnt === null || targetBookEnt === void 0 ? void 0 : targetBookEnt.bref,
            closing_date: bookEnt.end,
            account_closures: accountClosures,
            summary: {
                total_accounts: accountsToClose.length,
                successful_closures: successfulClosures,
                failed_closures: failedClosures,
                total_balance_transferred: totalBalanceTransferred,
                all_accounts_zeroed: allAccZeroed,
            },
            op_balance_check: obCheck,
            closure_successful: closureSuccessful,
        };
        if (!closureSuccessful) {
            outClosure.ok = false;
            outClosure.note = 'Book closure failed';
            return outClosure;
        }
        bookEnt.closed = true;
        await bookEnt.save$();
        return outClosure;
    }
    async function msgUpdateBook(msg) {
        let seneca = this;
        let bookEnt = await getBook(seneca, bookCanon, msg);
        if (null == bookEnt) {
            return { ok: false, why: 'book-not-found' };
        }
        if (null == msg.book) {
            return { ok: false, why: 'no-book-update' };
        }
        await bookEnt.data$(msg.book).save$();
        return { ok: true, book: bookEnt.data$(false) };
    }
    async function msgListBalance(msg) {
        // TODO: list ledger/balance for book
    }
    async function msgBalanceBook(msg) {
        // TODO: for all accounts in book (from entries), balance account,
        // and save to ledger/balance
    }
    // TODO: mark ledger/balance stale
    async function msgCreateEntry(msg) {
        let seneca = this;
        let out = { ok: false };
        let debit = msg.debit || { aref: msg.daref };
        let credit = msg.credit || { aref: msg.caref };
        let bookEnt = await getBook(seneca, bookCanon, msg);
        if (null == bookEnt) {
            return { ok: false, why: 'book-not-found' };
        }
        if (bookEnt.closed) {
            return { ok: false, why: 'book-closed' };
        }
        if (bookEnt.start > msg.date || bookEnt.end < msg.date) {
            return { ok: false, why: 'invalid-entry-period' };
        }
        let debitAccountEnt = await getAccount(seneca, accountCanon, {
            ...debit,
        });
        if (null == debitAccountEnt) {
            return { ok: false, why: 'debit-account-not-found' };
        }
        let creditAccountEnt = await getAccount(seneca, accountCanon, {
            ...credit,
        });
        if (null == creditAccountEnt) {
            return { ok: false, why: 'credit-account-not-found' };
        }
        let val = msg.val;
        if (null == val) {
            return { ok: false, why: 'no-val' };
        }
        // If derived from a base currency
        let baseval = msg.baseval || -1;
        let basecur = msg.basecur || '---'; // currency code, EUR, GBP, USD, etc
        let baserate = msg.baserate || 0;
        let desc = msg.desc;
        if (null == desc || '' === desc) {
            return { ok: false, why: 'no-desc' };
        }
        let date = msg.date;
        if (null == date) {
            return { ok: false, why: 'no-date' };
        }
        let kind = msg.kind || 'standard';
        // custom data
        let custom = msg.custom || {};
        let customFields = 'object' === typeof msg.entry ? msg.entry : {};
        let sharedEntry = {
            ...customFields,
            id$: msg.id,
            ref: makeRef(),
            val,
            desc,
            kind,
            oref: bookEnt.oref,
            org_id: bookEnt.org_id,
            bref: bookEnt.bref,
            book_id: bookEnt.id,
            custom,
            date,
            baseval,
            basecur,
            baserate,
        };
        let creditEntry = {
            ...sharedEntry,
            credit_id: creditAccountEnt.id,
            caref: creditAccountEnt.aref,
        };
        let debitEntry = {
            ...sharedEntry,
            debit_id: debitAccountEnt.id,
            daref: debitAccountEnt.aref,
        };
        let creditEnt = await seneca.entity(creditCanon).data$(creditEntry).save$();
        debitEntry.id$ = creditEnt.id;
        let debitEnt = await seneca.entity(debitCanon).data$(debitEntry).save$();
        out.ok = true;
        out.credit = creditEnt.data$(false);
        out.debit = debitEnt.data$(false);
        return out;
    }
    async function msgVoidEntry(msg) {
        // TODO: generate counter entries
    }
    async function msgListEntry(msg) {
        let seneca = this;
        let q = msg.q || {};
        if (null == msg.oref) {
            return { ok: false, why: 'org-required' };
        }
        q.oref = msg.oref;
        let bookEnt = await getBook(seneca, bookCanon, msg);
        if (null != bookEnt) {
            q.book_id = bookEnt.id;
        }
        let accountEnt = await getAccount(seneca, accountCanon, msg);
        let credits = [];
        let cq = { ...q };
        if (null != accountEnt) {
            cq.credit_id = accountEnt.id;
        }
        if (null == msg.credit || !!msg.credit) {
            credits = await seneca.entity(creditCanon).list$(cq);
            credits = credits.map((entry) => entry.data$(false));
        }
        let debits = [];
        let dq = { ...q };
        if (null != accountEnt) {
            dq.debit_id = accountEnt.id;
        }
        if (null == msg.debit || !!msg.debit) {
            debits = await seneca.entity(debitCanon).list$(dq);
            debits = debits.map((entry) => entry.data$(false));
        }
        let totals = calcTotals(accountEnt, credits, debits);
        let out = {
            ok: true,
            ...totals,
            credits,
            debits,
            cq,
            dq,
        };
        return out;
    }
}
async function getBook(seneca, bookCanon, msg) {
    let bookEnt = null;
    if (null != msg.bref) {
        bookEnt = await seneca.entity(bookCanon).load$({ bref: msg.bref });
    }
    if (null == bookEnt && null != msg.id) {
        bookEnt = await seneca.entity(bookCanon).load$(msg.id);
    }
    if (null == bookEnt && null != msg.book_id) {
        bookEnt = await seneca.entity(bookCanon).load$(msg.book_id);
    }
    return bookEnt;
}
async function getAccount(seneca, accountCanon, msg) {
    let accountEnt = null;
    if (null != msg.aref) {
        accountEnt = await seneca.entity(accountCanon).load$({ aref: msg.aref });
    }
    if (null == accountEnt && null != msg.id) {
        accountEnt = await seneca.entity(accountCanon).load$(msg.id);
    }
    if (null == accountEnt && null != msg.account_id) {
        accountEnt = await seneca.entity(accountCanon).load$(msg.account_id);
    }
    return accountEnt;
}
function calcTotals(accountEnt, creditEnts, debitEnts) {
    let creditTotal = creditEnts
        .map((entry) => entry.val)
        .reduce((total, val) => val + total, 0);
    let debitTotal = debitEnts
        .map((entry) => entry.val)
        .reduce((total, val) => val + total, 0);
    let balance = accountEnt
        ? 'credit' === accountEnt.normal
            ? creditTotal - debitTotal
            : debitTotal - creditTotal
        : undefined;
    return {
        creditTotal,
        debitTotal,
        balance,
    };
}
// 1748459422656 -> 20250528
function formatDateToYYYYMMDD(unixTime) {
    let year = new Date(unixTime).getUTCFullYear();
    if (year <= 1970) {
        throw new Error('invalid-time');
    }
    let month = (new Date(unixTime).getUTCMonth() + 1).toString().padStart(2, '0');
    let day = new Date(unixTime).getUTCDate().toString().padStart(2, '0');
    return Number(`${year}${month}${day}`);
}
// 1748459422656 -> 191022
function timestamp2timestr(unixTime) {
    const date = new Date(unixTime);
    return Number(date.getUTCHours().toString().padStart(2, '0') +
        date.getUTCMinutes().toString().padStart(2, '0') +
        date.getUTCSeconds().toString().padStart(2, '0'));
}
function processEntries(entriesResult, bookStart, accountNormal) {
    const entries = [];
    entriesResult.credits.forEach((credit) => {
        entries.push({
            date: credit.date || bookStart,
            desc: credit.desc,
            type: 'credit',
            val: credit.val,
            ref: credit.ref,
            kind: credit.kind || 'standard',
        });
    });
    entriesResult.debits.forEach((debit) => {
        entries.push({
            date: debit.date || bookStart,
            desc: debit.desc,
            type: 'debit',
            val: debit.val,
            ref: debit.ref,
            kind: debit.kind || 'standard',
        });
    });
    return entries.sort((a, b) => {
        if (a.date !== b.date) {
            return a.date - b.date;
        }
        if (a.kind === 'opening' && b.kind !== 'opening')
            return -1;
        if (a.kind !== 'opening' && b.kind === 'opening')
            return 1;
        if (a.date === b.date) {
            if (accountNormal === 'debit') {
                if (a.type === 'debit' && b.type === 'credit')
                    return -1;
                if (a.type === 'credit' && b.type === 'debit')
                    return 1;
            }
            else if (accountNormal === 'credit') {
                if (a.type === 'credit' && b.type === 'debit')
                    return -1;
                if (a.type === 'debit' && b.type === 'credit')
                    return 1;
            }
        }
        return 0;
    });
}
function generateAccountCSV(accountEnt, bookEnt, entries, balanceResult) {
    let csv = `# ${accountEnt.name} - ${bookEnt.name} - ${bookEnt.oref}\n`;
    csv += 'Date,Description,Debit,Credit,Balance\n';
    let runningBalance = 0;
    let hasOpeningEntry = false;
    const openingEntry = entries.find((e) => e.kind === 'opening');
    const isDebit = accountEnt.normal === 'debit';
    if (openingEntry) {
        hasOpeningEntry = true;
        if (isDebit) {
            runningBalance =
                openingEntry.type === 'debit' ? openingEntry.val : -openingEntry.val;
        }
        else {
            runningBalance =
                openingEntry.type === 'credit' ? openingEntry.val : -openingEntry.val;
        }
        csv += `${bookEnt.start},${'Opening Balance'},${runningBalance > 0 && isDebit ? runningBalance : ''},${runningBalance > 0 && !isDebit ? runningBalance : ''},${runningBalance}\n`;
    }
    entries.forEach((entry) => {
        if (entry.kind === 'opening')
            return;
        const dateStr = entry.date || formatDateToYYYYMMDD(entry.t_c);
        const debitVal = entry.type === 'debit' ? entry.val : '';
        const creditVal = entry.type === 'credit' ? entry.val : '';
        if (isDebit) {
            runningBalance += entry.type === 'debit' ? entry.val : -entry.val;
        }
        else {
            runningBalance += entry.type === 'credit' ? entry.val : -entry.val;
        }
        csv += `${dateStr},${entry.desc},${debitVal},${creditVal},${runningBalance}\n`;
    });
    if (balanceResult.balance != runningBalance) {
        throw Error('invalid-balance-total');
    }
    if (bookEnt.end == -1) {
        csv += `Total,,,${balanceResult.balance}\n`;
    }
    return csv;
}
async function generateBookSummaryCSV(bookEnt, successfulExports) {
    try {
        let summaryContent = `# Book Summary: ${bookEnt.name}\n`;
        summaryContent += `# Organization: ${bookEnt.oref}\n`;
        summaryContent += `# Period: ${bookEnt.start} to ${bookEnt.end === -1 ? 'ongoing' : bookEnt.end}\n`;
        summaryContent += '\n';
        summaryContent += `Account,Normal Balance,Type,${bookEnt.closed ? 'Closing Balance' : 'Total Balance'},Entry Count,File\n`;
        successfulExports.forEach((exp) => {
            const result = exp.result;
            const accountType = exp.aref.split('/')[1] || 'Uknown';
            summaryContent += `${exp.name},${result.normal},${accountType},${bookEnt.closed ? result.closing_balance : result.final_balance},${result.entry_count},${result.fileName}\n`;
        });
        return {
            ok: true,
            content: summaryContent,
        };
    }
    catch (err) {
        return {
            ok: false,
            why: 'summary-generation-failed',
            error: err.message,
        };
    }
}
// Default options.
const defaults = {
    debug: false,
    path: {
        partSize: 3,
    },
    entity: {
        base: 'ledger',
    },
};
Object.assign(ledger, {
    defaults,
    intern: {
        getBook,
    },
});
exports.default = ledger;
if ('undefined' !== typeof module) {
    module.exports = ledger;
}
//# sourceMappingURL=ledger.js.map