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
        };
        out: {
            ok: boolean;
            why: string;
            account?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            account: {
                path: string;
                name: string;
                normal: string;
                org_id?: undefined;
                id$?: undefined;
                oref?: undefined;
            };
        };
        out: {
            ok: boolean;
            why: string;
            account?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            account: {
                oref: string;
                path: string;
                normal: string;
                org_id?: undefined;
                id$?: undefined;
                name?: undefined;
            };
        };
        out: {
            ok: boolean;
            why: string;
            account?: undefined;
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
                org_id?: undefined;
                id$?: undefined;
            };
        };
        out: {
            ok: boolean;
            why: string;
            account?: undefined;
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
        };
        out: {
            why?: undefined;
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
        };
        out: {
            why?: undefined;
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
        };
        out: {
            why?: undefined;
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
        };
    } | {
        name: string;
        pattern: string;
        params: {
            account: {
                org_id?: undefined;
                id$: string;
                oref: string;
                path: string;
                name: string;
                normal: string;
            };
        };
        out: {
            why?: undefined;
            ok: boolean;
            account: {
                org_id?: undefined;
                path0?: undefined;
                path1?: undefined;
                path2?: undefined;
                path?: undefined;
                oref?: undefined;
                name?: undefined;
                id: string;
                aref: string;
                normal: string;
            };
        };
    })[];
};
export default _default;
