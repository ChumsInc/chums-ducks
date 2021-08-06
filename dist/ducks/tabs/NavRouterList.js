import React from 'react';
import { tabListSelector, tabRemovedAction } from "./index";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import './TabList.css';
import NavRouterLink from "./NavRouterLink";
var NavList = function (_a) {
    var tabKey = _a.tabKey, className = _a.className, itemClassName = _a.itemClassName, children = _a.children;
    var dispatch = useDispatch();
    var list = useSelector(tabListSelector(tabKey));
    var tabCloseHandler = function (id) { return dispatch(tabRemovedAction(id, tabKey)); };
    return (React.createElement("ul", { className: classNames('nav', className) },
        list.map(function (tab) { return (React.createElement(NavRouterLink, { to: tab.to || '', key: tab.id, id: tab.id, title: tab.title, className: itemClassName, disabled: tab.disabled, canClose: tab.canClose, onClose: function () { return tabCloseHandler(tab.id); } })); }),
        children));
};
export default NavList;
//# sourceMappingURL=NavRouterList.js.map