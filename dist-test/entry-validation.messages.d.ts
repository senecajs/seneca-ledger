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
            credit?: undefined;
            debit?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            aref?: undefined;
            bref?: undefined;
        };
        out: {
            ok: boolean;
            book: {
                id: string;
                bref: string;
                end?: undefined;
            };
            credits?: undefined;
            debits?: undefined;
            credit?: undefined;
            debit?: undefined;
            why?: undefined;
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
            credit?: undefined;
            debit?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            aref?: undefined;
            bref?: undefined;
        };
        out: {
            ok: boolean;
            book: {
                id: string;
                bref: string;
                end?: undefined;
            };
            credits?: undefined;
            debits?: undefined;
            credit?: undefined;
            debit?: undefined;
            why?: undefined;
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
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            credits?: undefined;
            debits?: undefined;
            book?: undefined;
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
            daref: string;
            caref: string;
            desc: string;
            date: number;
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            val?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            credits?: undefined;
            debits?: undefined;
            book?: undefined;
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
            daref: string;
            caref: string;
            val: number;
            date: number;
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            desc?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            credits?: undefined;
            debits?: undefined;
            book?: undefined;
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
            daref: string;
            caref: string;
            val: number;
            desc: string;
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            date?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            credits?: undefined;
            debits?: undefined;
            book?: undefined;
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
            daref: string;
            caref: string;
            val: number;
            desc: string;
            date: number;
            baseval: number;
            basecur: string;
            baserate: number;
            kind?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            aref?: undefined;
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
            credits?: undefined;
            debits?: undefined;
            book?: undefined;
            why?: undefined;
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
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            aref?: undefined;
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
            credits?: undefined;
            debits?: undefined;
            book?: undefined;
            why?: undefined;
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
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            credits?: undefined;
            debits?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
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
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            id?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            credits?: undefined;
            debits?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
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
            ok: boolean;
            credits: {
                val: number;
                desc: string;
                caref: string;
            }[];
            debits: never[];
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            why?: undefined;
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
            ok: boolean;
            credits: never[];
            debits: {
                val: number;
                desc: string;
                daref: string;
            }[];
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            why?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
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
            aref?: undefined;
        };
        out: {
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
            credits?: undefined;
            debits?: undefined;
            book?: undefined;
            why?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            id: string;
            oref: string;
            bref: string;
            daref: string;
            caref: string;
            val: number;
            desc: string;
            date: number;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            aref?: undefined;
        };
        out: {
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
            credits?: undefined;
            debits?: undefined;
            book?: undefined;
            why?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            book: {
                time?: undefined;
                id$: string;
                oref: string;
                name: string;
                start: number;
                end?: undefined;
            };
            credit?: undefined;
            debit?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            aref?: undefined;
            bref?: undefined;
        };
        out: {
            ok: boolean;
            book: {
                id: string;
                bref: string;
                end: number;
            };
            credits?: undefined;
            debits?: undefined;
            credit?: undefined;
            debit?: undefined;
            why?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            baseval?: undefined;
            basecur?: undefined;
            baserate?: undefined;
            kind?: undefined;
            id: string;
            oref: string;
            bref: string;
            daref: string;
            caref: string;
            val: number;
            desc: string;
            date: number;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            credit: {
                baseval?: undefined;
                basecur?: undefined;
                baserate?: undefined;
                kind?: undefined;
                val: number;
                book_id: string;
                caref?: undefined;
                desc?: undefined;
                date?: undefined;
            };
            debit: {
                baseval?: undefined;
                basecur?: undefined;
                baserate?: undefined;
                kind?: undefined;
                val: number;
                book_id: string;
                daref?: undefined;
                desc?: undefined;
                date?: undefined;
            };
            credits?: undefined;
            debits?: undefined;
            book?: undefined;
            why?: undefined;
        };
    })[];
};
export default _default;
