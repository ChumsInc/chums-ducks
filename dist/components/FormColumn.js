import React from "react";
import classNames from "classnames";
var FormColumn = function (_a) {
    var _b, _c;
    var label = _a.label, _d = _a.width, width = _d === void 0 ? 8 : _d, className = _a.className, children = _a.children;
    var labelClassName = (_b = {},
        _b["col-" + (12 - width)] = !!width,
        _b['col-auto'] = !width,
        _b['form-label'] = true,
        _b);
    var containerClassName = (_c = {},
        _c["col-" + width] = !!width,
        _c['col'] = !width,
        _c);
    return (React.createElement("div", { className: classNames('row g-3', className) },
        React.createElement("label", { className: classNames(labelClassName) }, label),
        React.createElement("div", { className: classNames(containerClassName) }, children)));
};
export default FormColumn;
//# sourceMappingURL=FormColumn.js.map