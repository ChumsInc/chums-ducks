
import {ActionInterface, ActionPayload} from "../types";
import {ReactElement} from "react";

export interface SortableTableInterface {
    key: string,
    field: string,
    ascending: boolean,
}

export interface SortableTablesPayload extends ActionPayload {
    key: string,
    field: string,
    ascending: boolean,
}
export interface SortableTablesAction extends ActionInterface {
    payload: SortableTablesPayload,
}

export interface SortableTablesState {
    [key:string]: SortableTableInterface
}

export interface SorterProps {
    field: string,
    ascending: boolean,
}

export interface SortableTableField {
    field: string,
    title: ReactElement|Element|string,
    sortable?: boolean,
    render?: (row:any) => ReactElement|Element|string|number,
    className?: string|object|((any:any) => string|object),
    colSpan?: number,
}

interface RootStateWithTables {
    sortableTables: SortableTablesState,
}

export const tablesSortChanged = 'tables/categorySortChanged';
export const tablesTableAdded = 'tables/tableAdded';

export const selectTableSort = (key:string) => (state:RootStateWithTables):SortableTableInterface => state.sortableTables[key] || {key, field: '', ascending: false};
export const sortableTableSelector = selectTableSort;


export const sortChangedAction = ({key, field, ascending}:SortableTableInterface):SortableTablesAction => ({
    type: tablesSortChanged,
    payload: {key, field, ascending}
});

export const tableAddedAction = ({key, field, ascending}:SortableTableInterface):SortableTablesAction => ({
    type: tablesTableAdded,
    payload: {key, field, ascending}
})

const sortableTablesReducer = (state:SortableTablesState = {}, action:SortableTablesAction):SortableTablesState => {
    const {type, payload} = action;
    const {key, field, ascending} = payload || {};
    switch (type) {
    case tablesSortChanged:
        return {
            ...state,
            [key]: {key, field, ascending}
        }
    case tablesTableAdded:
        if (!state[key]) {
            return {
                ...state,
                [key]: {key, field, ascending}
            }
        }
        return state;
    default: return state;
    }
}

export default sortableTablesReducer;
