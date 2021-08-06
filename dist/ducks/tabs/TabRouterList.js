import React from "react";
import { default as NavList } from "./NavList";
import classNames from "classnames";
var TabRouterList = function (_a) {
    var tabKey = _a.tabKey, className = _a.className, itemClassName = _a.itemClassName, children = _a.children;
    return (React.createElement(NavList, { tabKey: tabKey, className: classNames(className, 'nav-tabs'), itemClassName: itemClassName }, children));
};
export default TabRouterList;
//# sourceMappingURL=TabRouterList.js.map