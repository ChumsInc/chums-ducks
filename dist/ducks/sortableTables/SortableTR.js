import React from 'react';
import classNames from "classnames";
import { noop } from "../../utils";
var SortableTR = function (_a) {
    var className = _a.className, selected = _a.selected, fields = _a.fields, row = _a.row, trRef = _a.trRef, _b = _a.onClick, onClick = _b === void 0 ? noop : _b;
    var clickHandler = function () {
        return onClick ? onClick() : noop();
    };
    var _className = typeof className === 'function' ? className(row) : className;
    return (React.createElement("tr", { ref: trRef, className: classNames({ 'table-active': selected }, _className), onClick: clickHandler }, fields.map(function (field, index) {
        var fieldClassName = typeof field.className === 'function' ? field.className(row) : field.className;
        if (typeof field.render === 'function') {
            return (React.createElement("td", { key: index, className: classNames(fieldClassName), colSpan: field.colSpan }, field.render(row)));
        }
        return (React.createElement("td", { key: index, className: classNames(fieldClassName), colSpan: field.colSpan }, row[field.field]));
    })));
};
export default SortableTR;
//# sourceMappingURL=SortableTR.js.map