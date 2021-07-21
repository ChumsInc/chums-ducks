import React from "react";
import classNames from 'classnames';
import numeral from "numeral";
import Badge from "../../components/Badge";
var Alert = function (_a) {
    var _b;
    var message = _a.message, _c = _a.color, color = _c === void 0 ? 'primary' : _c, title = _a.title, _d = _a.className, className = _d === void 0 ? '' : _d, context = _a.context, _e = _a.count, count = _e === void 0 ? 0 : _e, _f = _a.canDismiss, canDismiss = _f === void 0 ? true : _f, onDismiss = _a.onDismiss, children = _a.children;
    var elClassName = (_b = {},
        _b["alert-" + color] = !!color,
        _b['alert-dismissible'] = canDismiss,
        _b);
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