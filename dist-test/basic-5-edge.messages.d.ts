declare const _default: ({
    name: string;
    pattern: string;
    params: {
        aref: string;
        id?: undefined;
        account_id?: undefined;
        org_id?: undefined;
        account?: undefined;
        book?: undefined;
    };
    out: {
        ok: boolean;
        why: string;
        account?: undefined;
        q?: undefined;
        book?: undefined;
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
        book?: undefined;
    };
    out: {
        ok: boolean;
        account: {
            id: string;
            aref?: undefined;
        };
        why?: undefined;
        q?: undefined;
        book?: undefined;
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
        book?: undefined;
    };
    out: {
        ok: boolean;
        account: {
            id: string;
            aref: string;
        };
        why?: undefined;
        q?: undefined;
        book?: undefined;
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
        book?: undefined;
    };
    out: {
        ok: boolean;
        q: {
            org_id: string;
        };
        why?: undefined;
        account?: undefined;
        book?: undefined;
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
        book?: undefined;
    };
    out: {
        ok: boolean;
        q: {
            org_id?: undefined;
        };
        why?: undefined;
        account?: undefined;
        book?: undefined;
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
        book?: undefined;
    };
    out: {
        ok: boolean;
        why: string;
        account?: undefined;
        q?: undefined;
        book?: undefined;
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
        book?: undefined;
    };
    out: {
        ok: boolean;
        why: string;
        account?: undefined;
        q?: undefined;
        book?: undefined;
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
        book?: undefined;
    };
    out: {
        ok: boolean;
        why: string;
        account?: undefined;
        q?: undefined;
        book?: undefined;
    };
} | {
    name: string;
    pattern: string;
    params: {
        book: {
            oref: string;
            name: string;
            start?: undefined;
            id$?: undefined;
            end?: undefined;
            time?: undefined;
        };
        aref?: undefined;
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
        book?: undefined;
    };
} | {
    name: string;
    pattern: string;
    params: {
        book: {
            name: string;
            start: number;
            oref?: undefined;
            id$?: undefined;
            end?: undefined;
            time?: undefined;
        };
        aref?: undefined;
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
        book?: undefined;
    };
} | {
    name: string;
    pattern: string;
    params: {
        book: {
            oref: string;
            start: number;
            name?: undefined;
            id$?: undefined;
            end?: undefined;
            time?: undefined;
        };
        aref?: undefined;
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
        book?: undefined;
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
            time: {
                kind: string;
                timezone: string;
            };
        };
        aref?: undefined;
        id?: undefined;
        account_id?: undefined;
        org_id?: undefined;
        account?: undefined;
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
                timezone: string;
            };
        };
        why?: undefined;
        account?: undefined;
        q?: undefined;
    };
})[];
export default _default;
