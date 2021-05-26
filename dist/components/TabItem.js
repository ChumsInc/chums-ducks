import React from "react";
import classNames from "classnames";
const TabItem = ({ id, title, active, canClose, disabled, onSelect, onClose }) => {
    const onClick = (ev) => {
        ev.preventDefault();
        if (disabled) {
            return;
        }
        onSelect(id);
    };
    const onClickClose = () => {
        if (canClose && !!onClose) {
            onClose(id);
        }
    };
    return (React.createElement("li", { className: "nav-item" },
        React.createElement("a", { className: classNames('nav-link', { active, disabled }), tabIndex: disabled ? -1 : 0, href: "#", onClick: onClick },
            title,
            canClose && (React.createElement("button", { type: "button", "aria-label": "Close", onClick: onClickClose, className: "btn-close" })))));
};
export default TabItem;
//# sourceMappingURL=TabItem.js.map