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
            aref: string;
            bref: string;
            account?: undefined;
            book?: undefined;
            end?: undefined;
            target_bref?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            account?: undefined;
            book?: undefined;
            account_id?: undefined;
            aref?: undefined;
            balance?: undefined;
            original_balance?: undefined;
            closing_balance?: undefined;
            opening_balance?: undefined;
            opening_balance_aref?: undefined;
            closing_entries?: undefined;
            opening_entries?: undefined;
        };
    } | {
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
            aref?: undefined;
            bref?: undefined;
            book?: undefined;
            end?: undefined;
            target_bref?: undefined;
        };
        out: {
            ok: boolean;
            account: {
                id: string;
                path0: string;
                path1: string;
                path2: string;
                org_id: string;
                oref: string;
                aref: string;
                path: string[];
                name: string;
                normal: string;
            };
            why?: undefined;
            book?: undefined;
            account_id?: undefined;
            aref?: undefined;
            balance?: undefined;
            original_balance?: undefined;
            closing_balance?: undefined;
            opening_balance?: undefined;
            opening_balance_aref?: undefined;
            closing_entries?: undefined;
            opening_entries?: undefined;
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
            aref?: undefined;
            bref?: undefined;
            account?: undefined;
            end?: undefined;
            target_bref?: undefined;
        };
        out: {
            ok: boolean;
            book: {
                id: string;
                org_id: string;
                oref: string;
                bref: string;
                name: string;
                start: number;
                end: number;
                time: {
                    kind: string;
                };
            };
            why?: undefined;
            account?: undefined;
            account_id?: undefined;
            aref?: undefined;
            balance?: undefined;
            original_balance?: undefined;
            closing_balance?: undefined;
            opening_balance?: undefined;
            opening_balance_aref?: undefined;
            closing_entries?: undefined;
            opening_entries?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref: string;
            bref: string;
            account?: undefined;
            book?: undefined;
            end?: undefined;
            target_bref?: undefined;
        };
        out: {
            ok: boolean;
            account_id: string;
            aref: string;
            balance: number;
            why?: undefined;
            account?: undefined;
            book?: undefined;
            original_balance?: undefined;
            closing_balance?: undefined;
            opening_balance?: undefined;
            opening_balance_aref?: undefined;
            closing_entries?: undefined;
            opening_entries?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref: string;
            bref: string;
            end: number;
            account?: undefined;
            book?: undefined;
            target_bref?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            account?: undefined;
            book?: undefined;
            account_id?: undefined;
            aref?: undefined;
            balance?: undefined;
            original_balance?: undefined;
            closing_balance?: undefined;
            opening_balance?: undefined;
            opening_balance_aref?: undefined;
            closing_entries?: undefined;
            opening_entries?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref: string;
            bref: string;
            end: number;
            account?: undefined;
            book?: undefined;
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
            account?: undefined;
            book?: undefined;
            account_id?: undefined;
            balance?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref: string;
            bref: string;
            target_bref: string;
            end: number;
            account?: undefined;
            book?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            account?: undefined;
            book?: undefined;
            account_id?: undefined;
            aref?: undefined;
            balance?: undefined;
            original_balance?: undefined;
            closing_balance?: undefined;
            opening_balance?: undefined;
            opening_balance_aref?: undefined;
            closing_entries?: undefined;
            opening_entries?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            account: {
                id$: string;
                oref: string;
                path: string[];
                name: string;
                normal: string;
            };
            aref?: undefined;
            bref?: undefined;
            book?: undefined;
            end?: undefined;
            target_bref?: undefined;
        };
        out: {
            ok: boolean;
            account: {
                id: string;
                path0: string;
                path1: string;
                path2: string;
                aref: string;
                path: string[];
                name: string;
                org_id?: undefined;
                oref?: undefined;
                normal?: undefined;
            };
            why?: undefined;
            book?: undefined;
            account_id?: undefined;
            aref?: undefined;
            balance?: undefined;
            original_balance?: undefined;
            closing_balance?: undefined;
            opening_balance?: undefined;
            opening_balance_aref?: undefined;
            closing_entries?: undefined;
            opening_entries?: undefined;
        };
    } | {
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
            aref?: undefined;
            bref?: undefined;
            book?: undefined;
            end?: undefined;
            target_bref?: undefined;
        };
        out: {
            ok: boolean;
            account: {
                id: string;
                aref: string;
                normal: string;
                path0?: undefined;
                path1?: undefined;
                path2?: undefined;
                org_id?: undefined;
                oref?: undefined;
                path?: undefined;
                name?: undefined;
            };
            why?: undefined;
            book?: undefined;
            account_id?: undefined;
            aref?: undefined;
            balance?: undefined;
            original_balance?: undefined;
            closing_balance?: undefined;
            opening_balance?: undefined;
            opening_balance_aref?: undefined;
            closing_entries?: undefined;
            opening_entries?: undefined;
        };
    })[];
};
export default _default;
