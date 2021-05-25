import React from 'react';
import classNames from "classnames";
import TabItem from "./TabItem";
import {Tab} from "../ducks/tabs";


export interface TabListProps {
    className: string,
    list: Tab[],
    selected: string,
    onClick: (id: string) => void,
}

export const TabList: React.FC<TabListProps> = ({className, list, selected, onClick, children}) => {
    return (
        <ul className={classNames('nav nav-tabs', className)}>
            {list.map(tab => (
                <TabItem key={tab.id} id={tab.id} title={tab.title} onSelect={onClick} disabled={tab.disabled}
                         active={tab.id === selected} canClose={tab.canClose}/>
            ))}
            {children}
        </ul>
    )
}

export default TabList;
