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
                xfoo?: undefined;
            };
            id?: undefined;
            book?: undefined;
            oref?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            aref?: undefined;
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
                xfoo?: undefined;
            };
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            creditTotal?: undefined;
            debitTotal?: undefined;
            credits?: undefined;
            debits?: undefined;
            cq?: undefined;
            dq?: undefined;
            balance?: undefined;
            account_id?: undefined;
            aref?: undefined;
            book_id?: undefined;
            bref?: undefined;
            start?: undefined;
            end?: undefined;
            creditCount?: undefined;
            debitCount?: undefined;
            normal?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            id: string;
            account: {
                xfoo: number;
                id$?: undefined;
                oref?: undefined;
                path?: undefined;
                name?: undefined;
                normal?: undefined;
            };
            book?: undefined;
            oref?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            aref?: undefined;
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
                xfoo: number;
            };
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            creditTotal?: undefined;
            debitTotal?: undefined;
            credits?: undefined;
            debits?: undefined;
            cq?: undefined;
            dq?: undefined;
            balance?: undefined;
            account_id?: undefined;
            aref?: undefined;
            book_id?: undefined;
            bref?: undefined;
            start?: undefined;
            end?: undefined;
            creditCount?: undefined;
            debitCount?: undefined;
            normal?: undefined;
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
                xbar?: undefined;
            };
            account?: undefined;
            id?: undefined;
            oref?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            aref?: undefined;
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
                time: {
                    kind: string;
                };
                end?: undefined;
                xbar?: undefined;
            };
            account?: undefined;
            credit?: undefined;
            debit?: undefined;
            creditTotal?: undefined;
            debitTotal?: undefined;
            credits?: undefined;
            debits?: undefined;
            cq?: undefined;
            dq?: undefined;
            balance?: undefined;
            account_id?: undefined;
            aref?: undefined;
            book_id?: undefined;
            bref?: undefined;
            start?: undefined;
            end?: undefined;
            creditCount?: undefined;
            debitCount?: undefined;
            normal?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            id: string;
            book: {
                end: number;
                xbar: number;
                id$?: undefined;
                oref?: undefined;
                name?: undefined;
                start?: undefined;
            };
            account?: undefined;
            oref?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            aref?: undefined;
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
                };
                xbar: number;
            };
            account?: undefined;
            credit?: undefined;
            debit?: undefined;
            creditTotal?: undefined;
            debitTotal?: undefined;
            credits?: undefined;
            debits?: undefined;
            cq?: undefined;
            dq?: undefined;
            balance?: undefined;
            account_id?: undefined;
            aref?: undefined;
            book_id?: undefined;
            bref?: undefined;
            start?: undefined;
            end?: undefined;
            creditCount?: undefined;
            debitCount?: undefined;
            normal?: undefined;
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
            custom: {
                geo: string;
            };
            entry: {
                xrep: string;
            };
            account?: undefined;
            book?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            credit: {
                xrep: string;
                val: number;
                desc: string;
                kind: string;
                oref: string;
                org_id: string;
                bref: string;
                book_id: string;
                custom: {
                    geo: string;
                };
                baseval: number;
                basecur: string;
                baserate: number;
                date: number;
                credit_id: string;
                caref: string;
                id: string;
            };
            debit: {
                xrep: string;
                val: number;
                desc: string;
                kind: string;
                oref: string;
                org_id: string;
                bref: string;
                book_id: string;
                custom: {
                    geo: string;
                };
                baseval: number;
                basecur: string;
                baserate: number;
                date: number;
                debit_id: string;
                daref: string;
                id: string;
            };
            account?: undefined;
            book?: undefined;
            creditTotal?: undefined;
            debitTotal?: undefined;
            credits?: undefined;
            debits?: undefined;
            cq?: undefined;
            dq?: undefined;
            balance?: undefined;
            account_id?: undefined;
            aref?: undefined;
            book_id?: undefined;
            bref?: undefined;
            start?: undefined;
            end?: undefined;
            creditCount?: undefined;
            debitCount?: undefined;
            normal?: undefined;
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
            account?: undefined;
            book?: undefined;
            custom?: undefined;
            entry?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            credit: {
                val: number;
                desc: string;
                kind: string;
                oref: string;
                org_id: string;
                bref: string;
                book_id: string;
                custom: {
                    geo?: undefined;
                };
                baseval: number;
                basecur: string;
                baserate: number;
                date: number;
                credit_id: string;
                caref: string;
                id: string;
                xrep?: undefined;
            };
            debit: {
                val: number;
                desc: string;
                kind: string;
                oref: string;
                org_id: string;
                bref: string;
                book_id: string;
                custom: {
                    geo?: undefined;
                };
                baseval: number;
                basecur: string;
                baserate: number;
                date: number;
                debit_id: string;
                daref: string;
                id: string;
                xrep?: undefined;
            };
            account?: undefined;
            book?: undefined;
            creditTotal?: undefined;
            debitTotal?: undefined;
            credits?: undefined;
            debits?: undefined;
            cq?: undefined;
            dq?: undefined;
            balance?: undefined;
            account_id?: undefined;
            aref?: undefined;
            book_id?: undefined;
            bref?: undefined;
            start?: undefined;
            end?: undefined;
            creditCount?: undefined;
            debitCount?: undefined;
            normal?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            oref: string;
            bref: string;
            account?: undefined;
            id?: undefined;
            book?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            creditTotal: number;
            debitTotal: number;
            credits: {
                val: number;
                desc: string;
                caref: string;
                id: string;
            }[];
            debits: {
                val: number;
                desc: string;
                daref: string;
                id: string;
            }[];
            cq: {
                oref: string;
                book_id: string;
                credit_id?: undefined;
            };
            dq: {
                oref: string;
                book_id: string;
                debit_id?: undefined;
            };
            account?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            balance?: undefined;
            account_id?: undefined;
            aref?: undefined;
            book_id?: undefined;
            bref?: undefined;
            start?: undefined;
            end?: undefined;
            creditCount?: undefined;
            debitCount?: undefined;
            normal?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            id: string;
            oref: string;
            bref: string;
            aref: string;
            account?: undefined;
            book?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
        };
        out: {
            ok: boolean;
            creditTotal: number;
            debitTotal: number;
            balance: number;
            credits: {
                val: number;
                desc: string;
                kind: string;
                oref: string;
                org_id: string;
                bref: string;
                book_id: string;
                custom: {};
                baseval: number;
                basecur: string;
                baserate: number;
                credit_id: string;
                caref: string;
                id: string;
            }[];
            debits: {
                xrep: string;
                val: number;
                desc: string;
                kind: string;
                oref: string;
                org_id: string;
                bref: string;
                book_id: string;
                custom: {
                    geo: string;
                };
                baseval: number;
                basecur: string;
                baserate: number;
                debit_id: string;
                daref: string;
                id: string;
            }[];
            cq: {
                oref: string;
                book_id: string;
                credit_id: string;
            };
            dq: {
                oref: string;
                book_id: string;
                debit_id: string;
            };
            account?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            account_id?: undefined;
            aref?: undefined;
            book_id?: undefined;
            bref?: undefined;
            start?: undefined;
            end?: undefined;
            creditCount?: undefined;
            debitCount?: undefined;
            normal?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            id: string;
            oref: string;
            bref: string;
            aref: string;
            account?: undefined;
            book?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
        };
        out: {
            ok: boolean;
            account_id: string;
            aref: string;
            book_id: string;
            bref: string;
            start: number;
            end: number;
            creditTotal: number;
            debitTotal: number;
            creditCount: number;
            debitCount: number;
            normal: string;
            balance: number;
            account?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            credits?: undefined;
            debits?: undefined;
            cq?: undefined;
            dq?: undefined;
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
            book?: undefined;
            id?: undefined;
            oref?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
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
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            account_id?: undefined;
            aref?: undefined;
            book_id?: undefined;
            bref?: undefined;
            start?: undefined;
            end?: undefined;
            creditTotal?: undefined;
            debitTotal?: undefined;
            creditCount?: undefined;
            debitCount?: undefined;
            normal?: undefined;
            balance?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            original_balance?: undefined;
            closing_balance?: undefined;
            opening_balance?: undefined;
            opening_balance_aref?: undefined;
            closing_date?: undefined;
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
            oref?: undefined;
            bref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
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
                };
            };
            account?: undefined;
            credit?: undefined;
            debit?: undefined;
            account_id?: undefined;
            aref?: undefined;
            book_id?: undefined;
            bref?: undefined;
            start?: undefined;
            end?: undefined;
            creditTotal?: undefined;
            debitTotal?: undefined;
            creditCount?: undefined;
            debitCount?: undefined;
            normal?: undefined;
            balance?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            original_balance?: undefined;
            closing_balance?: undefined;
            opening_balance?: undefined;
            opening_balance_aref?: undefined;
            closing_date?: undefined;
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
            account?: undefined;
            book?: undefined;
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
        };
        out: {
            ok: boolean;
            credit: {
                val: number;
                desc: string;
                kind: string;
                oref: string;
                org_id: string;
                bref: string;
                book_id: string;
                custom: {};
                baseval: number;
                basecur: string;
                baserate: number;
                credit_id: string;
                caref: string;
                id: string;
            };
            debit: {
                val: number;
                desc: string;
                kind: string;
                oref: string;
                org_id: string;
                bref: string;
                book_id: string;
                custom: {};
                baseval: number;
                basecur: string;
                baserate: number;
                debit_id: string;
                daref: string;
                id: string;
            };
            account?: undefined;
            book?: undefined;
            account_id?: undefined;
            aref?: undefined;
            book_id?: undefined;
            bref?: undefined;
            start?: undefined;
            end?: undefined;
            creditTotal?: undefined;
            debitTotal?: undefined;
            creditCount?: undefined;
            debitCount?: undefined;
            normal?: undefined;
            balance?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            original_balance?: undefined;
            closing_balance?: undefined;
            opening_balance?: undefined;
            opening_balance_aref?: undefined;
            closing_date?: undefined;
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
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            target_bref?: undefined;
            end?: undefined;
        };
        out: {
            ok: boolean;
            account_id: string;
            aref: string;
            book_id: string;
            bref: string;
            start: number;
            end: number;
            creditTotal: number;
            debitTotal: number;
            creditCount: number;
            debitCount: number;
            normal: string;
            balance: number;
            account?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            original_balance?: undefined;
            closing_balance?: undefined;
            opening_balance?: undefined;
            opening_balance_aref?: undefined;
            closing_date?: undefined;
            why?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref: string;
            bref: string;
            target_bref: string;
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
        };
        out: {
            ok: boolean;
            account_id: string;
            aref: string;
            book_id: string;
            bref: string;
            target_book_id: string;
            target_bref: string;
            original_balance: number;
            closing_balance: number;
            opening_balance: number;
            opening_balance_aref: string;
            closing_date: number;
            account?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            start?: undefined;
            end?: undefined;
            creditTotal?: undefined;
            debitTotal?: undefined;
            creditCount?: undefined;
            debitCount?: undefined;
            normal?: undefined;
            balance?: undefined;
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
            account?: undefined;
            book?: undefined;
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            account?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            account_id?: undefined;
            aref?: undefined;
            book_id?: undefined;
            bref?: undefined;
            start?: undefined;
            end?: undefined;
            creditTotal?: undefined;
            debitTotal?: undefined;
            creditCount?: undefined;
            debitCount?: undefined;
            normal?: undefined;
            balance?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            original_balance?: undefined;
            closing_balance?: undefined;
            opening_balance?: undefined;
            opening_balance_aref?: undefined;
            closing_date?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            bref: string;
            target_bref: string;
            end: number;
            aref?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            book?: undefined;
        };
        out: {
            ok: boolean;
            book_id: string;
            bref: string;
            target_book_id: string;
            target_bref: string;
            closing_date: number;
            summary: {
                total_accounts: number;
                successful_closures: number;
                failed_closures: number;
                total_balance_transferred: number;
                all_accounts_zeroed: boolean;
            };
            closure_successful: boolean;
            account_id?: undefined;
            aref?: undefined;
            start?: undefined;
            end?: undefined;
            creditTotal?: undefined;
            debitTotal?: undefined;
            creditCount?: undefined;
            debitCount?: undefined;
            normal?: undefined;
            balance?: undefined;
            credit?: undefined;
            debit?: undefined;
            book?: undefined;
            why?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref: string;
            bref: string;
            target_bref?: undefined;
            end?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            book?: undefined;
        };
        out: {
            ok: boolean;
            account_id: string;
            aref: string;
            book_id: string;
            bref: string;
            start: number;
            end: number;
            creditTotal: number;
            debitTotal: number;
            creditCount: number;
            debitCount: number;
            normal: string;
            balance: number;
            target_book_id?: undefined;
            target_bref?: undefined;
            closing_date?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            credit?: undefined;
            debit?: undefined;
            book?: undefined;
            why?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref: string;
            bref: string;
            target_bref?: undefined;
            end?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            book?: undefined;
        };
        out: {
            ok: boolean;
            aref: string;
            book_id: string;
            bref: string;
            start: number;
            end: number;
            creditTotal: number;
            debitTotal: number;
            normal: string;
            balance: number;
            target_book_id?: undefined;
            target_bref?: undefined;
            closing_date?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            account_id?: undefined;
            creditCount?: undefined;
            debitCount?: undefined;
            credit?: undefined;
            debit?: undefined;
            book?: undefined;
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
            target_bref?: undefined;
            end?: undefined;
            aref?: undefined;
            book?: undefined;
        };
        out: {
            ok: boolean;
            credit: {
                val: number;
                desc: string;
                kind: string;
                oref: string;
                org_id: string;
                bref: string;
                book_id: string;
                custom: {};
                baseval: number;
                basecur: string;
                baserate: number;
                credit_id: string;
                caref: string;
                id: string;
            };
            debit: {
                val: number;
                desc: string;
                kind: string;
                oref: string;
                org_id: string;
                bref: string;
                book_id: string;
                custom: {};
                baseval: number;
                basecur: string;
                baserate: number;
                debit_id: string;
                daref: string;
                id: string;
            };
            book_id?: undefined;
            bref?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            closing_date?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            account_id?: undefined;
            aref?: undefined;
            start?: undefined;
            end?: undefined;
            creditTotal?: undefined;
            debitTotal?: undefined;
            creditCount?: undefined;
            debitCount?: undefined;
            normal?: undefined;
            balance?: undefined;
            book?: undefined;
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
            bref?: undefined;
            target_bref?: undefined;
            end?: undefined;
            aref?: undefined;
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
                };
            };
            book_id?: undefined;
            bref?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            closing_date?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            account_id?: undefined;
            aref?: undefined;
            start?: undefined;
            end?: undefined;
            creditTotal?: undefined;
            debitTotal?: undefined;
            creditCount?: undefined;
            debitCount?: undefined;
            normal?: undefined;
            balance?: undefined;
            credit?: undefined;
            debit?: undefined;
            why?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            bref: string;
            target_bref: string;
            end: number;
            aref?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            book?: undefined;
        };
        out: {
            ok: boolean;
            book_id: string;
            bref: string;
            closing_date: number;
            summary: {
                total_accounts: number;
                successful_closures: number;
                failed_closures: number;
                total_balance_transferred: number;
                all_accounts_zeroed: boolean;
            };
            closure_successful: boolean;
            target_book_id?: undefined;
            target_bref?: undefined;
            account_id?: undefined;
            aref?: undefined;
            start?: undefined;
            end?: undefined;
            creditTotal?: undefined;
            debitTotal?: undefined;
            creditCount?: undefined;
            debitCount?: undefined;
            normal?: undefined;
            balance?: undefined;
            credit?: undefined;
            debit?: undefined;
            book?: undefined;
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
            target_bref?: undefined;
            end?: undefined;
            aref?: undefined;
            book?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            book_id?: undefined;
            bref?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            closing_date?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            account_id?: undefined;
            aref?: undefined;
            start?: undefined;
            end?: undefined;
            creditTotal?: undefined;
            debitTotal?: undefined;
            creditCount?: undefined;
            debitCount?: undefined;
            normal?: undefined;
            balance?: undefined;
            credit?: undefined;
            debit?: undefined;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref: string;
            bref: string;
        };
        out: {
            ok: boolean;
            account_id: string;
            aref: string;
            book_id: string;
            bref: string;
            content: string;
            entry_count: number;
            final_balance: number;
            closing_balance?: undefined;
            book_name?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            summary?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref: string;
            bref: string;
        };
        out: {
            ok: boolean;
            account_id: string;
            aref: string;
            book_id: string;
            bref: string;
            content: string;
            entry_count: number;
            final_balance: number;
            closing_balance: number;
            book_name?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            summary?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            bref: string;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            book_id: string;
            bref: string;
            book_name: string;
            total_accounts: number;
            successful_exports: number;
            failed_exports: number;
            summary: {
                ok: boolean;
                content: string;
            };
            account_id?: undefined;
            aref?: undefined;
            content?: undefined;
            entry_count?: undefined;
            final_balance?: undefined;
            closing_balance?: undefined;
        };
    } | {
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
};
export default _default;
