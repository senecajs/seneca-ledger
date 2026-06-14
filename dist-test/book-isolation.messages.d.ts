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
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            book_id?: undefined;
            aref?: undefined;
            oref?: undefined;
            end?: undefined;
        };
        out: {
            ok: boolean;
            account: {
                id: string;
                aref: string;
            };
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            book_id?: undefined;
            debitTotal?: undefined;
            balance?: undefined;
            debits?: undefined;
            closure_successful?: undefined;
            why?: undefined;
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
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            book_id?: undefined;
            aref?: undefined;
            oref?: undefined;
            end?: undefined;
        };
        out: {
            ok: boolean;
            book: {
                id: string;
                bref: string;
            };
            account?: undefined;
            credit?: undefined;
            debit?: undefined;
            book_id?: undefined;
            debitTotal?: undefined;
            balance?: undefined;
            debits?: undefined;
            closure_successful?: undefined;
            why?: undefined;
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
            book_id?: undefined;
            aref?: undefined;
            oref?: undefined;
            end?: undefined;
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
            book?: undefined;
            book_id?: undefined;
            debitTotal?: undefined;
            balance?: undefined;
            debits?: undefined;
            closure_successful?: undefined;
            why?: undefined;
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
            bref?: undefined;
            aref?: undefined;
            oref?: undefined;
            end?: undefined;
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
            book?: undefined;
            book_id?: undefined;
            debitTotal?: undefined;
            balance?: undefined;
            debits?: undefined;
            closure_successful?: undefined;
            why?: undefined;
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
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            book_id?: undefined;
            oref?: undefined;
            end?: undefined;
        };
        out: {
            ok: boolean;
            book_id: string;
            debitTotal: number;
            balance: number;
            account?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            debits?: undefined;
            closure_successful?: undefined;
            why?: undefined;
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
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            oref?: undefined;
            end?: undefined;
        };
        out: {
            ok: boolean;
            book_id: string;
            debitTotal: number;
            balance: number;
            account?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            debits?: undefined;
            closure_successful?: undefined;
            why?: undefined;
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
            book_id?: undefined;
            aref?: undefined;
            end?: undefined;
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
            book_id?: undefined;
            balance?: undefined;
            closure_successful?: undefined;
            why?: undefined;
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
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            aref?: undefined;
            end?: undefined;
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
            book_id?: undefined;
            balance?: undefined;
            closure_successful?: undefined;
            why?: undefined;
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
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            book_id?: undefined;
            aref?: undefined;
            oref?: undefined;
        };
        out: {
            ok: boolean;
            book_id: string;
            closure_successful: boolean;
            account?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            debitTotal?: undefined;
            balance?: undefined;
            debits?: undefined;
            why?: undefined;
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
            book_id?: undefined;
            aref?: undefined;
            oref?: undefined;
            end?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            account?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            book_id?: undefined;
            debitTotal?: undefined;
            balance?: undefined;
            debits?: undefined;
            closure_successful?: undefined;
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
            book_id?: undefined;
            aref?: undefined;
            oref?: undefined;
            end?: undefined;
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
            book?: undefined;
            book_id?: undefined;
            debitTotal?: undefined;
            balance?: undefined;
            debits?: undefined;
            closure_successful?: undefined;
            why?: undefined;
        };
    })[];
};
export default _default;
