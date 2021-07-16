import { RootState } from "../index";
import { ActionInterface } from "../types";
export interface PageSetAction {
    key: string;
    current?: number;
    rowsPerPage?: number;
}
export interface PageAction extends ActionInterface {
    payload: PageSetAction;
}
export interface KeyedPageState {
    current: number;
    rowsPerPage: number;
}
export interface PageState {
    [key: string]: KeyedPageState;
}
export declare const addPageSet = "page/addPageSet";
export declare const currentPageChanged = "page/currentPageChanged";
export declare const rowsPerPageChanged = "page/rowsPerPageChanged";
export declare const defaultRowsPerPageValues: number[];
export declare const filterPage: (page: number, rowsPerPage: number) => (row: any, index: number) => boolean;
export declare const calcPages: (rows: number, rowsPerPage: number) => number;
export declare const setPageAction: ({ current, key }: PageSetAction) => PageAction;
export declare const setRowsPerPageAction: ({ rowsPerPage, key }: PageSetAction) => PageAction;
export declare const addPageSetAction: ({ key, current, rowsPerPage }: PageSetAction) => PageAction;
export declare const currentPageSelector: (key: string) => (state: RootState) => number;
export declare const rowsPerPageSelector: (key: string) => (state: RootState) => number;
export declare const pagedDataSelector: (key: string, data: any[]) => (state: RootState) => any[];
declare const pageReducer: (state: PageState | undefined, action: PageAction) => PageState;
export default pageReducer;
