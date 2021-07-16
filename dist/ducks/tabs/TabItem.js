import React from "react";
import classNames from "classnames";
const TabItem = ({ id, title, active, canClose, disabled, onSelect, onClose }) => {
    const clickHandler = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        if (disabled || active) {
            return;
        }
        onSelect();
    };
    const onClickClose = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        if (canClose && !!onClose) {
            onClose();
        }
    };
    return (React.createElement("li", { className: "nav-item" },
        React.createElement("a", { className: classNames('nav-link', { active, disabled }), tabIndex: disabled ? -1 : 0, href: "#", onClick: clickHandler },
            title,
            canClose && (React.createElement("button", { type: "button", "aria-label": "Close", onClick: onClickClose, className: "btn-close" })))));
};
export default TabItem;
//# sourceMappingURL=TabItem.js.map