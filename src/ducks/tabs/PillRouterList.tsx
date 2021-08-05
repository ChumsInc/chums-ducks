import React from "react";
import {NavListProps} from "./NavList";
import classNames from "classnames";
import NavRouterList from "./NavRouterList";


const PillRouterList: React.FC<NavListProps> = ({
                                                    tabKey,
                                                    className,
                                                    itemClassName,
                                                    children
                                                }) => {
    return (
        <NavRouterList tabKey={tabKey} className={classNames(className, 'nav-pills')} itemClassName={itemClassName}>
            {children}
        </NavRouterList>
    )
}

export default PillRouterList;
