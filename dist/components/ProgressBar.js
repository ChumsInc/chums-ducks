import React from 'react';
import classNames from "classnames";
const ProgressBar = ({ color = 'primary', value = 100, valueMin = 0, valueMax = 100, striped, animated, className = '', style = {}, children, }) => {
    let width = 1 - ((valueMax - value) / (valueMax - valueMin));
    if (width < 0) {
        width = 0;
    }
    else if (width > 1) {
        width = 1;
    }
    const progressBarClassName = {
        'progress-bar': true,
        'progress-bar-striped': striped || animated,
        'progress-bar-animated': animated,
    };
    return (React.createElement("div", { className: classNames(`bg-${color}`, Object.assign({}, progressBarClassName), className), role: "progressbar", style: Object.assign({ width: `${width * 100}%` }, style) }, children || null));
};
export default ProgressBar;
//# sourceMappingURL=ProgressBar.js.map