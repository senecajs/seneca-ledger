"use strict";
/* Copyright © 2026 Seneca Project Contributors, MIT License. */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const code_1 = require("@hapi/code");
const seneca_1 = __importDefault(require("seneca"));
const seneca_msg_test_1 = __importDefault(require("seneca-msg-test"));
// import { Maintain } from '@seneca/maintain'
const __1 = __importDefault(require(".."));
const __2 = __importDefault(require(".."));
const ledger_lifecycle_messages_1 = __importDefault(require("./ledger-lifecycle.messages"));
const account_validation_messages_1 = __importDefault(require("./account-validation.messages"));
const account_retrieval_messages_1 = __importDefault(require("./account-retrieval.messages"));
const account_balance_close_export_messages_1 = __importDefault(require("./account-balance-close-export.messages"));
const book_single_messages_1 = __importDefault(require("./book-single.messages"));
const book_isolation_messages_1 = __importDefault(require("./book-isolation.messages"));
const entry_validation_messages_1 = __importDefault(require("./entry-validation.messages"));
// Each suite runs against its own fresh seneca instance so test contexts stay
// isolated. The lifecycle suite is the only intentionally ordered, stateful
// scenario; every other suite is a coherent set of edge cases that seeds just
// the state it needs (see ./seed).
const suites = {
    'ledger-lifecycle': ledger_lifecycle_messages_1.default,
    'account-validation': account_validation_messages_1.default,
    'account-retrieval': account_retrieval_messages_1.default,
    'account-balance-close-export': account_balance_close_export_messages_1.default,
    'book-single': book_single_messages_1.default,
    'book-isolation': book_isolation_messages_1.default,
    'entry-validation': entry_validation_messages_1.default,
};
(0, node_test_1.describe)('ledger', () => {
    (0, node_test_1.test)('happy', async () => {
        (0, code_1.expect)(__1.default).exist();
        const seneca = (0, seneca_1.default)({ legacy: false })
            .test()
            .use('promisify')
            .use('entity')
            .use(__2.default);
        await seneca.ready();
    });
    for (const [name, messages] of Object.entries(suites)) {
        (0, node_test_1.test)(name, async () => {
            const seneca = await makeSeneca();
            await (0, seneca_msg_test_1.default)(seneca, messages)();
        });
    }
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
    // test('maintain', Maintain)
});
async function makeSeneca() {
    const seneca = (0, seneca_1.default)({ legacy: false })
        .test()
        .use('promisify')
        .use('entity')
        .use('entity-util', { when: { active: true } })
        .use(__2.default);
    await seneca.ready();
    // print all message patterns
    // console.log(seneca.list())
    return seneca;
}
//# sourceMappingURL=ledger.test.js.map