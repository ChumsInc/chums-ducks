import React from 'react';
import { tabRemovedAction, tabSelectedAction, selectedTabSelector, tabListSelector } from "./index";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import TabItem from "./TabItem";
import './TabList.css';
const TabList = ({ tabKey, className, children }) => {
    const dispatch = useDispatch();
    const list = useSelector(tabListSelector(tabKey));
    const selected = useSelector(selectedTabSelector(tabKey));
    const tabClickHandler = (id) => {
        console.log(id, tabKey);
        dispatch(tabSelectedAction(id, tabKey));
    };
    const tabCloseHandler = (id) => dispatch(tabRemovedAction(id, tabKey));
    return (React.createElement("ul", { className: classNames('nav nav-tabs', className) },
        list.map(tab => (React.createElement(TabItem, { key: tab.id, id: tab.id, title: tab.title, onSelect: () => tabClickHandler(tab.id), disabled: tab.disabled, active: tab.id === selected, canClose: tab.canClose, onClose: () => tabCloseHandler(tab.id) }))),
        children));
};
export default TabList;
//# sourceMappingURL=TabList.js.map