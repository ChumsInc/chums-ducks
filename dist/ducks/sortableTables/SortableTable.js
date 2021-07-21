import React from 'react';
import classNames from "classnames";
import SortableTableHead from "./SortableTableHead";
import SortableTR from "./SortableTR";
import { useDispatch } from "react-redux";
import { sortChangedAction } from "./index";
import { noop } from "../../utils";
var SortableTable = function (_a) {
    var tableKey = _a.tableKey, keyField = _a.keyField, rowClassName = _a.rowClassName, _b = _a.onSelectRow, onSelectRow = _b === void 0 ? noop : _b, _c = _a.selected, selected = _c === void 0 ? '' : _c, fields = _a.fields, data = _a.data, _d = _a.className, className = _d === void 0 ? 'table-xs' : _d, _e = _a.onChangeSort, onChangeSort = _e === void 0 ? noop : _e;
    var dispatch = useDispatch();
    var sortChangeHandler = function (field, ascending) {
        dispatch(sortChangedAction({ key: tableKey, field: field, ascending: ascending }));
        onChangeSort();
    };
    return (React.createElement("table", { className: classNames('table', className) },
        React.createElement(SortableTableHead, { tableKey: tableKey, fields: fields, onChangeSort: sortChangeHandler }),
        React.createElement("tbody", null, data.map(function (row) {
            var key = typeof keyField === "function" ? keyField(row) : row[keyField];
            var isSelected = typeof selected === 'function' ? selected(row) : key === selected;
            return (React.createElement(SortableTR, { key: key, onClick: function () { return onSelectRow(row); }, className: rowClassName, fields: fields, row: row, selected: isSelected }));
        }))));
};
export default SortableTable;
//# sourceMappingURL=SortableTable.js.map