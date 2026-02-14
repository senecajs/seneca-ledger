/** Debit or Credit indicator */
export type DC = 'debit' | 'credit';
/** Entry kind indicator */
export type EntryKind = 'standard' | 'opening' | 'closing';
/** Organization identifier - can use either org_id or oref */
export interface OrgIdentifier {
    org_id?: string;
    oref?: string;
}
/** Account identifier - can use id, account_id, or aref */
export interface AccountIdentifier {
    id?: string;
    account_id?: string;
    aref?: string;
}
/** Book identifier - can use id, book_id, or bref */
export interface BookIdentifier {
    id?: string;
    book_id?: string;
    bref?: string;
}
/** Account entity */
export type AccountEntity = {
    id: string;
    org_id: string;
    oref: string;
    aref: string;
    path: string[];
    name: string;
    normal: DC;
    path0?: string;
    path1?: string;
    path2?: string;
    [key: string]: any;
};
/** Book entity */
export type BookEntity = {
    id: string;
    org_id: string;
    oref: string;
    bref: string;
    name: string;
    start: number;
    end: number;
    time: TimeSpec;
    closed?: boolean;
    [key: string]: any;
};
/** Credit entry entity */
export type CreditEntity = {
    id: string;
    ref: string;
    val: number;
    desc: string;
    kind: EntryKind;
    oref: string;
    org_id: string;
    bref: string;
    book_id: string;
    credit_id: string;
    caref: string;
    custom: Record<string, any>;
    date: number;
    baseval: number;
    basecur: string;
    baserate: number;
    [key: string]: any;
};
/** Debit entry entity */
export type DebitEntity = {
    id: string;
    ref: string;
    val: number;
    desc: string;
    kind: EntryKind;
    oref: string;
    org_id: string;
    bref: string;
    book_id: string;
    debit_id: string;
    daref: string;
    custom: Record<string, any>;
    date: number;
    baseval: number;
    basecur: string;
    baserate: number;
    [key: string]: any;
};
/** Balance entity */
export type BalanceEntity = {
    id: string;
    account_id: string;
    book_id: string;
    balance: number;
    creditTotal: number;
    debitTotal: number;
    when: number;
    [key: string]: any;
};
/** Time specification for books */
export type TimeSpec = {
    kind: string;
    [key: string]: any;
};
/** Ledger plugin options */
export interface LedgerOptions {
    debug: boolean;
    path: {
        partSize: number;
    };
    entity: {
        base: string;
    };
}
/** Input for create:account message */
export interface CreateAccountInput {
    account: {
        id$?: string;
        org_id?: string;
        oref?: string;
        path?: string | string[];
        name: string;
        normal: DC;
    };
}
/** Input for get:account message */
export interface GetAccountInput extends AccountIdentifier {
}
/** Input for list:account message */
export interface ListAccountInput extends OrgIdentifier {
}
/** Input for update:account message */
export interface UpdateAccountInput extends AccountIdentifier {
    account: Partial<AccountEntity>;
}
/** Input for balance:account message */
export interface BalanceAccountInput extends Omit<AccountIdentifier, 'id'>, Omit<BookIdentifier, 'id'> {
    save: boolean;
}
/** Input for export:account,format:csv message */
export interface ExportAccountCSVInput extends Omit<AccountIdentifier, 'id'>, Omit<BookIdentifier, 'id'> {
}
/** Input for close:account message */
export interface CloseAccountInput extends Omit<AccountIdentifier, 'id'>, Omit<BookIdentifier, 'id'> {
    target_book_id?: string;
    target_bref?: string;
    end?: number;
    opening_balance_aref?: string;
}
/** Input for create:book message */
export interface CreateBookInput {
    book: {
        id$?: string;
        org_id?: string;
        oref?: string;
        name: string;
        start: number;
        end?: number;
        time?: any;
    };
}
/** Input for get:book message */
export interface GetBookInput extends BookIdentifier {
}
/** Input for list:book message */
export interface ListBookInput extends OrgIdentifier {
}
/** Input for update:book message */
export interface UpdateBookInput extends BookIdentifier {
    book: Partial<BookEntity>;
}
/** Input for export:book,format:csv message */
export interface ExportBookCSVInput extends Omit<BookIdentifier, 'id'> {
    batch_size?: number;
}
/** Input for close:book message */
export interface CloseBookInput extends Omit<BookIdentifier, 'id'> {
    target_book_id?: string;
    target_bref?: string;
    end?: number;
    opening_balance_aref?: string;
    batch_size?: number;
}
/** Debit/Credit account reference for entries */
export interface EntryAccountRef {
    account_id?: string;
    aref?: string;
}
/** Input for create:entry message */
export interface CreateEntryInput extends BookIdentifier {
    account_id?: string;
    aref?: string;
    debit?: EntryAccountRef;
    credit?: EntryAccountRef;
    daref?: string;
    caref?: string;
    date: number;
    val: number;
    desc: string;
    baseval?: number;
    basecur?: string;
    baserate?: number;
    kind?: EntryKind;
    custom?: Record<string, any>;
    entry?: Record<string, any>;
}
/** Input for void:entry message */
export interface VoidEntryInput {
    [key: string]: any;
}
/** Input for list:entry message */
export interface ListEntryInput extends Omit<BookIdentifier, 'id'>, Omit<AccountIdentifier, 'id'> {
    oref: string;
    credit?: boolean;
    debit?: boolean;
    q?: Record<string, any>;
}
/** Input for list:balance message */
export interface ListBalanceInput {
    [key: string]: any;
}
/** Input for balance:book message */
export interface BalanceBookInput {
    [key: string]: any;
}
/** Base result type */
export interface BaseResult {
    ok: boolean;
}
/** Invalid/error result */
export interface InvalidResult extends BaseResult {
    ok: false;
    why: string;
    error?: Record<string, any>;
}
/** Result for create:account message */
export interface CreateAccountResult extends BaseResult {
    ok: true;
    account: AccountEntity;
}
/** Result for get:account message */
export interface GetAccountResult extends BaseResult {
    ok: true;
    account: AccountEntity;
}
/** Result for list:account message */
export interface ListAccountResult extends BaseResult {
    ok: true;
    q: Record<string, any>;
    list: AccountEntity[];
}
/** Result for update:account message */
export interface UpdateAccountResult extends BaseResult {
    ok: true;
    account: AccountEntity;
}
/** Balance totals */
export interface BalanceTotals {
    creditTotal: number;
    debitTotal: number;
    balance: number;
}
/** Result for balance:account message */
export interface BalanceAccountResult extends BaseResult, BalanceTotals {
    ok: true;
    account_id: string;
    aref: string;
    book_id: string;
    bref: string;
    start: number;
    end: number;
    creditCount: number;
    debitCount: number;
    normal: DC;
    when: number;
    date: number;
    time: number;
}
/** Result for export:account,format:csv message */
export interface ExportAccountCSVResult extends BaseResult {
    ok: true;
    account_id: string;
    aref: string;
    normal: DC;
    book_id: string;
    bref: string;
    content: string;
    entry_count: number;
    final_balance: number;
    closing_balance: number;
}
/** Result for close:account message */
export interface ClosedAccount extends BaseResult {
    ok: true;
    account_id: string;
    aref: string;
    book_id: string;
    bref: string;
    target_book_id?: string;
    target_bref?: string;
    original_balance: number;
    closing_balance: number;
    opening_balance: number | null;
    opening_balance_aref: string | null;
    closing_entries: Record<string, any>[];
    opening_entries: Record<string, any>[];
    closing_date: number;
}
/** Result for create:book message */
export interface CreateBookResult extends BaseResult {
    ok: true;
    book: BookEntity;
}
/** Result for get:book message */
export interface GetBookResult extends BaseResult {
    ok: true;
    book: BookEntity;
}
/** Result for list:book message */
export interface ListBookResult extends BaseResult {
    ok: true;
    q: Record<string, any>;
    list: BookEntity[];
}
/** Result for update:book message */
export interface UpdateBookResult extends BaseResult {
    ok: true;
    book: BookEntity;
}
/** Account export result within book export */
export interface AccountExportItem {
    account_id: string;
    aref: string;
    name: string;
    result: ExportAccountCSVResult | InvalidResult;
}
/** Book summary CSV result */
export interface BookSummaryCSVResult extends BaseResult {
    content?: string;
    why?: string;
    error?: string;
}
/** Result for export:book,format:csv message */
export interface ExportBookCSVResult extends BaseResult {
    book_id: string;
    bref: string;
    book_name?: string;
    note?: string;
    total_accounts: number;
    successful_exports: number;
    failed_exports: number;
    exports: AccountExportItem[];
    summary?: BookSummaryCSVResult;
}
/** Summary of closed book */
export interface ClosedBookSummary {
    total_accounts: number;
    successful_closures: number;
    failed_closures: number;
    total_balance_transferred: number;
    all_accounts_zeroed: boolean;
}
/** Opening balance check result */
export interface OpeningBalanceCheck {
    aref: string;
    balance: number;
    creditTotal: number;
    debitTotal: number;
    balanced: boolean;
}
/** Account closure item within book closure */
export interface AccountClosureItem {
    account_id: string;
    result: ClosedAccount | InvalidResult;
}
/** Result for close:book message */
export interface ClosedBook extends BaseResult {
    book_id: string;
    bref: string;
    target_book_id?: string;
    target_bref?: string;
    closing_date?: number;
    note?: string;
    account_closures: AccountClosureItem[];
    summary: ClosedBookSummary;
    op_balance_check: OpeningBalanceCheck | null;
    closure_successful: boolean;
}
/** Result for create:entry message */
export interface CreateEntryResult extends BaseResult {
    ok: true;
    credit: CreditEntity;
    debit: DebitEntity;
}
/** Result for list:entry message */
export interface ListEntryResult extends BaseResult, BalanceTotals {
    ok: true;
    credits: CreditEntity[];
    debits: DebitEntity[];
    cq: Record<string, any>;
    dq: Record<string, any>;
}
/** Processed entry for CSV generation */
export interface ProcessedEntry {
    date: number;
    desc: string;
    type: 'credit' | 'debit';
    val: number;
    ref: string;
    kind: EntryKind;
}
/** Get book helper function */
export type GetBookFn = (seneca: any, bookCanon: string, msg: BookIdentifier) => Promise<BookEntity | null>;
/** Get account helper function */
export type GetAccountFn = (seneca: any, accountCanon: string, msg: AccountIdentifier) => Promise<AccountEntity | null>;
/** Calculate totals helper function */
export type CalcTotalsFn = (accountEnt: AccountEntity | null, creditEnts: CreditEntity[], debitEnts: DebitEntity[]) => BalanceTotals;
/** Format date to YYYYMMDD helper function */
export type FormatDateToYYYYMMDDFn = (unixTime: number) => number;
/** Timestamp to time string helper function */
export type Timestamp2TimestrFn = (unixTime: number) => number;
/** Process entries helper function */
export type ProcessEntriesFn = (entriesResult: ListEntryResult, bookStart: number, accountNormal: DC) => ProcessedEntry[];
/** Generate account CSV helper function */
export type GenerateAccountCSVFn = (accountEnt: AccountEntity, bookEnt: BookEntity, entries: ProcessedEntry[], balanceResult: BalanceAccountResult) => string;
/** Generate book summary CSV helper function */
export type GenerateBookSummaryCSVFn = (bookEnt: BookEntity, successfulExports: AccountExportItem[]) => Promise<BookSummaryCSVResult>;
export type MsgCreateAccountFn = (msg: CreateAccountInput) => Promise<CreateAccountResult | InvalidResult>;
export type MsgGetAccountFn = (msg: GetAccountInput) => Promise<GetAccountResult | InvalidResult>;
export type MsgListAccountFn = (msg: ListAccountInput) => Promise<ListAccountResult>;
export type MsgUpdateAccountFn = (msg: UpdateAccountInput) => Promise<UpdateAccountResult | InvalidResult>;
export type MsgBalanceAccountFn = (msg: BalanceAccountInput) => Promise<BalanceAccountResult | InvalidResult>;
export type MsgExportAccountCSVFn = (msg: ExportAccountCSVInput) => Promise<ExportAccountCSVResult | InvalidResult>;
export type MsgCloseAccountFn = (msg: CloseAccountInput) => Promise<ClosedAccount | InvalidResult>;
export type MsgCreateBookFn = (msg: CreateBookInput) => Promise<CreateBookResult | InvalidResult>;
export type MsgGetBookFn = (msg: GetBookInput) => Promise<GetBookResult | InvalidResult>;
export type MsgListBookFn = (msg: ListBookInput) => Promise<ListBookResult>;
export type MsgUpdateBookFn = (msg: UpdateBookInput) => Promise<UpdateBookResult | InvalidResult>;
export type MsgExportBookCSVFn = (msg: ExportBookCSVInput) => Promise<ExportBookCSVResult | InvalidResult>;
export type MsgCloseBookFn = (msg: CloseBookInput) => Promise<ClosedBook | InvalidResult>;
export type MsgCreateEntryFn = (msg: CreateEntryInput) => Promise<CreateEntryResult | InvalidResult>;
export type MsgVoidEntryFn = (msg: VoidEntryInput) => Promise<any>;
export type MsgListEntryFn = (msg: ListEntryInput) => Promise<ListEntryResult | InvalidResult>;
export type MsgListBalanceFn = (msg: ListBalanceInput) => Promise<any>;
export type MsgBalanceBookFn = (msg: BalanceBookInput) => Promise<any>;
/** Ledger plugin function */
export interface LedgerPlugin {
    (this: any, options: LedgerOptions): void;
    defaults: LedgerOptions;
    intern: {
        getBook: GetBookFn;
    };
}
declare const ledger: LedgerPlugin;
export default ledger;
//# sourceMappingURL=types.d.ts.map