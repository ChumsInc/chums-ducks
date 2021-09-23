import React from "react";
import classNames from "classnames";
import NavRouterList, {NavRouterListProps} from "./NavRouterList";


const PillRouterList: React.FC<NavRouterListProps> = ({
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
