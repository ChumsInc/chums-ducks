import React from 'react';
import './TabList.css';
export interface NavRouterListProps {
    tabKey: string;
    className?: string | object;
    itemClassName?: string | object;
}
declare const NavRouterList: React.FC<NavRouterListProps>;
export default NavRouterList;
