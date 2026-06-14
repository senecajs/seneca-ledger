"use strict";
/* Copyright © 2026 Seneca Project Contributors, MIT License. */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Direct unit tests for the internal time / totals helpers. These run on every
// balance and close, but their output fields (when/date/time) are derived from
// Date.now() and so are never asserted by the message suites. Exercising them
// here guards the date math, the leading-zero clock formatting, and the
// debit/credit balance sign rules against regression.
const node_test_1 = require("node:test");
const code_1 = require("@hapi/code");
const __1 = __importDefault(require(".."));
const intern = __1.default.intern;
const { formatDateToYYYYMMDD, timestamp2timestr, calcTotals } = intern;
// A fixed instant: 2025-05-28 19:10:22 UTC.
const T = Date.UTC(2025, 4, 28, 19, 10, 22);
(0, node_test_1.describe)('time-helpers', () => {
    (0, node_test_1.test)('formatDateToYYYYMMDD-basic', async () => {
        (0, code_1.expect)(formatDateToYYYYMMDD(T)).equal(20250528);
    });
    (0, node_test_1.test)('formatDateToYYYYMMDD-zero-pads-month-and-day', async () => {
        // 2025-01-09 -> 20250109, not 202519.
        (0, code_1.expect)(formatDateToYYYYMMDD(Date.UTC(2025, 0, 9, 12, 0, 0))).equal(20250109);
    });
    (0, node_test_1.test)('formatDateToYYYYMMDD-rejects-epoch', async () => {
        // year <= 1970 is treated as an invalid / unset timestamp.
        (0, code_1.expect)(() => formatDateToYYYYMMDD(0)).to.throw('invalid-time');
    });
    (0, node_test_1.test)('timestamp2timestr-basic', async () => {
        (0, code_1.expect)(timestamp2timestr(T)).equal('191022');
    });
    (0, node_test_1.test)('timestamp2timestr-keeps-leading-zero', async () => {
        // 09:05:03 must stay '090503' — as a number it would collapse to 90503.
        (0, code_1.expect)(timestamp2timestr(Date.UTC(2024, 0, 2, 9, 5, 3))).equal('090503');
    });
    (0, node_test_1.test)('timestamp2timestr-midnight', async () => {
        (0, code_1.expect)(timestamp2timestr(Date.UTC(2024, 0, 2, 0, 0, 0))).equal('000000');
    });
    (0, node_test_1.test)('calcTotals-debit-normal', async () => {
        const out = calcTotals({ normal: 'debit' }, [{ val: 20 }], [{ val: 100 }]);
        (0, code_1.expect)(out).equal({ creditTotal: 20, debitTotal: 100, balance: 80 });
    });
    (0, node_test_1.test)('calcTotals-credit-normal', async () => {
        const out = calcTotals({ normal: 'credit' }, [{ val: 100 }], [{ val: 20 }]);
        (0, code_1.expect)(out).equal({ creditTotal: 100, debitTotal: 20, balance: 80 });
    });
    (0, node_test_1.test)('calcTotals-null-account-yields-zero-balance', async () => {
        const out = calcTotals(null, [{ val: 5 }], [{ val: 3 }]);
        (0, code_1.expect)(out).equal({ creditTotal: 5, debitTotal: 3, balance: 0 });
    });
});
//# sourceMappingURL=time-helpers.test.js.map