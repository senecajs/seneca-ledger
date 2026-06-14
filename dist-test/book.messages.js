"use strict";
// Calls are order-dependent: they run in sequence against one shared seneca.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1_single_messages_1 = __importDefault(require("./book-1-single.messages"));
const book_2_multibook_messages_1 = __importDefault(require("./book-2-multibook.messages"));
exports.default = {
    print: false,
    pattern: 'biz:ledger',
    allow: { missing: true },
    calls: [...book_1_single_messages_1.default, ...book_2_multibook_messages_1.default],
};
//# sourceMappingURL=book.messages.js.map