import React from 'react';
import classNames from "classnames";
var CurrentPageButton = function (_a) {
    var page = _a.page, _b = _a.label, label = _b === void 0 ? null : _b;
    return (React.createElement("li", { className: classNames('page-item active') },
        React.createElement("span", { className: "page-link" }, label || page)));
};
var SelectablePageButton = function (_a) {
    var page = _a.page, _b = _a.label, label = _b === void 0 ? null : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, onClick = _a.onClick;
    var handleClick = function (ev) {
        ev.preventDefault();
        if (onClick) {
            onClick(page);
        }
    };
    return (React.createElement("li", { className: classNames('page-item', { disabled: disabled }) },
        React.createElement("a", { href: "#", className: 'page-link', onClick: handleClick }, label || page)));
};
var PageButton = function (_a) {
    var page = _a.page, _b = _a.label, label = _b === void 0 ? '' : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.isCurrent, isCurrent = _d === void 0 ? false : _d, onClick = _a.onClick;
    return (isCurrent
        ? React.createElement(CurrentPageButton, { page: page, label: label })
        : React.createElement(SelectablePageButton, { page: page, label: label, disabled: disabled, onClick: onClick }));
};
export default PageButton;
//# sourceMappingURL=PageButton.js.map