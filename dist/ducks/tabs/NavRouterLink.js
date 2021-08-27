import React from "react";
import classNames from "classnames";
import { NavLink } from 'react-router-dom';
var NavRouterLink = function (_a) {
    var to = _a.to, id = _a.id, title = _a.title, icon = _a.icon, canClose = _a.canClose, disabled = _a.disabled, className = _a.className, onClose = _a.onClose;
    var onClickClose = function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        if (canClose && !!onClose) {
            onClose(id);
        }
    };
    return (React.createElement("li", { className: "nav-item" },
        React.createElement(NavLink, { to: to, activeClassName: "active", className: classNames('nav-link', className, { disabled: disabled }), tabIndex: disabled ? -1 : 0 },
            !!icon && React.createElement("span", { className: classNames('nav-item-icon', 'me-1', icon) }),
            React.createElement("span", { className: "nav-item-text " }, title),
            canClose && (React.createElement("span", { "aria-label": "Close", onClick: onClickClose, className: "ms-2 bi-x-lg nav-item-close" })))));
};
export default NavRouterLink;
//# sourceMappingURL=NavRouterLink.js.map