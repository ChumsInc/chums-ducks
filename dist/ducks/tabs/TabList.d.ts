import React from 'react';
import './TabList.css';
export interface TabListProps {
    tabKey: string;
    className?: string | object;
    itemClassName?: string | object;
}
declare const TabList: React.FC<TabListProps>;
export default TabList;
