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
const Select = (_a) => {
    var { bsSize, className, children } = _a, rest = __rest(_a, ["bsSize", "className", "children"]);
    const selectClassName = {
        [`form-select-${bsSize}`]: !!bsSize
    };
    return (React.createElement("select", Object.assign({ className: classNames("form-select", selectClassName, className) }, rest), children));
};
export default Select;
//# sourceMappingURL=Select.js.map