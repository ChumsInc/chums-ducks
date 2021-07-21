import React from 'react';
import classNames from "classnames";
import SortableTableHead from "./SortableTableHead";
import SortableTR from "./SortableTR";
import { useDispatch } from "react-redux";
import { sortChangedAction } from "./index";
import { noop } from "../../utils";
const SortableTable = ({ tableKey, keyField, rowClassName, onSelectRow = noop, selected = '', fields, data, className = 'table-xs', onChangeSort = noop, }) => {
    const dispatch = useDispatch();
    const sortChangeHandler = (field, ascending) => {
        dispatch(sortChangedAction({ key: tableKey, field, ascending }));
        onChangeSort();
    };
    return (React.createElement("table", { className: classNames('table', className) },
        React.createElement(SortableTableHead, { tableKey: tableKey, fields: fields, onChangeSort: sortChangeHandler }),
        React.createElement("tbody", null, data.map(row => {
            const key = typeof keyField === "function" ? keyField(row) : row[keyField];
            const isSelected = typeof selected === 'function' ? selected(row) : key === selected;
            return (React.createElement(SortableTR, { key: key, onClick: () => onSelectRow(row), className: rowClassName, fields: fields, row: row, selected: isSelected }));
        }))));
};
export default SortableTable;
//# sourceMappingURL=SortableTable.js.map