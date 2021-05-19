import React from 'react';
import classNames from "classnames";
const Progress = ({ height, className = '', style = {}, children }) => {
    if (height && !style.height) {
        style.height = height;
    }
    return (React.createElement("div", { className: classNames('progress', className), style: style }, children));
};
export default Progress;
//# sourceMappingURL=Progress.js.map