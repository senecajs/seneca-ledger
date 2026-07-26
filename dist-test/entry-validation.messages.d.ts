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
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            aref?: undefined;
            debit?: undefined;
            credit?: undefined;
            id?: undefined;
            oref?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
        };
        out: {
            ok: boolean;
            book: {
                id: string;
                bref: string;
                end?: undefined;
            };
            why?: undefined;
            credits?: undefined;
            debits?: undefined;
            debit?: undefined;
            credit?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            book: {
                time?: undefined;
                id$: string;
                oref: string;
                name: string;
                start: number;
                end: number;
            };
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            aref?: undefined;
            debit?: undefined;
            credit?: undefined;
            id?: undefined;
            oref?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
        };
        out: {
            ok: boolean;
            book: {
                id: string;
                bref: string;
                end?: undefined;
            };
            why?: undefined;
            credits?: undefined;
            debits?: undefined;
            debit?: undefined;
            credit?: undefined;
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
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            aref?: undefined;
            debit?: undefined;
            credit?: undefined;
            book?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            credits?: undefined;
            debits?: undefined;
            debit?: undefined;
            credit?: undefined;
            book?: undefined;
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
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            aref?: undefined;
            debit?: undefined;
            credit?: undefined;
            book?: undefined;
            val?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            credits?: undefined;
            debits?: undefined;
            debit?: undefined;
            credit?: undefined;
            book?: undefined;
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
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            aref?: undefined;
            debit?: undefined;
            credit?: undefined;
            book?: undefined;
            desc?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            credits?: undefined;
            debits?: undefined;
            debit?: undefined;
            credit?: undefined;
            book?: undefined;
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
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            aref?: undefined;
            debit?: undefined;
            credit?: undefined;
            book?: undefined;
            date?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            credits?: undefined;
            debits?: undefined;
            debit?: undefined;
            credit?: undefined;
            book?: undefined;
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
            kind?: undefined;
            aref?: undefined;
            debit?: undefined;
            credit?: undefined;
            book?: undefined;
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
                book_id?: undefined;
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
                book_id?: undefined;
            };
            why?: undefined;
            credits?: undefined;
            debits?: undefined;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            id: string;
            oref: string;
            bref: string;
            daref: string;
            caref: string;
            val: number;
            desc: string;
            date: number;
            kind: string;
            aref?: undefined;
            debit?: undefined;
            credit?: undefined;
            book?: undefined;
        };
        out: {
            ok: boolean;
            credit: {
                baseval?: undefined;
                basecur?: undefined;
                baserate?: undefined;
                val: number;
                desc: string;
                kind: string;
                date: number;
                caref?: undefined;
                book_id?: undefined;
            };
            debit: {
                baseval?: undefined;
                basecur?: undefined;
                baserate?: undefined;
                val: number;
                desc: string;
                kind: string;
                date: number;
                daref?: undefined;
                book_id?: undefined;
            };
            why?: undefined;
            credits?: undefined;
            debits?: undefined;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            bref: string;
            aref?: undefined;
            debit?: undefined;
            credit?: undefined;
            book?: undefined;
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
            why: string;
            credits?: undefined;
            debits?: undefined;
            debit?: undefined;
            credit?: undefined;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            oref: string;
            bref: string;
            aref?: undefined;
            debit?: undefined;
            credit?: undefined;
            book?: undefined;
            id?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            credits?: undefined;
            debits?: undefined;
            debit?: undefined;
            credit?: undefined;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            oref: string;
            bref: string;
            aref: string;
            credit: boolean;
            debit: boolean;
            book?: undefined;
            id?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
        };
        out: {
            why?: undefined;
            ok: boolean;
            credits: {
                val: number;
                desc: string;
                caref: string;
            }[];
            debits: never[];
            debit?: undefined;
            credit?: undefined;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            oref: string;
            bref: string;
            aref: string;
            credit: boolean;
            debit: boolean;
            book?: undefined;
            id?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
        };
        out: {
            why?: undefined;
            ok: boolean;
            credits: never[];
            debits: {
                val: number;
                desc: string;
                daref: string;
            }[];
            debit?: undefined;
            credit?: undefined;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            aref?: undefined;
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
            book?: undefined;
            daref?: undefined;
            caref?: undefined;
        };
        out: {
            why?: undefined;
            credits?: undefined;
            debits?: undefined;
            ok: boolean;
            credit: {
                baseval?: undefined;
                basecur?: undefined;
                baserate?: undefined;
                kind?: undefined;
                val: number;
                desc: string;
                caref: string;
                date?: undefined;
                book_id?: undefined;
            };
            debit: {
                baseval?: undefined;
                basecur?: undefined;
                baserate?: undefined;
                kind?: undefined;
                val: number;
                desc: string;
                daref: string;
                date?: undefined;
                book_id?: undefined;
            };
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            aref?: undefined;
            debit?: undefined;
            credit?: undefined;
            id: string;
            oref: string;
            bref: string;
            daref: string;
            caref: string;
            val: number;
            desc: string;
            date: number;
            book?: undefined;
        };
        out: {
            why?: undefined;
            credits?: undefined;
            debits?: undefined;
            ok: boolean;
            credit: {
                baseval?: undefined;
                basecur?: undefined;
                baserate?: undefined;
                kind?: undefined;
                val: number;
                caref?: undefined;
                desc?: undefined;
                date?: undefined;
                book_id?: undefined;
            };
            debit: {
                baseval?: undefined;
                basecur?: undefined;
                baserate?: undefined;
                kind?: undefined;
                val: number;
                daref?: undefined;
                desc?: undefined;
                date?: undefined;
                book_id?: undefined;
            };
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            aref?: undefined;
            debit?: undefined;
            credit?: undefined;
            book: {
                time?: undefined;
                id$: string;
                oref: string;
                name: string;
                start: number;
                end?: undefined;
            };
            id?: undefined;
            oref?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
        };
        out: {
            why?: undefined;
            credits?: undefined;
            debits?: undefined;
            debit?: undefined;
            credit?: undefined;
            ok: boolean;
            book: {
                id: string;
                bref: string;
                end: number;
            };
        };
    } | {
        name: string;
        pattern: string;
        params: {
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            aref?: undefined;
            debit?: undefined;
            credit?: undefined;
            book?: undefined;
            id: string;
            oref: string;
            bref: string;
            daref: string;
            caref: string;
            val: number;
            desc: string;
            date: number;
        };
        out: {
            why?: undefined;
            credits?: undefined;
            debits?: undefined;
            book?: undefined;
            ok: boolean;
            credit: {
                baseval?: undefined;
                basecur?: undefined;
                baserate?: undefined;
                kind?: undefined;
                caref?: undefined;
                desc?: undefined;
                date?: undefined;
                val: number;
                book_id: string;
            };
            debit: {
                baseval?: undefined;
                basecur?: undefined;
                baserate?: undefined;
                kind?: undefined;
                daref?: undefined;
                desc?: undefined;
                date?: undefined;
                val: number;
                book_id: string;
            };
        };
    })[];
};
export default _default;
