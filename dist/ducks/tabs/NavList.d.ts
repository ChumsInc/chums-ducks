import React from 'react';
import './TabList.css';
export interface NavListProps {
    tabKey: string;
    className?: string | object;
    itemClassName?: string | object;
}
declare const NavList: React.FC<NavListProps>;
export default NavList;
