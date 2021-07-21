import React from 'react';
import classNames from "classnames";
import { noop } from "../../utils";
var SortableTR = function (_a) {
    var className = _a.className, selected = _a.selected, fields = _a.fields, row = _a.row, _b = _a.onClick, onClick = _b === void 0 ? noop : _b;
    var clickHandler = function (event) {
        return onClick ? onClick() : noop();
    };
    var _className = typeof className === 'function' ? className(row) : className;
    return (React.createElement("tr", { className: classNames({ 'table-active': selected }, _className), onClick: clickHandler }, fields.map(function (field, index) {
        var fieldClassName = typeof field.className === 'function' ? field.className(row) : field.className;
        if (typeof field.render === 'function') {
            return (React.createElement("td", { key: index, className: classNames(fieldClassName) }, field.render(row)));
        }
        return (React.createElement("td", { key: index, className: classNames(fieldClassName) }, row[field.field]));
    })));
};
export default SortableTR;
//# sourceMappingURL=SortableTR.js.map