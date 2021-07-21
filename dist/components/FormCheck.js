import React from 'react';
import classNames from 'classnames';
var FormCheck = function (_a) {
    var label = _a.label, checked = _a.checked, onClick = _a.onClick, _b = _a.inline, inline = _b === void 0 ? false : _b, _c = _a.className, className = _c === void 0 ? {} : _c, _d = _a.type, type = _d === void 0 ? "checkbox" : _d;
    return (React.createElement("div", { className: classNames("form-check", className, { "form-check-inline": inline }) },
        React.createElement("input", { type: type, className: "form-check-input", checked: checked, onChange: onClick }),
        React.createElement("label", { className: "form-check-label", onClick: onClick }, label)));
};
export default FormCheck;
//# sourceMappingURL=FormCheck.js.map