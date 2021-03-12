import React from 'react';
import classNames from "classnames";
var Badge = function (_a) {
    var color = _a.color, pill = _a.pill, text = _a.text, className = _a.className, description = _a.description, children = _a.children;
    var styleClassName = "bg-" + color;
    var badgeClassNames = classNames('badge', { 'badge-pill': pill }, styleClassName, className);
    return (React.createElement("span", { className: badgeClassNames },
        text || children || '',
        !!description && (React.createElement("span", { className: "visually-hidden" }, description))));
};
export default Badge;
//# sourceMappingURL=Badge.js.map