import React from "react";
import classNames from "classnames";
var InputGroup = function (_a) {
    var _b;
    var _c = _a.bsSize, bsSize = _c === void 0 ? 'sm' : _c, className = _a.className, children = _a.children;
    return (React.createElement("div", { className: classNames('input-group', (_b = {}, _b["input-group-" + bsSize] = !!bsSize, _b), className) }, children));
};
export default InputGroup;
//# sourceMappingURL=InputGroup.js.map