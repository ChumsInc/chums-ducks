import React from 'react';
import { selectedTabSelector, tabListSelector, tabRemovedAction, tabSelectedAction } from "./index";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import TabItem from "./TabItem";
import './TabList.css';
var TabList = function (_a) {
    var tabKey = _a.tabKey, _b = _a.className, className = _b === void 0 ? 'nav-tabs' : _b, itemClassName = _a.itemClassName, children = _a.children;
    var dispatch = useDispatch();
    var list = useSelector(tabListSelector(tabKey));
    var selected = useSelector(selectedTabSelector(tabKey));
    var tabClickHandler = function (id) {
        console.log(id, tabKey);
        dispatch(tabSelectedAction(id, tabKey));
    };
    var tabCloseHandler = function (id) { return dispatch(tabRemovedAction(id, tabKey)); };
    return (React.createElement("ul", { className: classNames('nav', className) },
        list.map(function (tab) { return (React.createElement(TabItem, { key: tab.id, id: tab.id, title: tab.title, className: itemClassName, onSelect: function () { return tabClickHandler(tab.id); }, disabled: tab.disabled, active: tab.id === selected, canClose: tab.canClose, onClose: function () { return tabCloseHandler(tab.id); } })); }),
        children));
};
export default TabList;
//# sourceMappingURL=TabList.js.map