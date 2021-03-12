import * as React from "react";
import classNames from 'classnames';
import numeral from "numeral";
import Badge from "../../components/Badge";
var Alert = function (_a) {
    var alert = _a.alert, onDismiss = _a.onDismiss, children = _a.children;
    var className = alert.className, color = alert.color, context = alert.context, count = alert.count, id = alert.id, message = alert.message, title = alert.title;
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
        typeof onDismiss === 'function' && React.createElement("span", { onClick: function () { return onDismiss(id); }, className: "btn-close" })));
};
export default Alert;
//# sourceMappingURL=Alert.js.map