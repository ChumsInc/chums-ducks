import React from 'react';
import classNames from "classnames";
import SortableTableHead from "./SortableTableHead";
import SortableTR from "./SortableTR";
import {useDispatch} from "react-redux";
import {SortableTableField, sortChangedAction} from "./index";
import {noop} from "../../utils";

export interface SortableTableProps {
    tableKey: string,
    keyField: string | ((any: any) => string),
    rowClassName?: string | object | ((any: any) => string | object),
    onSelectRow?: (any: any) => any | void,
    selected?: string|number|((any:any) => boolean),
    fields: SortableTableField[],
    data: any[],
    className?: string | object,
    onChangeSort?: (any?: any) => void,
}

const SortableTable: React.FC<SortableTableProps> = ({
                                                         tableKey,
                                                         keyField,
                                                         rowClassName,
                                                         onSelectRow = noop,
                                                         selected = '',
                                                         fields,
                                                         data,
                                                         className = 'table-xs',
                                                         onChangeSort = noop,
                                                     }) => {
    const dispatch = useDispatch();
    const sortChangeHandler = (field: string, ascending: boolean) => {
        dispatch(sortChangedAction({key: tableKey, field, ascending}));
        onChangeSort();
    }

    return (
        <table className={classNames('table', className)}>
            <SortableTableHead tableKey={tableKey} fields={fields} onChangeSort={sortChangeHandler}/>
            <tbody>
            {data.map(row => {
                const key = typeof keyField === "function" ? keyField(row) : row[keyField];
                const isSelected = typeof selected === 'function' ? selected(row) : key === selected;
                return (
                    <SortableTR key={key} onClick={() => onSelectRow(row)} className={rowClassName} fields={fields}
                                row={row} selected={isSelected}/>
                )
            })}
            </tbody>
        </table>
    )
}

export default SortableTable;
