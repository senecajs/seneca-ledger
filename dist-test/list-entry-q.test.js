"use strict";
/* Copyright © 2026 Seneca Project Contributors, MIT License. */
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const code_1 = require("@hapi/code");
const helper_1 = require("./helper");
(0, node_test_1.test)('list:entry does not mutate the caller q', async () => {
    const seneca = await (0, helper_1.makeSeneca)();
    const q = { val: 20 };
    const out = await seneca.post('biz:ledger,list:entry', { oref: 'o0', q });
    (0, code_1.expect)(out.ok).true();
    (0, code_1.expect)(out.cq).equal({ val: 20, oref: 'o0' });
    (0, code_1.expect)(q).equal({ val: 20 });
    const frozen = Object.freeze({ val: 20 });
    const outFrozen = await seneca.post('biz:ledger,list:entry', {
        oref: 'o0',
        q: frozen,
    });
    (0, code_1.expect)(outFrozen.ok).true();
    (0, code_1.expect)(outFrozen.cq).equal({ val: 20, oref: 'o0' });
});
//# sourceMappingURL=list-entry-q.test.js.map