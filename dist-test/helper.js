"use strict";
/* Copyright © 2026 Seneca Project Contributors, MIT License. */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSeneca = makeSeneca;
const seneca_1 = __importDefault(require("seneca"));
const __1 = __importDefault(require(".."));
async function makeSeneca() {
    const seneca = (0, seneca_1.default)({ legacy: false })
        .test()
        .use('promisify')
        .use('entity')
        .use('entity-util', { when: { active: true } })
        .use(__1.default);
    await seneca.ready();
    // print all message patterns
    // console.log(seneca.list())
    return seneca;
}
//# sourceMappingURL=helper.js.map