import React from "react";
import classNames from "classnames";
const InputGroup = ({ bsSize = 'sm', className, children }) => {
    return (React.createElement("div", { className: classNames('input-group', { [`input-group-${bsSize}`]: !!bsSize }, className) }, children));
};
export default InputGroup;
//# sourceMappingURL=InputGroup.js.map