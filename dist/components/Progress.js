import React from 'react';
import classNames from "classnames";
var Progress = function (_a) {
    var height = _a.height, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.style, style = _c === void 0 ? {} : _c, children = _a.children;
    if (height && !style.height) {
        style.height = height;
    }
    return (React.createElement("div", { className: classNames('progress', className), style: style }, children));
};
export default Progress;
//# sourceMappingURL=Progress.js.map