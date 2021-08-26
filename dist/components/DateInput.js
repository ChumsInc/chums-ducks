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
import Input from "./Input";
export var formatInputDate = function (date) {
    return [
        String(date.getFullYear()).padStart(4, '0'),
        String(date.getMonth() + 1).padStart(2, '0'),
        String(date.getDate()).padStart(2, '0')
    ].join('-');
};
export var inputDate = function (date) {
    if (date instanceof Date) {
        return formatInputDate(date);
    }
    if (typeof date === 'number') {
        return formatInputDate(new Date(date));
    }
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        var d_1 = dateFromInputValue(date);
        return d_1 instanceof Date ? formatInputDate(d_1) : '';
    }
    var d = new Date(date);
    if (!isNaN(d.valueOf())) {
        return formatInputDate(d);
    }
    return '';
};
export var dateFromInputValue = function (value) {
    var date = new Date(value);
    if (isNaN(date.valueOf())) {
        return null;
    }
    return new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000);
};
var DateInput = function (_a) {
    var date = _a.date, value = _a.value, onChangeDate = _a.onChangeDate, onChange = _a.onChange, rest = __rest(_a, ["date", "value", "onChangeDate", "onChange"]);
    var dateValue = inputDate(date || value || new Date());
    var changeHandler = function (ev) {
        if (onChangeDate) {
            var date_1 = dateFromInputValue(ev.target.value);
            if (date_1) {
                return onChangeDate(date_1);
            }
            return;
        }
        if (onChange) {
            return onChange(ev);
        }
    };
    return (React.createElement(Input, __assign({ type: "date", value: dateValue }, rest, { onChange: changeHandler })));
};
export default DateInput;
//# sourceMappingURL=DateInput.js.map