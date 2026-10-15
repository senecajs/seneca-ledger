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
            };
        };
        out: {
            ok: boolean;
            book: {
                id: string;
                bref: string;
            };
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
            bref: string;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            book?: undefined;
        };
        out: {
            target_bref?: undefined;
            ok: boolean;
            why: string;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
            bref?: undefined;
            note?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            exports?: undefined;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
            id: string;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            bref?: undefined;
            book?: undefined;
        };
        out: {
            target_bref?: undefined;
            why?: undefined;
            ok: boolean;
            book: {
                end?: undefined;
                id: string;
                bref: string;
                oref?: undefined;
                org_id?: undefined;
                name?: undefined;
                start?: undefined;
                time?: undefined;
            };
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
            bref?: undefined;
            note?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            exports?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
            oref: string;
            id?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            bref?: undefined;
            book?: undefined;
        };
        out: {
            target_bref?: undefined;
            why?: undefined;
            ok: boolean;
            q: {
                org_id: string;
            };
            list: {
                org_id: string;
                oref: string;
                bref: string;
                name: string;
                start: number;
                end: number;
                time: {
                    kind: string;
                };
                id: string;
            }[];
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
            bref?: undefined;
            note?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            exports?: undefined;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
            bref: string;
            book: {
                end: number;
                oref?: undefined;
                id$?: undefined;
                name?: undefined;
                start?: undefined;
                time?: undefined;
            };
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
        };
        out: {
            target_bref?: undefined;
            q?: undefined;
            list?: undefined;
            ok: boolean;
            why: string;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
            bref?: undefined;
            note?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            exports?: undefined;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
            id: string;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            bref?: undefined;
            book?: undefined;
        };
        out: {
            target_bref?: undefined;
            q?: undefined;
            list?: undefined;
            ok: boolean;
            why: string;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
            bref?: undefined;
            note?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            exports?: undefined;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref?: undefined;
            target_bref?: undefined;
            bref: string;
            end: number;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            book?: undefined;
        };
        out: {
            target_bref?: undefined;
            q?: undefined;
            list?: undefined;
            ok: boolean;
            why: string;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
            bref?: undefined;
            note?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            exports?: undefined;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
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
            book?: undefined;
        };
        out: {
            target_bref?: undefined;
            why?: undefined;
            q?: undefined;
            list?: undefined;
            ok: boolean;
            credit: {
                val: number;
                id: string;
            };
            debit: {
                val: number;
                id: string;
            };
            target_book_id?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
            bref?: undefined;
            note?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            exports?: undefined;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            book: {
                id$: string;
                oref: string;
                name: string;
                start: number;
                end: number;
                time?: undefined;
            };
            bref?: undefined;
        };
        out: {
            target_bref?: undefined;
            why?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
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
                    timezone?: undefined;
                };
            };
            target_book_id?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
            bref?: undefined;
            note?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            exports?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            bref: string;
            target_bref: string;
            end: number;
            book?: undefined;
        };
        out: {
            why?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            ok: boolean;
            book_id: string;
            bref: string;
            target_book_id: string;
            target_bref: string;
            summary: {
                total_accounts: number;
                successful_closures: number;
                failed_closures: number;
                total_balance_transferred: number;
                all_accounts_zeroed: boolean;
            };
            closure_successful: boolean;
            note?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            exports?: undefined;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            target_bref?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            aref: string;
            bref: string;
            end: number;
            book?: undefined;
        };
        out: {
            target_bref?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            ok: boolean;
            why: string;
            summary?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
            bref?: undefined;
            note?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            exports?: undefined;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            bref: string;
            target_bref: string;
            end: number;
            book?: undefined;
        };
        out: {
            target_bref?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            ok: boolean;
            why: string;
            summary?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
            bref?: undefined;
            note?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            exports?: undefined;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref?: undefined;
            target_bref?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            bref: string;
            end: number;
            book?: undefined;
        };
        out: {
            target_bref?: undefined;
            why?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            ok: boolean;
            book_id: string;
            bref: string;
            note: string;
            summary: {
                total_accounts: number;
                successful_closures: number;
                failed_closures: number;
                total_balance_transferred: number;
                all_accounts_zeroed: boolean;
            };
            closure_successful: boolean;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            exports?: undefined;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            bref: string;
            book?: undefined;
        };
        out: {
            target_bref?: undefined;
            why?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            ok: boolean;
            book_id: string;
            bref: string;
            note: string;
            total_accounts: number;
            successful_exports: number;
            failed_exports: number;
            exports: never[];
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            bref?: undefined;
            book?: undefined;
        };
        out: {
            target_bref?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
            bref?: undefined;
            note?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            exports?: undefined;
            ok: boolean;
            why: string;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            bref?: undefined;
            book: {
                end?: undefined;
                oref: string;
                name: string;
                id$?: undefined;
                start?: undefined;
                time?: undefined;
            };
        };
        out: {
            target_bref?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
            bref?: undefined;
            note?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            exports?: undefined;
            ok: boolean;
            why: string;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            bref?: undefined;
            book: {
                end?: undefined;
                oref?: undefined;
                name: string;
                start: number;
                id$?: undefined;
                time?: undefined;
            };
        };
        out: {
            target_bref?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
            bref?: undefined;
            note?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            exports?: undefined;
            ok: boolean;
            why: string;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            bref?: undefined;
            book: {
                end?: undefined;
                oref: string;
                start: number;
                id$?: undefined;
                name?: undefined;
                time?: undefined;
            };
        };
        out: {
            target_bref?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
            bref?: undefined;
            note?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            exports?: undefined;
            ok: boolean;
            why: string;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            bref?: undefined;
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
        };
        out: {
            target_bref?: undefined;
            why?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
            bref?: undefined;
            note?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            exports?: undefined;
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
        };
    })[];
};
export default _default;
