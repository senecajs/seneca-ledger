"use strict";
/* Copyright © 2026 Seneca Project Contributors, MIT License. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldsListIsNarrowed = fieldsListIsNarrowed;
async function fieldsListIsNarrowed(seneca) {
    const list = await seneca
        .entity('ledger/credit')
        .list$({ book_id: 'b0', fields$: ['credit_id', 'caref'] });
    const first = list[0];
    if (first) {
        const ids = [first.id, first.credit_id, first.caref];
        void ids;
        // @ts-expect-error val was not loaded, so it is not on the type
        void first.val;
    }
    await seneca
        .entity('ledger/credit')
        // @ts-expect-error a misspelled field name is not a declared field
        .list$({ book_id: 'b0', fields$: ['credit_idd'] });
    // Without fields$, the full entity type is returned.
    const full = await seneca.entity('ledger/credit').list$();
    const val = full[0]?.val;
    void val;
}
//# sourceMappingURL=types-check.js.map