import React from "react";
import SortableTH from "./SortableTH";
import { useSelector } from "react-redux";
import { sortableTableSelector } from "./index";
var SortableTableHead = function (_a) {
    var tableKey = _a.tableKey, fields = _a.fields, onChangeSort = _a.onChangeSort;
    var _b = useSelector(sortableTableSelector(tableKey)), field = _b.field, ascending = _b.ascending;
    return (React.createElement("thead", null,
        React.createElement("tr", null, fields.map(function (tableField, index) { return (React.createElement(SortableTH, { key: index, field: tableField, sorted: field === tableField.field, ascending: ascending, className: tableField.className, onClick: onChangeSort })); }))));
};
export default SortableTableHead;
//# sourceMappingURL=SortableTableHead.js.map