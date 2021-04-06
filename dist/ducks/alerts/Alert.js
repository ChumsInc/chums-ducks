import * as React from "react";
import classNames from 'classnames';
import numeral from "numeral";
import Badge from "../../components/Badge";
var Alert = function (_a) {
    var message = _a.message, _b = _a.color, color = _b === void 0 ? 'primary' : _b, _c = _a.title, title = _c === void 0 ? null : _c, _d = _a.className, className = _d === void 0 ? '' : _d, _e = _a.context, context = _e === void 0 ? null : _e, _f = _a.count, count = _f === void 0 ? 0 : _f, onDismiss = _a.onDismiss, children = _a.children;
    var canDismiss = typeof onDismiss === 'function';
    var elClassName = {
        'alert-dismissible': canDismiss,
    };
    return (React.createElement("div", { className: classNames('alert my-3', "alert-" + color, className, elClassName) },
        !!context && (React.createElement("strong", { className: "me-1" },
            "[",
            context,
            "]")),
        title && (React.createElement("strong", { className: "me-1" },
            title,
            ":")),
        message || children || null,
        !!count && count > 1 && (React.createElement(Badge, { color: color || 'danger', className: "mx-3" }, numeral(count).format('0,0'))),
        typeof onDismiss === 'function' && React.createElement("span", { onClick: onDismiss, className: "btn-close" })));
};
export default Alert;
//# sourceMappingURL=Alert.js.map