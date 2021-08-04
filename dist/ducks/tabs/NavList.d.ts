import React from 'react';
import './TabList.css';
export interface NavListProps {
    tabKey: string;
    className?: string | object;
    itemClassName?: string | object;
    onSelectTab?: (id?: string) => void;
}
declare const NavList: React.FC<NavListProps>;
export default NavList;
