import React from "react";
import {default as NavList, NavListProps} from "./NavList";
import classNames from "classnames";


const TabList: React.FC<NavListProps> = ({tabKey, className, itemClassName, children}) => {
    return (
        <NavList tabKey={tabKey} className={classNames(className, 'nav-tabs')} itemClassName={itemClassName}>
            {children}
        </NavList>
    )
}

export default TabList;
