
import {ActionInterface} from "../types";
import {ReactElement} from "react";
import {RootStateOrAny} from "react-redux";

export interface SortableTableInterface {
    key: string,
    field: string,
    ascending: boolean,
}

export interface SortableTablesAction extends ActionInterface {
    payload: {
        key: string,
        field: string,
        ascending: boolean,
    }
}

export interface SortableTablesState {
    [key:string]: SortableTableInterface
}

export interface SortableTableField {
    field: string,
    title: string,
    sortable?: boolean,
    render?: (row:any) => ReactElement|Element|string,
    className?: string|object|((any:any) => string|object),
}

interface RootState extends RootStateOrAny {
    sortableTables: SortableTablesState,
}

export const tablesSortChanged = 'tables/categorySortChanged';
export const tablesTableAdded = 'tables/tableAdded';

export const sortableTableSelector = (key:string) => (state:RootState):SortableTableInterface => state.sortableTables[key] || {key, field: '', ascending: false};

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
