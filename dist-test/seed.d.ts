export declare const account: {
    cash: {
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
    };
    sales: {
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
    };
    office: {
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
    };
    creditCard: {
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
    };
};
export declare const book: {
    q1: {
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
    };
    q2: {
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
    };
};
export declare const chartOfAccounts: {
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
}[];
