import React from "react";
import classNames from "classnames";
import NavRouterList from "./NavRouterList";
var PillRouterList = function (_a) {
    var tabKey = _a.tabKey, className = _a.className, itemClassName = _a.itemClassName, children = _a.children;
    return (React.createElement(NavRouterList, { tabKey: tabKey, className: classNames(className, 'nav-pills'), itemClassName: itemClassName }, children));
};
export default PillRouterList;
//# sourceMappingURL=PillRouterList.js.map