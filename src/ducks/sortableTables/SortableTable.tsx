import React, {TableHTMLAttributes} from 'react';
import classNames from "classnames";
import SortableTableHead from "./SortableTableHead";
import SortableTR from "./SortableTR";
import {useDispatch} from "react-redux";
import {SortableTableField, sortChangedAction} from "./index";
import {noop} from "../../utils";
import {BootstrapSize} from "../../types";

export interface SortableTableProps extends TableHTMLAttributes<HTMLTableElement> {
    tableKey: string,
    keyField: string | ((any: any) => string),
    size?: BootstrapSize,
    rowClassName?: string | object | ((any: any) => string | object),
    onSelectRow?: (any: any) => any | void,
    selected?: string | number | ((any: any) => boolean),
    fields: SortableTableField[],
    data: any[],
    tfoot?: React.ReactElement<HTMLTableSectionElement>,
    onChangeSort?: (any?: any) => void,
}

const SortableTable: React.FC<SortableTableProps> = ({
                                                         tableKey,
                                                         keyField,
                                                         size = '',
                                                         rowClassName,
                                                         onSelectRow = noop,
                                                         selected = '',
                                                         fields,
                                                         data,
                                                         className = '',
                                                         tfoot,
                                                         onChangeSort = noop,
                                                     }) => {
    const dispatch = useDispatch();
    const sortChangeHandler = (field: string, ascending: boolean) => {
        dispatch(sortChangedAction({key: tableKey, field, ascending}));
        onChangeSort();
    }

    const tableClassName = classNames('table', className, {
        [`table-${size}`]: !!size,
    })
    return (
        <table className={tableClassName}>
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
            {tfoot}
        </table>
    )
}

export default SortableTable;
