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
const validation_messages_1 = __importDefault(require("./validation.messages"));
const multibook_messages_1 = __importDefault(require("./multibook.messages"));
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
    (0, node_test_1.test)('validation.messages', async () => {
        const seneca = await makeSeneca();
        await (0, seneca_msg_test_1.default)(seneca, validation_messages_1.default)();
    });
    (0, node_test_1.test)('multibook.messages', async () => {
        const seneca = await makeSeneca();
        await (0, seneca_msg_test_1.default)(seneca, multibook_messages_1.default)();
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