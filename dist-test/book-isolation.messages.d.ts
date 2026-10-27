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
            book?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            end?: undefined;
            aref?: undefined;
            bref?: undefined;
            book_id?: undefined;
        };
        out: {
            ok: boolean;
            account: {
                id: string;
                aref: string;
            };
            debits?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            why?: undefined;
            debitTotal?: undefined;
            balance?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
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
            };
            account?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            end?: undefined;
            aref?: undefined;
            bref?: undefined;
            book_id?: undefined;
        };
        out: {
            ok: boolean;
            book: {
                id: string;
                bref: string;
            };
            account?: undefined;
            debits?: undefined;
            credit?: undefined;
            debit?: undefined;
            why?: undefined;
            debitTotal?: undefined;
            balance?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            id: string;
            bref: string;
            daref: string;
            caref: string;
            val: number;
            desc: string;
            date: number;
            account?: undefined;
            book?: undefined;
            oref?: undefined;
            end?: undefined;
            aref?: undefined;
            book_id?: undefined;
        };
        out: {
            ok: boolean;
            credit: {
                id: string;
                book_id: string;
                bref: string;
            };
            debit: {
                id: string;
                book_id: string;
                bref: string;
            };
            account?: undefined;
            debits?: undefined;
            book?: undefined;
            why?: undefined;
            debitTotal?: undefined;
            balance?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            id: string;
            book_id: string;
            daref: string;
            caref: string;
            val: number;
            desc: string;
            date: number;
            account?: undefined;
            book?: undefined;
            oref?: undefined;
            end?: undefined;
            aref?: undefined;
            bref?: undefined;
        };
        out: {
            ok: boolean;
            credit: {
                id: string;
                book_id: string;
                bref: string;
            };
            debit: {
                id: string;
                book_id: string;
                bref: string;
            };
            account?: undefined;
            debits?: undefined;
            book?: undefined;
            why?: undefined;
            debitTotal?: undefined;
            balance?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref: string;
            bref: string;
            account?: undefined;
            book?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            end?: undefined;
            book_id?: undefined;
        };
        out: {
            ok: boolean;
            book_id: string;
            debitTotal: number;
            balance: number;
            account?: undefined;
            debits?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            why?: undefined;
            closure_successful?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref: string;
            book_id: string;
            account?: undefined;
            book?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            end?: undefined;
            bref?: undefined;
        };
        out: {
            ok: boolean;
            book_id: string;
            debitTotal: number;
            balance: number;
            account?: undefined;
            debits?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            why?: undefined;
            closure_successful?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            oref: string;
            bref: string;
            account?: undefined;
            book?: undefined;
            id?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            end?: undefined;
            aref?: undefined;
            book_id?: undefined;
        };
        out: {
            ok: boolean;
            debitTotal: number;
            debits: {
                id: string;
                val: number;
                book_id: string;
            }[];
            account?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            why?: undefined;
            balance?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            oref: string;
            book_id: string;
            account?: undefined;
            book?: undefined;
            id?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            end?: undefined;
            aref?: undefined;
            bref?: undefined;
        };
        out: {
            ok: boolean;
            debitTotal: number;
            debits: {
                id: string;
                val: number;
                book_id: string;
            }[];
            account?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            why?: undefined;
            balance?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            bref: string;
            end: number;
            account?: undefined;
            book?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            aref?: undefined;
            book_id?: undefined;
        };
        out: {
            ok: boolean;
            book_id: string;
            closure_successful: boolean;
            account?: undefined;
            debits?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            why?: undefined;
            debitTotal?: undefined;
            balance?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            id: string;
            bref: string;
            daref: string;
            caref: string;
            val: number;
            desc: string;
            date: number;
            account?: undefined;
            book?: undefined;
            oref?: undefined;
            end?: undefined;
            aref?: undefined;
            book_id?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            account?: undefined;
            debits?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            debitTotal?: undefined;
            balance?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            id: string;
            bref: string;
            daref: string;
            caref: string;
            val: number;
            desc: string;
            date: number;
            account?: undefined;
            book?: undefined;
            oref?: undefined;
            end?: undefined;
            aref?: undefined;
            book_id?: undefined;
        };
        out: {
            ok: boolean;
            credit: {
                book_id: string;
                id?: undefined;
                bref?: undefined;
            };
            debit: {
                book_id: string;
                id?: undefined;
                bref?: undefined;
            };
            account?: undefined;
            debits?: undefined;
            book?: undefined;
            why?: undefined;
            debitTotal?: undefined;
            balance?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
        };
    })[];
};
export default _default;
