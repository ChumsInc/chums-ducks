import React from "react";
import { default as Progress } from "./Progress";
import { default as ProgressBar } from "./ProgressBar";
var LoadingProgress = function (_a) {
    var height = _a.height, className = _a.className, style = _a.style, _b = _a.color, color = _b === void 0 ? 'primary' : _b, _c = _a.value, value = _c === void 0 ? 100 : _c, _d = _a.valueMin, valueMin = _d === void 0 ? 0 : _d, _e = _a.valueMax, valueMax = _e === void 0 ? 100 : _e, striped = _a.striped, animated = _a.animated, children = _a.children;
    return (React.createElement(Progress, { height: height, className: className, style: style },
        React.createElement(ProgressBar, { color: color, value: value, valueMin: valueMin, valueMax: valueMax, striped: striped, animated: animated }),
        children));
};
export default LoadingProgress;
//# sourceMappingURL=LoadingProgressBar.js.map