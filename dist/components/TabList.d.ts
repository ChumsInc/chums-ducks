import React from 'react';
import { Tab } from "../types";
import './TabList.css';
export interface TabListProps {
    className?: string;
    list: Tab[];
    selected: string;
    onClick: (id: string) => void;
    onClose?: (id: string) => void;
}
export declare const TabList: React.FC<TabListProps>;
export default TabList;
