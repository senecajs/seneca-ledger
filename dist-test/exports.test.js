"use strict";
/* Copyright © 2026 Seneca Project Contributors, MIT License. */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const code_1 = require("@hapi/code");
const __1 = __importDefault(require(".."));
(0, node_test_1.test)('exports', () => {
    (0, code_1.expect)(() => require('../dist/types.js')).not.throw();
    // The default export is typed as the full plugin, defaults and intern
    // included, and the public types are importable from the package root.
    const plugin = __1.default;
    (0, code_1.expect)(plugin.defaults.entity.base).equal('ledger');
    const totals = plugin.intern.calcTotals(null, [], []);
    (0, code_1.expect)(totals).equal({ creditTotal: 0, debitTotal: 0, balance: 0 });
});
//# sourceMappingURL=exports.test.js.map