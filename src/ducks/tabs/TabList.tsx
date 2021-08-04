import React from "react";
import {default as NavList, NavListProps} from "./NavList";
import classNames from "classnames";


const TabList: React.FC<NavListProps> = ({
                                             tabKey,
                                             className,
                                             itemClassName,
                                             onSelectTab,
                                             children
                                         }) => {
    return (
        <NavList tabKey={tabKey} className={classNames(className, 'nav-tabs')} itemClassName={itemClassName}
                 onSelectTab={onSelectTab}>
            {children}
        </NavList>
    )
}

export default TabList;
