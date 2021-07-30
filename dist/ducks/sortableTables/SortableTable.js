import React from 'react';
import classNames from "classnames";
import SortableTableHead from "./SortableTableHead";
import SortableTR from "./SortableTR";
import { useDispatch } from "react-redux";
import { sortChangedAction } from "./index";
import { noop } from "../../utils";
var SortableTable = function (_a) {
    var _b;
    var tableKey = _a.tableKey, keyField = _a.keyField, _c = _a.size, size = _c === void 0 ? '' : _c, rowClassName = _a.rowClassName, _d = _a.onSelectRow, onSelectRow = _d === void 0 ? noop : _d, _e = _a.selected, selected = _e === void 0 ? '' : _e, fields = _a.fields, data = _a.data, _f = _a.className, className = _f === void 0 ? '' : _f, tfoot = _a.tfoot, _g = _a.onChangeSort, onChangeSort = _g === void 0 ? noop : _g;
    var dispatch = useDispatch();
    var sortChangeHandler = function (field, ascending) {
        dispatch(sortChangedAction({ key: tableKey, field: field, ascending: ascending }));
        onChangeSort();
    };
    var tableClassName = classNames('table', className, (_b = {},
        _b["table-" + size] = !!size,
        _b));
    return (React.createElement("table", { className: tableClassName },
        React.createElement(SortableTableHead, { tableKey: tableKey, fields: fields, onChangeSort: sortChangeHandler }),
        React.createElement("tbody", null, data.map(function (row) {
            var key = typeof keyField === "function" ? keyField(row) : row[keyField];
            var isSelected = typeof selected === 'function' ? selected(row) : key === selected;
            return (React.createElement(SortableTR, { key: key, onClick: function () { return onSelectRow(row); }, className: rowClassName, fields: fields, row: row, selected: isSelected }));
        })),
        tfoot));
};
export default SortableTable;
//# sourceMappingURL=SortableTable.js.map