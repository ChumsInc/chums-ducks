import React from "react";
import classNames from "classnames";
import { NavLink } from 'react-router-dom';
var NavRouterLink = function (_a) {
    var to = _a.to, id = _a.id, title = _a.title, active = _a.active, canClose = _a.canClose, disabled = _a.disabled, className = _a.className, onClose = _a.onClose;
    var onClickClose = function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        if (canClose && !!onClose) {
            onClose(id);
        }
    };
    return (React.createElement("li", { className: "nav-item" },
        React.createElement(NavLink, { to: to, activeClassName: "active", className: classNames('nav-link', className, { active: active, disabled: disabled }), tabIndex: disabled ? -1 : 0 },
            title,
            canClose && (React.createElement("span", { "aria-label": "Close", onClick: onClickClose, className: "ms-2 bi-x-lg" })))));
};
export default NavRouterLink;
//# sourceMappingURL=NavRouterLink.js.map