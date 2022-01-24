"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const react_router_dom_1 = require("react-router-dom");
const NavRouterLink = ({ to, id, title, icon, canClose, disabled, className, onClose }) => {
    const onClickClose = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        if (canClose && !!onClose) {
            onClose(id);
        }
    };
    return (react_1.default.createElement("li", { className: "nav-item" },
        react_1.default.createElement(react_router_dom_1.NavLink, { to: to, activeClassName: "active", className: (0, classnames_1.default)('nav-link', className, { disabled }), tabIndex: disabled ? -1 : 0 },
            !!icon && react_1.default.createElement("span", { className: (0, classnames_1.default)('nav-item-icon', 'me-1', icon) }),
            react_1.default.createElement("span", { className: "nav-item-text " }, title),
            canClose && (react_1.default.createElement("span", { "aria-label": "Close", onClick: onClickClose, className: "ms-2 bi-x-lg nav-item-close" })))));
};
exports.default = NavRouterLink;
//# sourceMappingURL=NavRouterLink.js.map