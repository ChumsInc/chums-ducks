import React from "react";
import classNames from "classnames";
import NavRouterList from "./NavRouterList";
var TabRouterList = function (_a) {
    var tabKey = _a.tabKey, className = _a.className, itemClassName = _a.itemClassName, children = _a.children;
    return (React.createElement(NavRouterList, { tabKey: tabKey, className: classNames(className, 'nav-tabs'), itemClassName: itemClassName }, children));
};
export default TabRouterList;
//# sourceMappingURL=TabRouterList.js.map