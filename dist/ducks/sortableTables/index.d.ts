import { ActionInterface, ActionPayload } from "../types";
import { ReactElement } from "react";
export interface SortableTableInterface {
    key: string;
    field: string;
    ascending: boolean;
}
export interface SortableTablesPayload extends ActionPayload {
    key: string;
    field: string;
    ascending: boolean;
}
export interface SortableTablesAction extends ActionInterface {
    payload: SortableTablesPayload;
}
export interface SortableTablesState {
    [key: string]: SortableTableInterface;
}
export interface SorterProps {
    field: string;
    ascending: boolean;
}
export interface SortableTableField {
    field: string;
    title: ReactElement | Element | string;
    sortable?: boolean;
    render?: (row: any) => ReactElement | Element | string | number;
    className?: string | object | ((any: any) => string | object);
    colSpan?: number;
}
interface RootStateWithTables {
    sortableTables: SortableTablesState;
}
export declare const tablesSortChanged = "tables/categorySortChanged";
export declare const tablesTableAdded = "tables/tableAdded";
export declare const selectTableSort: (key: string) => (state: RootStateWithTables) => SortableTableInterface;
export declare const sortableTableSelector: (key: string) => (state: RootStateWithTables) => SortableTableInterface;
export declare const sortChangedAction: ({ key, field, ascending }: SortableTableInterface) => SortableTablesAction;
export declare const tableAddedAction: ({ key, field, ascending }: SortableTableInterface) => SortableTablesAction;
declare const sortableTablesReducer: (state: SortableTablesState | undefined, action: SortableTablesAction) => SortableTablesState;
export default sortableTablesReducer;
