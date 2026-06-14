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