import React from 'react';
import {selectedTabSelector, tabListSelector, tabRemovedAction} from "./index";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import './TabList.css';
import NavRouterLink from "./NavRouterLink";


export interface NavRouterListProps {
    tabKey: string,
    className?: string | object,
    itemClassName?: string | object,
    onSelectTab?: (id?: string) => void,
}

const NavList: React.FC<NavRouterListProps> = ({
                                                   tabKey,
                                                   className,
                                                   itemClassName,
                                                   children
                                               }) => {
    const dispatch = useDispatch();
    const list = useSelector(tabListSelector(tabKey));
    const selected = useSelector(selectedTabSelector(tabKey));

    const tabCloseHandler = (id: string) => dispatch(tabRemovedAction(id, tabKey));
    return (
        <ul className={classNames('nav', className)}>
            {list.map(tab => (
                <NavRouterLink to={tab.to || ''} key={tab.id} id={tab.id} title={tab.title} className={itemClassName}
                               disabled={tab.disabled}
                               active={tab.id === selected}
                               canClose={tab.canClose} onClose={() => tabCloseHandler(tab.id)}/>
            ))}
            {children}
        </ul>
    )
}

export default NavList;
