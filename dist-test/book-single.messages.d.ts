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
            bref: string;
            id?: undefined;
            oref?: undefined;
            book?: undefined;
            end?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            target_bref?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            book?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            book_id?: undefined;
            bref?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
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
            id: string;
            bref?: undefined;
            oref?: undefined;
            book?: undefined;
            end?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            target_bref?: undefined;
            aref?: undefined;
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
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            book_id?: undefined;
            bref?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
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
            oref: string;
            bref?: undefined;
            id?: undefined;
            book?: undefined;
            end?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            target_bref?: undefined;
            aref?: undefined;
        };
        out: {
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
            why?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            book_id?: undefined;
            bref?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
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
            bref: string;
            book: {
                end: number;
                id$?: undefined;
                oref?: undefined;
                name?: undefined;
                start?: undefined;
                time?: undefined;
            };
            id?: undefined;
            oref?: undefined;
            end?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            target_bref?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            book?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            book_id?: undefined;
            bref?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
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
            id: string;
            bref?: undefined;
            oref?: undefined;
            book?: undefined;
            end?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            target_bref?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            book?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            book_id?: undefined;
            bref?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
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
            bref: string;
            end: number;
            id?: undefined;
            oref?: undefined;
            book?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            target_bref?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            book?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            book_id?: undefined;
            bref?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
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
            end?: undefined;
            target_bref?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            credit: {
                val: number;
                id: string;
            };
            debit: {
                val: number;
                id: string;
            };
            why?: undefined;
            book?: undefined;
            q?: undefined;
            list?: undefined;
            book_id?: undefined;
            bref?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
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
            book: {
                id$: string;
                oref: string;
                name: string;
                start: number;
                end: number;
                time?: undefined;
            };
            bref?: undefined;
            id?: undefined;
            oref?: undefined;
            end?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            target_bref?: undefined;
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
                    timezone?: undefined;
                };
            };
            why?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            book_id?: undefined;
            bref?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
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
            bref: string;
            target_bref: string;
            end: number;
            id?: undefined;
            oref?: undefined;
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
            why?: undefined;
            book?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
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
            aref: string;
            bref: string;
            end: number;
            id?: undefined;
            oref?: undefined;
            book?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            target_bref?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            book?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            book_id?: undefined;
            bref?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
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
            bref: string;
            target_bref: string;
            end: number;
            id?: undefined;
            oref?: undefined;
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
            why: string;
            book?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            book_id?: undefined;
            bref?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
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
            bref: string;
            end: number;
            id?: undefined;
            oref?: undefined;
            book?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            target_bref?: undefined;
            aref?: undefined;
        };
        out: {
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
            why?: undefined;
            book?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            exports?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            bref: string;
            id?: undefined;
            oref?: undefined;
            book?: undefined;
            end?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            target_bref?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            book_id: string;
            bref: string;
            note: string;
            total_accounts: number;
            successful_exports: number;
            failed_exports: number;
            exports: never[];
            why?: undefined;
            book?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            bref?: undefined;
            id?: undefined;
            oref?: undefined;
            book?: undefined;
            end?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            target_bref?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            book?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            book_id?: undefined;
            bref?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
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
            book: {
                oref: string;
                name: string;
                end?: undefined;
                id$?: undefined;
                start?: undefined;
                time?: undefined;
            };
            bref?: undefined;
            id?: undefined;
            oref?: undefined;
            end?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            target_bref?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            book?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            book_id?: undefined;
            bref?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
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
            book: {
                name: string;
                start: number;
                end?: undefined;
                id$?: undefined;
                oref?: undefined;
                time?: undefined;
            };
            bref?: undefined;
            id?: undefined;
            oref?: undefined;
            end?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            target_bref?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            book?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            book_id?: undefined;
            bref?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
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
            book: {
                oref: string;
                start: number;
                end?: undefined;
                id$?: undefined;
                name?: undefined;
                time?: undefined;
            };
            bref?: undefined;
            id?: undefined;
            oref?: undefined;
            end?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            target_bref?: undefined;
            aref?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            book?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            book_id?: undefined;
            bref?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
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
            bref?: undefined;
            id?: undefined;
            oref?: undefined;
            end?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            target_bref?: undefined;
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
                    timezone: string;
                };
            };
            why?: undefined;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            book_id?: undefined;
            bref?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            note?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            exports?: undefined;
        };
    })[];
};
export default _default;
