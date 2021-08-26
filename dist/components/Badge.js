import React from 'react';
import classNames from "classnames";
var Badge = function (_a) {
    var _b;
    var color = _a.color, pill = _a.pill, text = _a.text, className = _a.className, description = _a.description, children = _a.children;
    var _className = (_b = {
            'badge': true,
            'badge-pill': pill
        },
        _b["bg-" + color] = !!color,
        _b);
    return (React.createElement("span", { className: classNames(_className, className) },
        text || children || '',
        !!description && (React.createElement("span", { className: "visually-hidden" }, description))));
};
export default Badge;
//# sourceMappingURL=Badge.js.map