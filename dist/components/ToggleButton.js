import React from "react";
import classNames from "classnames";
var ToggleButton = function (_a) {
    var _b;
    var id = _a.id, _c = _a.type, type = _c === void 0 ? 'checkbox' : _c, checked = _a.checked, _d = _a.color, color = _d === void 0 ? 'primary' : _d, size = _a.size, className = _a.className, onClick = _a.onClick, children = _a.children;
    var btnClassName = classNames(className, (_b = {
            btn: true
        },
        _b["btn-" + size] = !!size,
        _b["btn-outline-" + color] = !!color,
        _b));
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { type: type, className: "btn-check", id: id, autoComplete: "off", onChange: onClick, checked: checked }),
        React.createElement("label", { htmlFor: id, className: btnClassName }, children)));
};
export default ToggleButton;
//# sourceMappingURL=ToggleButton.js.map