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
            id?: undefined;
            account_id?: undefined;
            org_id?: undefined;
            account?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            account?: undefined;
            q?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            id: string;
            aref?: undefined;
            account_id?: undefined;
            org_id?: undefined;
            account?: undefined;
        };
        out: {
            ok: boolean;
            account: {
                id: string;
                aref?: undefined;
            };
            why?: undefined;
            q?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            account_id: string;
            aref?: undefined;
            id?: undefined;
            org_id?: undefined;
            account?: undefined;
        };
        out: {
            ok: boolean;
            account: {
                id: string;
                aref: string;
            };
            why?: undefined;
            q?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            org_id: string;
            aref?: undefined;
            id?: undefined;
            account_id?: undefined;
            account?: undefined;
        };
        out: {
            ok: boolean;
            q: {
                org_id: string;
            };
            why?: undefined;
            account?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref?: undefined;
            id?: undefined;
            account_id?: undefined;
            org_id?: undefined;
            account?: undefined;
        };
        out: {
            ok: boolean;
            q: {
                org_id?: undefined;
            };
            why?: undefined;
            account?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref: string;
            account: {
                custom_field: string;
            };
            id?: undefined;
            account_id?: undefined;
            org_id?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            account?: undefined;
            q?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            id: string;
            aref?: undefined;
            account_id?: undefined;
            org_id?: undefined;
            account?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            account?: undefined;
            q?: undefined;
        };
    })[];
};
export default _default;
