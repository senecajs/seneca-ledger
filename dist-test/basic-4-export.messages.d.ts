declare const _default: ({
    name: string;
    pattern: string;
    params: {
        aref: string;
        bref: string;
    };
    out: {
        ok: boolean;
        account_id: string;
        aref: string;
        book_id: string;
        bref: string;
        content: string;
        entry_count: number;
        final_balance: number;
        closing_balance?: undefined;
        book_name?: undefined;
        total_accounts?: undefined;
        successful_exports?: undefined;
        failed_exports?: undefined;
        summary?: undefined;
    };
} | {
    name: string;
    pattern: string;
    params: {
        aref: string;
        bref: string;
    };
    out: {
        ok: boolean;
        account_id: string;
        aref: string;
        book_id: string;
        bref: string;
        content: string;
        entry_count: number;
        final_balance: number;
        closing_balance: number;
        book_name?: undefined;
        total_accounts?: undefined;
        successful_exports?: undefined;
        failed_exports?: undefined;
        summary?: undefined;
    };
} | {
    name: string;
    pattern: string;
    params: {
        bref: string;
        aref?: undefined;
    };
    out: {
        ok: boolean;
        book_id: string;
        bref: string;
        book_name: string;
        total_accounts: number;
        successful_exports: number;
        failed_exports: number;
        summary: {
            ok: boolean;
            content: string;
        };
        account_id?: undefined;
        aref?: undefined;
        content?: undefined;
        entry_count?: undefined;
        final_balance?: undefined;
        closing_balance?: undefined;
    };
})[];
export default _default;
