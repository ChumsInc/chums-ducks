var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import classNames from "classnames";
var ProgressBar = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'primary' : _b, _c = _a.value, value = _c === void 0 ? 100 : _c, _d = _a.valueMin, valueMin = _d === void 0 ? 0 : _d, _e = _a.valueMax, valueMax = _e === void 0 ? 100 : _e, striped = _a.striped, animated = _a.animated, _f = _a.className, className = _f === void 0 ? '' : _f, _g = _a.style, style = _g === void 0 ? {} : _g, children = _a.children;
    var width = 1 - ((valueMax - value) / (valueMax - valueMin));
    if (width < 0) {
        width = 0;
    }
    else if (width > 1) {
        width = 1;
    }
    var progressBarClassName = {
        'progress-bar': true,
        'progress-bar-striped': striped || animated,
        'progress-bar-animated': animated,
    };
    return (React.createElement("div", { className: classNames("bg-" + color, __assign({}, progressBarClassName), className), role: "progressbar", style: __assign({ width: width * 100 + "%" }, style) }, children || null));
};
export default ProgressBar;
//# sourceMappingURL=ProgressBar.js.map