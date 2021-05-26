import React from 'react';
import classNames from "classnames";
import TabItem from "./TabItem";
import './TabList.css';
export const TabList = ({ className, list, selected, onClick, onClose, children }) => {
    return (React.createElement("ul", { className: classNames('nav nav-tabs', className) },
        list.map(tab => (React.createElement(TabItem, { key: tab.id, id: tab.id, title: tab.title, onSelect: onClick, disabled: tab.disabled, active: tab.id === selected, canClose: tab.canClose, onClose: onClose }))),
        children));
};
export default TabList;
//# sourceMappingURL=TabList.js.map