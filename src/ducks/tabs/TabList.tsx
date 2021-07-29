import React from 'react';
import {selectedTabSelector, tabListSelector, tabRemovedAction, tabSelectedAction} from "./index";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import TabItem from "./TabItem";
import './TabList.css';


export interface TabListProps {
    tabKey: string,
    className?: string | object,
    itemClassName?: string | object,
}

const TabList: React.FC<TabListProps> = ({
                                             tabKey,
                                             className = 'nav-tabs',
                                             itemClassName,
                                             children
                                         }) => {
    const dispatch = useDispatch();
    const list = useSelector(tabListSelector(tabKey))
    const selected = useSelector(selectedTabSelector(tabKey));

    const tabClickHandler = (id: string) => {
        console.log(id, tabKey);
        dispatch(tabSelectedAction(id, tabKey));
    }
    const tabCloseHandler = (id: string) => dispatch(tabRemovedAction(id, tabKey));

    return (
        <ul className={classNames('nav', className)}>
            {list.map(tab => (
                <TabItem key={tab.id} id={tab.id} title={tab.title} className={itemClassName}
                         onSelect={() => tabClickHandler(tab.id)}
                         disabled={tab.disabled}
                         active={tab.id === selected}
                         canClose={tab.canClose} onClose={() => tabCloseHandler(tab.id)}/>
            ))}
            {children}
        </ul>
    )
}

export default TabList;
