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
import React, { useRef } from 'react';
import classNames from "classnames";
import { getRegex } from "../utils";
var noop = function () {
};
var Input = function (_a) {
    var _b;
    var _c = _a.bsSize, bsSize = _c === void 0 ? 'sm' : _c, fuzzyList = _a.fuzzyList, myRef = _a.myRef, _d = _a.type, type = _d === void 0 ? 'text' : _d, className = _a.className, value = _a.value, _e = _a.onChange, onChange = _e === void 0 ? noop : _e, rest = __rest(_a, ["bsSize", "fuzzyList", "myRef", "type", "className", "value", "onChange"]);
    var inputRef = myRef || useRef(null);
    var inputClassName = (_b = {
            'form-control': true
        },
        _b["form-control-" + bsSize] = !!bsSize,
        _b);
    var changeHandler = function (ev) {
        if (!!rest.list && fuzzyList) {
            if (inputRef.current) {
                inputRef.current.pattern = getRegex(ev.target.value).source;
            }
        }
        onChange(ev);
    };
    return (React.createElement("input", __assign({ type: type, className: classNames(inputClassName, className), value: value || '', onChange: changeHandler, ref: inputRef }, rest)));
};
export default Input;
//# sourceMappingURL=Input.js.map