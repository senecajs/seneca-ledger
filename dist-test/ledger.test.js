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
const basic_messages_1 = __importDefault(require("./basic.messages"));
const account_messages_1 = __importDefault(require("./account.messages"));
const book_messages_1 = __importDefault(require("./book.messages"));
const entry_messages_1 = __importDefault(require("./entry.messages"));
const input_messages_1 = __importDefault(require("./input.messages"));
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
    (0, node_test_1.test)('basic.messages', async () => {
        const seneca = await makeSeneca();
        await (0, seneca_msg_test_1.default)(seneca, basic_messages_1.default)();
    });
    (0, node_test_1.test)('account.messages', async () => {
        const seneca = await makeSeneca();
        await (0, seneca_msg_test_1.default)(seneca, account_messages_1.default)();
    });
    (0, node_test_1.test)('book.messages', async () => {
        const seneca = await makeSeneca();
        await (0, seneca_msg_test_1.default)(seneca, book_messages_1.default)();
    });
    (0, node_test_1.test)('entry.messages', async () => {
        const seneca = await makeSeneca();
        await (0, seneca_msg_test_1.default)(seneca, entry_messages_1.default)();
    });
    (0, node_test_1.test)('input.messages', async () => {
        const seneca = await makeSeneca();
        await (0, seneca_msg_test_1.default)(seneca, input_messages_1.default)();
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