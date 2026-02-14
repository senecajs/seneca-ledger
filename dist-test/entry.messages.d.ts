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
            id: string;
            oref: string;
            bref: string;
            daref: string;
            caref: string;
            val: number;
            desc: string;
            date: number;
            book?: undefined;
            account?: undefined;
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            aref?: undefined;
            credit?: undefined;
            debit?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            book?: undefined;
            account?: undefined;
            credit?: undefined;
            debit?: undefined;
            credits?: undefined;
            debits?: undefined;
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
            id?: undefined;
            oref?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            account?: undefined;
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            aref?: undefined;
            credit?: undefined;
            debit?: undefined;
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
            credit?: undefined;
            debit?: undefined;
            credits?: undefined;
            debits?: undefined;
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
            id?: undefined;
            oref?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            book?: undefined;
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            aref?: undefined;
            credit?: undefined;
            debit?: undefined;
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
            credit?: undefined;
            debit?: undefined;
            credits?: undefined;
            debits?: undefined;
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
            id?: undefined;
            oref?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            book?: undefined;
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            aref?: undefined;
            credit?: undefined;
            debit?: undefined;
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
            credit?: undefined;
            debit?: undefined;
            credits?: undefined;
            debits?: undefined;
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
            desc: string;
            date: number;
            val?: undefined;
            book?: undefined;
            account?: undefined;
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            aref?: undefined;
            credit?: undefined;
            debit?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            book?: undefined;
            account?: undefined;
            credit?: undefined;
            debit?: undefined;
            credits?: undefined;
            debits?: undefined;
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
            date: number;
            desc?: undefined;
            book?: undefined;
            account?: undefined;
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            aref?: undefined;
            credit?: undefined;
            debit?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            book?: undefined;
            account?: undefined;
            credit?: undefined;
            debit?: undefined;
            credits?: undefined;
            debits?: undefined;
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
            date?: undefined;
            book?: undefined;
            account?: undefined;
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            aref?: undefined;
            credit?: undefined;
            debit?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            book?: undefined;
            account?: undefined;
            credit?: undefined;
            debit?: undefined;
            credits?: undefined;
            debits?: undefined;
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
                time?: undefined;
            };
            id?: undefined;
            oref?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            account?: undefined;
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            aref?: undefined;
            credit?: undefined;
            debit?: undefined;
        };
        out: {
            ok: boolean;
            book: {
                id: string;
                bref: string;
                org_id?: undefined;
                oref?: undefined;
                name?: undefined;
                start?: undefined;
                end?: undefined;
                time?: undefined;
            };
            why?: undefined;
            account?: undefined;
            credit?: undefined;
            debit?: undefined;
            credits?: undefined;
            debits?: undefined;
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
            baseval: number;
            basecur: string;
            baserate: number;
            book?: undefined;
            account?: undefined;
            kind?: undefined;
            aref?: undefined;
            credit?: undefined;
            debit?: undefined;
        };
        out: {
            ok: boolean;
            credit: {
                val: number;
                desc: string;
                baseval: number;
                basecur: string;
                baserate: number;
                date: number;
                kind?: undefined;
                caref?: undefined;
            };
            debit: {
                val: number;
                desc: string;
                baseval: number;
                basecur: string;
                baserate: number;
                date: number;
                kind?: undefined;
                daref?: undefined;
            };
            why?: undefined;
            book?: undefined;
            account?: undefined;
            credits?: undefined;
            debits?: undefined;
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
            kind: string;
            book?: undefined;
            account?: undefined;
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            aref?: undefined;
            credit?: undefined;
            debit?: undefined;
        };
        out: {
            ok: boolean;
            credit: {
                val: number;
                desc: string;
                kind: string;
                date: number;
                baseval?: undefined;
                basecur?: undefined;
                baserate?: undefined;
                caref?: undefined;
            };
            debit: {
                val: number;
                desc: string;
                kind: string;
                date: number;
                baseval?: undefined;
                basecur?: undefined;
                baserate?: undefined;
                daref?: undefined;
            };
            why?: undefined;
            book?: undefined;
            account?: undefined;
            credits?: undefined;
            debits?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            bref: string;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            book?: undefined;
            account?: undefined;
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            aref?: undefined;
            credit?: undefined;
            debit?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            book?: undefined;
            account?: undefined;
            credit?: undefined;
            debit?: undefined;
            credits?: undefined;
            debits?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            oref: string;
            bref: string;
            aref: string;
            credit: boolean;
            debit: boolean;
            id?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            book?: undefined;
            account?: undefined;
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
        };
        out: {
            ok: boolean;
            credits: {
                val: number;
                desc: string;
                caref: string;
            }[];
            debits: never[];
            why?: undefined;
            book?: undefined;
            account?: undefined;
            credit?: undefined;
            debit?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            oref: string;
            bref: string;
            aref: string;
            credit: boolean;
            debit: boolean;
            id?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            book?: undefined;
            account?: undefined;
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
        };
        out: {
            ok: boolean;
            credits: never[];
            debits: {
                val: number;
                desc: string;
                daref: string;
            }[];
            why?: undefined;
            book?: undefined;
            account?: undefined;
            credit?: undefined;
            debit?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            id: string;
            oref: string;
            bref: string;
            debit: {
                aref: string;
            };
            credit: {
                aref: string;
            };
            val: number;
            desc: string;
            date: number;
            daref?: undefined;
            caref?: undefined;
            book?: undefined;
            account?: undefined;
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            credit: {
                val: number;
                desc: string;
                caref: string;
                baseval?: undefined;
                basecur?: undefined;
                baserate?: undefined;
                date?: undefined;
                kind?: undefined;
            };
            debit: {
                val: number;
                desc: string;
                daref: string;
                baseval?: undefined;
                basecur?: undefined;
                baserate?: undefined;
                date?: undefined;
                kind?: undefined;
            };
            why?: undefined;
            book?: undefined;
            account?: undefined;
            credits?: undefined;
            debits?: undefined;
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
            book?: undefined;
            account?: undefined;
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            aref?: undefined;
            credit?: undefined;
            debit?: undefined;
        };
        out: {
            ok: boolean;
            credit: {
                val: number;
                desc?: undefined;
                baseval?: undefined;
                basecur?: undefined;
                baserate?: undefined;
                date?: undefined;
                kind?: undefined;
                caref?: undefined;
            };
            debit: {
                val: number;
                desc?: undefined;
                baseval?: undefined;
                basecur?: undefined;
                baserate?: undefined;
                date?: undefined;
                kind?: undefined;
                daref?: undefined;
            };
            why?: undefined;
            book?: undefined;
            account?: undefined;
            credits?: undefined;
            debits?: undefined;
        };
    })[];
};
export default _default;
