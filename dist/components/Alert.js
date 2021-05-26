import React from "react";
import classNames from 'classnames';
import numeral from "numeral";
import Badge from "./Badge";
const Alert = ({ message, color = 'primary', title, className = '', context, count = 0, canDismiss, onDismiss, children }) => {
    const elClassName = {
        [`alert-${color}`]: !!color,
        'alert-dismissible': canDismiss,
    };
    return (React.createElement("div", { className: classNames('alert my-3', elClassName, className) },
        !!context && (React.createElement("strong", { className: "me-1" },
            "[",
            context,
            "]")),
        !!title && (React.createElement("strong", { className: "me-1" },
            title,
            ":")),
        message || children || null,
        !!count && count > 1 && (React.createElement(Badge, { color: color, className: "mx-3" }, numeral(count).format('0,0'))),
        canDismiss && typeof onDismiss === 'function' && (React.createElement("button", { type: "button", "aria-label": "close", onClick: onDismiss, className: "btn-close" }))));
};
export default Alert;
//# sourceMappingURL=Alert.js.map