import React from "react";
import SortableTH from "./SortableTH";
import { useSelector } from "react-redux";
import { sortableTableSelector } from "./index";
const SortableTableHead = ({ tableKey, fields, onChangeSort }) => {
    const { field, ascending } = useSelector(sortableTableSelector(tableKey));
    return (React.createElement("thead", null,
        React.createElement("tr", null, fields.map((tableField, index) => (React.createElement(SortableTH, { key: index, field: tableField, sorted: field === tableField.field, ascending: ascending, onClick: onChangeSort }))))));
};
export default SortableTableHead;
//# sourceMappingURL=SortableTableHead.js.map