import React from "react";
import classNames from "classnames";
var NavItem = function (_a) {
    var id = _a.id, title = _a.title, icon = _a.icon, active = _a.active, canClose = _a.canClose, disabled = _a.disabled, className = _a.className, onSelect = _a.onSelect, onClose = _a.onClose;
    var clickHandler = function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        if (disabled || active) {
            return;
        }
        onSelect(id);
    };
    var onClickClose = function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        if (canClose && !!onClose) {
            onClose(id);
        }
    };
    return (React.createElement("li", { className: "nav-item" },
        React.createElement("a", { className: classNames('nav-link', className, { active: active, disabled: disabled }), tabIndex: disabled ? -1 : 0, href: "#", onClick: clickHandler },
            !!icon && React.createElement("span", { className: classNames('nav-item-icon me-1', icon) }),
            React.createElement("span", { className: "nav-item-text" }, title),
            canClose && (React.createElement("span", { "aria-label": "Close", onClick: onClickClose, className: "ms-2 bi-x-lg" })))));
};
export default NavItem;
//# sourceMappingURL=NavItem.js.map