var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import classNames from "classnames";
import { noop } from "../../utils";
var SortableTR = function (_a) {
    var className = _a.className, rowClassName = _a.rowClassName, selected = _a.selected, fields = _a.fields, row = _a.row, trRef = _a.trRef, _b = _a.onClick, onClick = _b === void 0 ? noop : _b, rest = __rest(_a, ["className", "rowClassName", "selected", "fields", "row", "trRef", "onClick"]);
    var clickHandler = function () {
        return onClick ? onClick() : noop();
    };
    var _className = typeof rowClassName === 'function' ? rowClassName(row) : rowClassName;
    return (React.createElement("tr", __assign({ ref: trRef, className: classNames({ 'table-active': selected }, className, _className), onClick: clickHandler }, rest), fields.map(function (field, index) {
        var fieldClassName = typeof field.className === 'function' ? field.className(row) : field.className;
        if (typeof field.render === 'function') {
            return (React.createElement("td", { key: index, className: classNames(fieldClassName), colSpan: field.colSpan }, field.render(row)));
        }
        return (React.createElement("td", { key: index, className: classNames(fieldClassName), colSpan: field.colSpan }, row[field.field]));
    })));
};
export default SortableTR;
//# sourceMappingURL=SortableTR.js.map