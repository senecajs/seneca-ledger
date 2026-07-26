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
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
            book?: undefined;
        };
        out: {
            ok: boolean;
            why: string;
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
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
            id: string;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
            bref?: undefined;
            book?: undefined;
        };
        out: {
            ok: boolean;
            book: {
                id: string;
                bref: string;
                oref?: undefined;
                end?: undefined;
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
            target_bref?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
            bref?: undefined;
            note?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            exports?: undefined;
            why?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            oref: string;
            id?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
            bref?: undefined;
            book?: undefined;
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
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
            bref?: undefined;
            note?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            exports?: undefined;
            why?: undefined;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
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
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
        };
        out: {
            q?: undefined;
            list?: undefined;
            ok: boolean;
            why: string;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
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
            id: string;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
            bref?: undefined;
            book?: undefined;
        };
        out: {
            q?: undefined;
            list?: undefined;
            ok: boolean;
            why: string;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
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
            aref?: undefined;
            target_bref?: undefined;
            book?: undefined;
        };
        out: {
            q?: undefined;
            list?: undefined;
            ok: boolean;
            why: string;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
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
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
            book?: undefined;
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
            target_book_id?: undefined;
            target_bref?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
            bref?: undefined;
            note?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            exports?: undefined;
            why?: undefined;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
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
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
            bref?: undefined;
        };
        out: {
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
            target_bref?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
            bref?: undefined;
            note?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            exports?: undefined;
            why?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
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
            aref?: undefined;
            book?: undefined;
        };
        out: {
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
            why?: undefined;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
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
            target_bref?: undefined;
            book?: undefined;
        };
        out: {
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            ok: boolean;
            why: string;
            target_bref?: undefined;
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
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            aref?: undefined;
            bref: string;
            target_bref: string;
            end: number;
            book?: undefined;
        };
        out: {
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
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
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            aref?: undefined;
            target_bref?: undefined;
            bref: string;
            end: number;
            book?: undefined;
        };
        out: {
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
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
            why?: undefined;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
            bref: string;
            book?: undefined;
        };
        out: {
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
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
            why?: undefined;
            book?: undefined;
        };
    } | {
        name: string;
        pattern: string;
        params: {
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
            bref?: undefined;
            book?: undefined;
        };
        out: {
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
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
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
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
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
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
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
            bref?: undefined;
            book: {
                oref?: undefined;
                end?: undefined;
                name: string;
                start: number;
                id$?: undefined;
                time?: undefined;
            };
        };
        out: {
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
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
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
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
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
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
            id?: undefined;
            oref?: undefined;
            daref?: undefined;
            caref?: undefined;
            val?: undefined;
            desc?: undefined;
            date?: undefined;
            custom?: undefined;
            entry?: undefined;
            aref?: undefined;
            target_bref?: undefined;
            end?: undefined;
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
            q?: undefined;
            list?: undefined;
            credit?: undefined;
            debit?: undefined;
            target_book_id?: undefined;
            target_bref?: undefined;
            summary?: undefined;
            closure_successful?: undefined;
            book_id?: undefined;
            bref?: undefined;
            note?: undefined;
            total_accounts?: undefined;
            successful_exports?: undefined;
            failed_exports?: undefined;
            exports?: undefined;
            why?: undefined;
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
