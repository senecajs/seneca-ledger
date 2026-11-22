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
            org_id?: undefined;
            account?: undefined;
            id?: undefined;
            account_id?: undefined;
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
            org_id?: undefined;
            account?: undefined;
            aref?: undefined;
            account_id?: undefined;
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
            account?: undefined;
            id?: undefined;
            aref?: undefined;
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
            org_id: string;
            account?: undefined;
            id?: undefined;
            aref?: undefined;
            account_id?: undefined;
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
            org_id?: undefined;
            account?: undefined;
            id?: undefined;
            aref?: undefined;
            account_id?: undefined;
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
            aref: string;
            account: {
                custom_field: string;
            };
            org_id?: undefined;
            id?: undefined;
            account_id?: undefined;
        };
        out: {
            q?: {};
            ok: boolean;
            why: string;
            account?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            id: string;
            org_id?: undefined;
            account?: undefined;
            aref?: undefined;
            account_id?: undefined;
        };
        out: {
            q?: {};
            ok: boolean;
            why: string;
            account?: undefined;
        };
    })[];
};
export default _default;
