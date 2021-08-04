import React from "react";
import { default as NavList } from "./NavList";
import classNames from "classnames";
var PillList = function (_a) {
    var tabKey = _a.tabKey, className = _a.className, itemClassName = _a.itemClassName, onSelectTab = _a.onSelectTab, children = _a.children;
    return (React.createElement(NavList, { tabKey: tabKey, className: classNames(className, 'nav-pills'), itemClassName: itemClassName, onSelectTab: onSelectTab }, children));
};
export default PillList;
//# sourceMappingURL=PillList.js.map