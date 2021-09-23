import React from "react";
import classNames from "classnames";
import NavRouterList , {NavRouterListProps} from "./NavRouterList";


const TabRouterList: React.FC<NavRouterListProps> = ({
                                                         tabKey,
                                                         className,
                                                         itemClassName,
                                                         children
                                                     }) => {
    return (
        <NavRouterList tabKey={tabKey} className={classNames(className, 'nav-tabs')} itemClassName={itemClassName}>
            {children}
        </NavRouterList>
    )
}

export default TabRouterList;
