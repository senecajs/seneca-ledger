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
            account?: undefined;
            id?: undefined;
            oref?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            account?: undefined;
            credit?: undefined;
            debit?: undefined;
            account_id?: undefined;
            aref?: undefined;
            creditTotal?: undefined;
            debitTotal?: undefined;
            balance?: undefined;
            normal?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            account: {
                path: string;
                name: string;
                normal: string;
                oref?: undefined;
                id$?: undefined;
                org_id?: undefined;
            };
            id?: undefined;
            oref?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            account?: undefined;
            credit?: undefined;
            debit?: undefined;
            account_id?: undefined;
            aref?: undefined;
            creditTotal?: undefined;
            debitTotal?: undefined;
            balance?: undefined;
            normal?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            account: {
                oref: string;
                path: string;
                normal: string;
                name?: undefined;
                id$?: undefined;
                org_id?: undefined;
            };
            id?: undefined;
            oref?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            account?: undefined;
            credit?: undefined;
            debit?: undefined;
            account_id?: undefined;
            aref?: undefined;
            creditTotal?: undefined;
            debitTotal?: undefined;
            balance?: undefined;
            normal?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            account: {
                oref: string;
                path: string;
                name: string;
                normal: string;
                id$?: undefined;
                org_id?: undefined;
            };
            id?: undefined;
            oref?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            account?: undefined;
            credit?: undefined;
            debit?: undefined;
            account_id?: undefined;
            aref?: undefined;
            creditTotal?: undefined;
            debitTotal?: undefined;
            balance?: undefined;
            normal?: undefined;
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
                org_id?: undefined;
            };
            id?: undefined;
            oref?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            aref?: undefined;
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
            credit?: undefined;
            debit?: undefined;
            account_id?: undefined;
            aref?: undefined;
            creditTotal?: undefined;
            debitTotal?: undefined;
            balance?: undefined;
            normal?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            account: {
                id$: string;
                org_id: string;
                path: string;
                name: string;
                normal: string;
                oref?: undefined;
            };
            id?: undefined;
            oref?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            aref?: undefined;
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
            credit?: undefined;
            debit?: undefined;
            account_id?: undefined;
            aref?: undefined;
            creditTotal?: undefined;
            debitTotal?: undefined;
            balance?: undefined;
            normal?: undefined;
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
                org_id?: undefined;
            };
            id?: undefined;
            oref?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            aref?: undefined;
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
            credit?: undefined;
            debit?: undefined;
            account_id?: undefined;
            aref?: undefined;
            creditTotal?: undefined;
            debitTotal?: undefined;
            balance?: undefined;
            normal?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            id: string;
            oref: string;
            bref: string;
            daref: string;
            caref: string;
            val: number;
            desc: string;
            date: number;
            account?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            credit: {
                val: number;
                desc: string;
            };
            debit: {
                val: number;
                desc: string;
            };
            why?: undefined;
            account?: undefined;
            account_id?: undefined;
            aref?: undefined;
            creditTotal?: undefined;
            debitTotal?: undefined;
            balance?: undefined;
            normal?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref: string;
            bref: string;
            account?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
        };
        out: {
            ok: boolean;
            account_id: string;
            aref: string;
            creditTotal: number;
            debitTotal: number;
            balance: number;
            normal: string;
            why?: undefined;
            account?: undefined;
            credit?: undefined;
            debit?: undefined;
        };
    })[];
};
export default _default;
