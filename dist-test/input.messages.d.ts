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
                oref?: undefined;
                id$?: undefined;
                org_id?: undefined;
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
                name?: undefined;
                id$?: undefined;
                org_id?: undefined;
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
                id$?: undefined;
                org_id?: undefined;
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
        };
    })[];
};
export default _default;
