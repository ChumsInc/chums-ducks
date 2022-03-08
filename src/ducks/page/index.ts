
import {ActionInterface, ActionPayload} from "../types";
import {RootStateOrAny} from "react-redux";

export interface PageSetAction extends ActionPayload {
    key: string,
    current?: number,
    rowsPerPage?: number,
}

export interface PageAction extends ActionInterface {
    payload: PageSetAction
}

export interface KeyedPageState {
    current: number,
    rowsPerPage: number,
}
export interface PageState {
    [key:string] : KeyedPageState
}

interface RootState extends RootStateOrAny {
    pages: PageState,
}

export const addPageSet = 'page/pageSetAdded';
export const currentPageChanged = 'page/currentPageChanged';
export const rowsPerPageChanged = 'page/rowsPerPageChanged';

export const defaultRowsPerPageValues: number[] = [10, 25, 50, 100, 250, 500, 1000];

export const filterPage = (page: number, rowsPerPage: number) => (row: any, index: number): boolean => Math.ceil((index + 1) / rowsPerPage) === page;
export const calcPages = (rows: number, rowsPerPage: number): number => Math.ceil(rows / rowsPerPage);

export const setPageAction = ({current, key = 'app'}:PageSetAction): PageAction => ({type: currentPageChanged, payload: {key, current}});
export const setRowsPerPageAction = ({rowsPerPage, key = 'app'}:PageSetAction): PageAction => ({type: rowsPerPageChanged, payload: {key, rowsPerPage}});
export const addPageSetAction = ({key = 'app', current = 1, rowsPerPage = 25}:PageSetAction): PageAction => ({type: addPageSet, payload: {key, current, rowsPerPage}});


export const selectCurrentPage = (key:string) => (state: RootState): number => state.pages[key]?.current ?? 1;
export const selectRowsPerPage = (key:string) => (state: RootState): number => state.pages[key]?.rowsPerPage ?? 25;

export const selectPagedData = (key: string, data: any[]) => (state:RootState):any[] => {
    if (!state.pages[key]) {
        return data;
    }
    const {current, rowsPerPage} = state.pages[key] || {};
    return data.filter((row, index) => Math.ceil((index + 1) / rowsPerPage) === current);
}


export const selectPageFilter = (key:string) => (state:RootState):(row:any, index:number) => boolean => {
    if (!state.pages[key]) {
        return () => true;
    }
    const {current = 1, rowsPerPage = 25} = state.pages[key] || {};
    return filterPage(current, rowsPerPage);
}

export const currentPageSelector = selectCurrentPage;
export const rowsPerPageSelector = selectRowsPerPage;
export const pagedDataSelector = selectPagedData;

const pageReducer = (state:PageState = {}, action: PageAction):PageState => {
    const {type, payload} = action;
    const {key = 'app', current = 1, rowsPerPage = 25} = payload || {};
    switch (type) {
    case currentPageChanged:
        if (state[key]) {
            const {rowsPerPage} = state[key];
            return {
                ...state,
                [key]: {current, rowsPerPage}
            }
        }
        return state;
    case rowsPerPageChanged:
        if (state[key]) {
            const {current} = state[key];
            return {
                ...state,
                [key]: {current, rowsPerPage}
            }
        }
        return state;
    case addPageSet:
        if (!state[key]) {
            return {
                ...state,
                [key]: {current, rowsPerPage},
            }
        }
        return state;
    default: return state;
    }
}

export default pageReducer
