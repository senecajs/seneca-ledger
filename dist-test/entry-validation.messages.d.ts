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
            id?: undefined;
            oref?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
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
                end?: undefined;
            };
            why?: undefined;
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
                end?: undefined;
            };
            why?: undefined;
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
            why: string;
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
            book?: undefined;
            val?: undefined;
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
            book?: undefined;
            desc?: undefined;
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
            book?: undefined;
            date?: undefined;
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
            book?: undefined;
            why?: undefined;
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
                book_id?: undefined;
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
                book_id?: undefined;
            };
            book?: undefined;
            why?: undefined;
            credits?: undefined;
            debits?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            bref: string;
            book?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
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
            book?: undefined;
            id?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
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
            book?: undefined;
            id?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
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
            book?: undefined;
            why?: undefined;
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
            book?: undefined;
            id?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
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
            book?: undefined;
            why?: undefined;
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
            book?: undefined;
            daref?: undefined;
            caref?: undefined;
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
                book_id?: undefined;
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
                book_id?: undefined;
            };
            book?: undefined;
            why?: undefined;
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
                book_id?: undefined;
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
                book_id?: undefined;
            };
            book?: undefined;
            why?: undefined;
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
                end?: undefined;
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
                end: number;
            };
            why?: undefined;
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
            credit: {
                val: number;
                book_id: string;
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
                book_id: string;
                desc?: undefined;
                baseval?: undefined;
                basecur?: undefined;
                baserate?: undefined;
                date?: undefined;
                kind?: undefined;
                daref?: undefined;
            };
            book?: undefined;
            why?: undefined;
            credits?: undefined;
            debits?: undefined;
        };
    })[];
};
export default _default;
