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
            custom?: undefined;
            entry?: undefined;
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
            aref?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            q?: undefined;
            list?: undefined;
            note?: undefined;
            exports?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            closure_successful?: undefined;
            bref?: undefined;
            book_id?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            summary?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            id: string;
            custom?: undefined;
            entry?: undefined;
            book?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            target_bref?: undefined;
            end?: undefined;
            aref?: undefined;
            bref?: undefined;
        };
        out: {
            ok: boolean;
            book: {
                id: string;
                bref: string;
                org_id?: undefined;
                time?: undefined;
                name?: undefined;
                oref?: undefined;
                start?: undefined;
                end?: undefined;
            };
            q?: undefined;
            list?: undefined;
            note?: undefined;
            exports?: undefined;
            credit?: undefined;
            debit?: undefined;
            why?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            closure_successful?: undefined;
            bref?: undefined;
            book_id?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            summary?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            oref: string;
            custom?: undefined;
            entry?: undefined;
            book?: undefined;
            id?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            target_bref?: undefined;
            end?: undefined;
            aref?: undefined;
            bref?: undefined;
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
            note?: undefined;
            exports?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            why?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            closure_successful?: undefined;
            bref?: undefined;
            book_id?: undefined;
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
            book: {
                end: number;
                time?: undefined;
                id$?: undefined;
                name?: undefined;
                oref?: undefined;
                start?: undefined;
            };
            custom?: undefined;
            entry?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            target_bref?: undefined;
            end?: undefined;
            aref?: undefined;
        };
        out: {
            q?: undefined;
            list?: undefined;
            ok: boolean;
            why: string;
            note?: undefined;
            exports?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            closure_successful?: undefined;
            bref?: undefined;
            book_id?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            summary?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            id: string;
            custom?: undefined;
            entry?: undefined;
            book?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            target_bref?: undefined;
            end?: undefined;
            aref?: undefined;
            bref?: undefined;
        };
        out: {
            q?: undefined;
            list?: undefined;
            ok: boolean;
            why: string;
            note?: undefined;
            exports?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            closure_successful?: undefined;
            bref?: undefined;
            book_id?: undefined;
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
            end: number;
            custom?: undefined;
            entry?: undefined;
            book?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            target_bref?: undefined;
            aref?: undefined;
        };
        out: {
            q?: undefined;
            list?: undefined;
            ok: boolean;
            why: string;
            note?: undefined;
            exports?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            closure_successful?: undefined;
            bref?: undefined;
            book_id?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            summary?: undefined;
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
            target_bref?: undefined;
            end?: undefined;
            aref?: undefined;
        };
        out: {
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
            note?: undefined;
            exports?: undefined;
            book?: undefined;
            why?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            closure_successful?: undefined;
            bref?: undefined;
            book_id?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            summary?: undefined;
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
            custom?: undefined;
            entry?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            target_bref?: undefined;
            end?: undefined;
            aref?: undefined;
            bref?: undefined;
        };
        out: {
            q?: undefined;
            list?: undefined;
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
            note?: undefined;
            exports?: undefined;
            credit?: undefined;
            debit?: undefined;
            why?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            closure_successful?: undefined;
            bref?: undefined;
            book_id?: undefined;
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
            target_bref: string;
            end: number;
            custom?: undefined;
            entry?: undefined;
            book?: undefined;
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
            q?: undefined;
            list?: undefined;
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
            exports?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            why?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            aref: string;
            bref: string;
            end: number;
            custom?: undefined;
            entry?: undefined;
            book?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            target_bref?: undefined;
        };
        out: {
            q?: undefined;
            list?: undefined;
            ok: boolean;
            why: string;
            note?: undefined;
            exports?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            closure_successful?: undefined;
            bref?: undefined;
            book_id?: undefined;
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
            target_bref: string;
            end: number;
            custom?: undefined;
            entry?: undefined;
            book?: undefined;
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
            q?: undefined;
            list?: undefined;
            ok: boolean;
            why: string;
            note?: undefined;
            exports?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            closure_successful?: undefined;
            bref?: undefined;
            book_id?: undefined;
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
            end: number;
            custom?: undefined;
            entry?: undefined;
            book?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            target_bref?: undefined;
            aref?: undefined;
        };
        out: {
            q?: undefined;
            list?: undefined;
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
            exports?: undefined;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            why?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            bref: string;
            custom?: undefined;
            entry?: undefined;
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
            aref?: undefined;
        };
        out: {
            q?: undefined;
            list?: undefined;
            ok: boolean;
            book_id: string;
            bref: string;
            note: string;
            total_accounts: number;
            successful_exports: number;
            failed_exports: number;
            exports: never[];
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            why?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            closure_successful?: undefined;
            summary?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            custom?: undefined;
            entry?: undefined;
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
            aref?: undefined;
            bref?: undefined;
        };
        out: {
            q?: undefined;
            list?: undefined;
            note?: undefined;
            exports?: undefined;
            ok: boolean;
            why: string;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            closure_successful?: undefined;
            bref?: undefined;
            book_id?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            summary?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            book: {
                oref: string;
                name: string;
                time?: undefined;
                id$?: undefined;
                start?: undefined;
                end?: undefined;
            };
            custom?: undefined;
            entry?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            target_bref?: undefined;
            end?: undefined;
            aref?: undefined;
            bref?: undefined;
        };
        out: {
            q?: undefined;
            list?: undefined;
            note?: undefined;
            exports?: undefined;
            ok: boolean;
            why: string;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            closure_successful?: undefined;
            bref?: undefined;
            book_id?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            summary?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            book: {
                name: string;
                start: number;
                time?: undefined;
                id$?: undefined;
                oref?: undefined;
                end?: undefined;
            };
            custom?: undefined;
            entry?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            target_bref?: undefined;
            end?: undefined;
            aref?: undefined;
            bref?: undefined;
        };
        out: {
            q?: undefined;
            list?: undefined;
            note?: undefined;
            exports?: undefined;
            ok: boolean;
            why: string;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            closure_successful?: undefined;
            bref?: undefined;
            book_id?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            summary?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            book: {
                oref: string;
                start: number;
                time?: undefined;
                id$?: undefined;
                name?: undefined;
                end?: undefined;
            };
            custom?: undefined;
            entry?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            target_bref?: undefined;
            end?: undefined;
            aref?: undefined;
            bref?: undefined;
        };
        out: {
            q?: undefined;
            list?: undefined;
            note?: undefined;
            exports?: undefined;
            ok: boolean;
            why: string;
            book?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            closure_successful?: undefined;
            bref?: undefined;
            book_id?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            summary?: undefined;
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
            custom?: undefined;
            entry?: undefined;
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            target_bref?: undefined;
            end?: undefined;
            aref?: undefined;
            bref?: undefined;
        };
        out: {
            q?: undefined;
            list?: undefined;
            note?: undefined;
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
            credit?: undefined;
            debit?: undefined;
            why?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            closure_successful?: undefined;
            bref?: undefined;
            book_id?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            summary?: undefined;
        };
    })[];
};
export default _default;
