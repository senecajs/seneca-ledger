declare const _default: {
    print: boolean;
    pattern: string;
    allow: {
        missing: boolean;
    };
    calls: ({
        name: string;
        pattern: string;
        params: {
            account: {
                id$: string;
                oref: string;
                path: string;
                name: string;
                normal: string;
            };
        };
        out: {
            ok: boolean;
            account: {
                id: string;
                aref: string;
            };
        };
    } | {
        name: string;
        pattern: string;
        params: {
            book: {
                id$: string;
                oref: string;
                name: string;
                start: number;
                end: number;
            };
        };
        out: {
            ok: boolean;
            book: {
                id: string;
                bref: string;
            };
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref: string;
            bref: string;
            target_bref?: undefined;
            end?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            closing_entries?: undefined;
            opening_entries?: undefined;
            original_balance?: undefined;
            opening_balance?: undefined;
            opening_balance_aref?: undefined;
            balance?: undefined;
            aref?: undefined;
            account_id?: undefined;
            closing_balance?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref: string;
            bref: string;
            target_bref?: undefined;
            end?: undefined;
        };
        out: {
            ok: boolean;
            account_id: string;
            aref: string;
            balance: number;
            closing_entries?: undefined;
            opening_entries?: undefined;
            original_balance?: undefined;
            opening_balance?: undefined;
            opening_balance_aref?: undefined;
            why?: undefined;
            closing_balance?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref: string;
            bref: string;
            end: number;
            target_bref?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            closing_entries?: undefined;
            opening_entries?: undefined;
            original_balance?: undefined;
            opening_balance?: undefined;
            opening_balance_aref?: undefined;
            balance?: undefined;
            aref?: undefined;
            account_id?: undefined;
            closing_balance?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref: string;
            bref: string;
            end: number;
            target_bref?: undefined;
        };
        out: {
            ok: boolean;
            aref: string;
            original_balance: number;
            closing_balance: number;
            opening_balance: number;
            opening_balance_aref: null;
            closing_entries: never[];
            opening_entries: never[];
            why?: undefined;
            balance?: undefined;
            account_id?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref: string;
            bref: string;
            target_bref: string;
            end: number;
        };
        out: {
            closing_entries?: undefined;
            opening_entries?: undefined;
            ok: boolean;
            why: string;
            original_balance?: undefined;
            opening_balance?: undefined;
            opening_balance_aref?: undefined;
            balance?: undefined;
            aref?: undefined;
            account_id?: undefined;
            closing_balance?: undefined;
        };
    })[];
};
export default _default;
