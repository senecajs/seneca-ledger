"use strict";
// Calls are order-dependent: they run in sequence against one shared seneca.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const basic_1_setup_messages_1 = __importDefault(require("./basic-1-setup.messages"));
const basic_2_close_account_messages_1 = __importDefault(require("./basic-2-close-account.messages"));
const basic_3_close_book_messages_1 = __importDefault(require("./basic-3-close-book.messages"));
const basic_4_export_messages_1 = __importDefault(require("./basic-4-export.messages"));
const basic_5_edge_messages_1 = __importDefault(require("./basic-5-edge.messages"));
exports.default = {
    print: false,
    pattern: 'biz:ledger',
    allow: { missing: true },
    calls: [...basic_1_setup_messages_1.default, ...basic_2_close_account_messages_1.default, ...basic_3_close_book_messages_1.default, ...basic_4_export_messages_1.default, ...basic_5_edge_messages_1.default],
};
//# sourceMappingURL=basic.messages.js.map