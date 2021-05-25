import React from 'react';
import {onTabSelected, selectedTabSelector, tabListSelector} from "./index";
import {useDispatch, useSelector} from "react-redux";
import TabList from "../../components/TabList";


export interface TabListProps {
    className: string,
}

export const ConnectedTabList: React.FC<TabListProps> = ({className, children}) => {
    const dispatch = useDispatch();
    const list = useSelector(tabListSelector)
    const selected = useSelector(selectedTabSelector);
    const onClick = (id: string) => {
        dispatch(onTabSelected(id));
    };

    return (
        <TabList className={className} list={list} selected={selected} onClick={onClick} children={children}/>
    )
}

export default ConnectedTabList;
