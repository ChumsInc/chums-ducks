import React from "react";
import classNames from "classnames";
var TabItem = function (_a) {
    var id = _a.id, title = _a.title, active = _a.active, canClose = _a.canClose, disabled = _a.disabled, onSelect = _a.onSelect, onClose = _a.onClose;
    var clickHandler = function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        if (disabled || active) {
            return;
        }
        onSelect();
    };
    var onClickClose = function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        if (canClose && !!onClose) {
            onClose();
        }
    };
    return (React.createElement("li", { className: "nav-item" },
        React.createElement("a", { className: classNames('nav-link', { active: active, disabled: disabled }), tabIndex: disabled ? -1 : 0, href: "#", onClick: clickHandler },
            title,
            canClose && (React.createElement("button", { type: "button", "aria-label": "Close", onClick: onClickClose, className: "btn-close" })))));
};
export default TabItem;
//# sourceMappingURL=TabItem.js.map