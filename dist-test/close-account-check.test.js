"use strict";
/* Copyright © 2026 Seneca Project Contributors, MIT License. */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const code_1 = require("@hapi/code");
const seneca_1 = __importDefault(require("seneca"));
const __1 = __importDefault(require(".."));
(0, node_test_1.test)('close:account fails when a balance check fails', async () => {
    const seneca = await makeSeneca();
    await seneca.post('biz:ledger,create:account', {
        account: { oref: 'o9', path: 'Asset', name: 'Cash', normal: 'debit' },
    });
    await seneca.post('biz:ledger,create:account', {
        account: { oref: 'o9', path: 'Income', name: 'Sales', normal: 'credit' },
    });
    await seneca.post('biz:ledger,create:book', {
        book: { oref: 'o9', name: 'Q1', start: 20220101, end: 20220331 },
    });
    const entry = await seneca.post('biz:ledger,create:entry', {
        oref: 'o9',
        bref: 'o9/Q1/20220101',
        daref: 'o9/Asset/Cash',
        caref: 'o9/Income/Sales',
        val: 100,
        desc: 'sale',
        date: 20220115,
    });
    (0, code_1.expect)(entry.ok).true();
    // close:account calls balance:account once for the current balance,
    // then again to check the result. Let the first call through and fail
    // the check.
    let balanceCalls = 0;
    seneca.message('biz:ledger,balance:account', async function (msg) {
        balanceCalls++;
        if (1 < balanceCalls) {
            return { ok: false, why: 'forced-balance-failure' };
        }
        return this.prior(msg);
    });
    const out = await seneca.post('biz:ledger,close:account', {
        aref: 'o9/Asset/Cash',
        bref: 'o9/Q1/20220101',
    });
    (0, code_1.expect)(out).include({ ok: false, why: 'closing-balance-check-failed' });
    (0, code_1.expect)(out.error).include({ ok: false, why: 'forced-balance-failure' });
});
async function makeSeneca() {
    const seneca = (0, seneca_1.default)({ legacy: false })
        .test()
        .use('promisify')
        .use('entity')
        .use('entity-util', { when: { active: true } })
        .use(__1.default);
    await seneca.ready();
    return seneca;
}
//# sourceMappingURL=close-account-check.test.js.map