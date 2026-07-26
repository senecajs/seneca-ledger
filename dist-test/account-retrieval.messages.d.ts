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
            aref: string;
            account_id?: undefined;
            org_id?: undefined;
            account?: undefined;
            id?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            q?: {};
            account?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            id: string;
            account_id?: undefined;
            org_id?: undefined;
            aref?: undefined;
            account?: undefined;
        };
        out: {
            ok: boolean;
            account: {
                id: string;
                aref?: undefined;
            };
            q?: {};
            why?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            account_id: string;
            org_id?: undefined;
            aref?: undefined;
            account?: undefined;
            id?: undefined;
        };
        out: {
            ok: boolean;
            account: {
                id: string;
                aref: string;
            };
            q?: {};
            why?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            account_id?: undefined;
            org_id: string;
            aref?: undefined;
            account?: undefined;
            id?: undefined;
        };
        out: {
            ok: boolean;
            q: {
                org_id: string;
            };
            account?: undefined;
            why?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            account_id?: undefined;
            org_id?: undefined;
            aref?: undefined;
            account?: undefined;
            id?: undefined;
        };
        out: {
            ok: boolean;
            q: {
                org_id?: undefined;
            };
            account?: undefined;
            why?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            account_id?: undefined;
            org_id?: undefined;
            aref: string;
            account: {
                custom_field: string;
            };
            id?: undefined;
        };
        out: {
            q?: {};
            account?: undefined;
            ok: boolean;
            why: string;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            account_id?: undefined;
            org_id?: undefined;
            aref?: undefined;
            account?: undefined;
            id: string;
        };
        out: {
            q?: {};
            account?: undefined;
            ok: boolean;
            why: string;
        };
    })[];
};
export default _default;
