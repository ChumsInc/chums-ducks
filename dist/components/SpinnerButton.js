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
import React from "react";
import classNames from "classnames";
var SpinnerButton = function (_a) {
    var _b, _c;
    var _d = _a.spinning, spinning = _d === void 0 ? false : _d, _e = _a.spinnerType, spinnerType = _e === void 0 ? 'border' : _e, _f = _a.spinnerAfter, spinnerAfter = _f === void 0 ? false : _f, _g = _a.color, color = _g === void 0 ? 'primary' : _g, size = _a.size, className = _a.className, children = _a.children, rest = __rest(_a, ["spinning", "spinnerType", "spinnerAfter", "color", "size", "className", "children"]);
    var btnClassName = classNames(className, (_b = {
            btn: true
        },
        _b["btn-" + size] = !!size,
        _b["btn-" + color] = !!color,
        _b));
    var spinnerClassName = classNames((_c = {},
        _c["spinner-" + spinnerType] = !!spinnerType,
        _c["spinner-" + spinnerType + "-sm"] = !size || ['sm'].includes(size),
        _c["me-1"] = !spinnerAfter,
        _c["ms-1"] = spinnerAfter,
        _c));
    return (React.createElement("button", __assign({ className: btnClassName }, rest, { disabled: spinning }),
        spinning && !spinnerAfter && React.createElement("span", { className: spinnerClassName, role: "status", "aria-hidden": "true" }),
        children,
        spinning && spinnerAfter && React.createElement("span", { className: spinnerClassName, role: "status", "aria-hidden": "true" })));
};
export default SpinnerButton;
//# sourceMappingURL=SpinnerButton.js.map