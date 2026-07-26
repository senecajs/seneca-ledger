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
            aref?: undefined;
            oref?: undefined;
            book_id?: undefined;
            end?: undefined;
            id?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
        };
        out: {
            ok: boolean;
            account: {
                id: string;
                aref: string;
            };
            book?: undefined;
            balance?: undefined;
            book_id?: undefined;
            debitTotal?: undefined;
            debits?: undefined;
            closure_successful?: undefined;
            why?: undefined;
            credit?: undefined;
            debit?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            account?: undefined;
            book: {
                id$: string;
                oref: string;
                name: string;
                start: number;
                end: number;
            };
            aref?: undefined;
            oref?: undefined;
            book_id?: undefined;
            end?: undefined;
            id?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
        };
        out: {
            account?: undefined;
            ok: boolean;
            book: {
                id: string;
                bref: string;
            };
            balance?: undefined;
            book_id?: undefined;
            debitTotal?: undefined;
            debits?: undefined;
            closure_successful?: undefined;
            why?: undefined;
            credit?: undefined;
            debit?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            account?: undefined;
            book?: undefined;
            id: string;
            bref: string;
            daref: string;
            caref: string;
            val: number;
            desc: string;
            date: number;
            aref?: undefined;
            oref?: undefined;
            book_id?: undefined;
            end?: undefined;
        };
        out: {
            account?: undefined;
            book?: undefined;
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
            balance?: undefined;
            book_id?: undefined;
            debitTotal?: undefined;
            debits?: undefined;
            closure_successful?: undefined;
            why?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            account?: undefined;
            book?: undefined;
            id: string;
            book_id: string;
            daref: string;
            caref: string;
            val: number;
            desc: string;
            date: number;
            aref?: undefined;
            oref?: undefined;
            end?: undefined;
            bref?: undefined;
        };
        out: {
            account?: undefined;
            book?: undefined;
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
            balance?: undefined;
            book_id?: undefined;
            debitTotal?: undefined;
            debits?: undefined;
            closure_successful?: undefined;
            why?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            account?: undefined;
            book?: undefined;
            aref: string;
            bref: string;
            oref?: undefined;
            book_id?: undefined;
            end?: undefined;
            id?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
        };
        out: {
            account?: undefined;
            book?: undefined;
            ok: boolean;
            book_id: string;
            debitTotal: number;
            balance: number;
            debits?: undefined;
            closure_successful?: undefined;
            why?: undefined;
            credit?: undefined;
            debit?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            account?: undefined;
            book?: undefined;
            aref: string;
            book_id: string;
            oref?: undefined;
            end?: undefined;
            id?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
        };
        out: {
            account?: undefined;
            book?: undefined;
            ok: boolean;
            book_id: string;
            debitTotal: number;
            balance: number;
            debits?: undefined;
            closure_successful?: undefined;
            why?: undefined;
            credit?: undefined;
            debit?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            account?: undefined;
            book?: undefined;
            aref?: undefined;
            oref: string;
            bref: string;
            book_id?: undefined;
            end?: undefined;
            id?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
        };
        out: {
            account?: undefined;
            book?: undefined;
            balance?: undefined;
            ok: boolean;
            debitTotal: number;
            debits: {
                id: string;
                val: number;
                book_id: string;
            }[];
            book_id?: undefined;
            closure_successful?: undefined;
            why?: undefined;
            credit?: undefined;
            debit?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            account?: undefined;
            book?: undefined;
            aref?: undefined;
            oref: string;
            book_id: string;
            end?: undefined;
            id?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
        };
        out: {
            account?: undefined;
            book?: undefined;
            balance?: undefined;
            book_id?: undefined;
            ok: boolean;
            debitTotal: number;
            debits: {
                id: string;
                val: number;
                book_id: string;
            }[];
            closure_successful?: undefined;
            why?: undefined;
            credit?: undefined;
            debit?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            account?: undefined;
            book?: undefined;
            aref?: undefined;
            oref?: undefined;
            book_id?: undefined;
            bref: string;
            end: number;
            id?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
        };
        out: {
            account?: undefined;
            book?: undefined;
            balance?: undefined;
            debitTotal?: undefined;
            debits?: undefined;
            ok: boolean;
            book_id: string;
            closure_successful: boolean;
            why?: undefined;
            credit?: undefined;
            debit?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            account?: undefined;
            book?: undefined;
            aref?: undefined;
            oref?: undefined;
            book_id?: undefined;
            end?: undefined;
            id: string;
            bref: string;
            daref: string;
            caref: string;
            val: number;
            desc: string;
            date: number;
        };
        out: {
            account?: undefined;
            book?: undefined;
            balance?: undefined;
            book_id?: undefined;
            debitTotal?: undefined;
            debits?: undefined;
            closure_successful?: undefined;
            ok: boolean;
            why: string;
            credit?: undefined;
            debit?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            account?: undefined;
            book?: undefined;
            aref?: undefined;
            oref?: undefined;
            book_id?: undefined;
            end?: undefined;
            id: string;
            bref: string;
            daref: string;
            caref: string;
            val: number;
            desc: string;
            date: number;
        };
        out: {
            account?: undefined;
            book?: undefined;
            balance?: undefined;
            book_id?: undefined;
            debitTotal?: undefined;
            debits?: undefined;
            closure_successful?: undefined;
            why?: undefined;
            ok: boolean;
            credit: {
                id?: undefined;
                bref?: undefined;
                book_id: string;
            };
            debit: {
                id?: undefined;
                bref?: undefined;
                book_id: string;
            };
        };
    })[];
};
export default _default;
