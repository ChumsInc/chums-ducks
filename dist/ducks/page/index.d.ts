import { AnyAction } from "redux";
import { RootStateOrAny } from "react-redux";
export declare const currentPageChanged = "page/currentPageChanged";
export declare const rowsPerPageChanged = "page/rowsPerPageChanged";
export interface PageAction extends AnyAction {
    payload: number;
    meta: string;
}
export declare const setPage: (page: number, root?: string) => PageAction;
export declare const setRowsPerPage: (rowsPerPage: number, root?: string) => PageAction;
export interface PageState {
    current: number;
    rowsPerPage: number;
}
export declare const selectCurrentPage: (state: RootStateOrAny) => number;
export declare const selectRowsPerPage: (state: RootStateOrAny) => number;
declare const _default: import("redux").Reducer<import("redux").CombinedState<{
    current: number;
    rowsPerPage: number;
}>, PageAction>;
export default _default;
