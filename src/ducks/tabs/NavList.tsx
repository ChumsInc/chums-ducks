import React, {useEffect} from 'react';
import {selectCurrentTab, selectTabList, tabRemovedAction, tabSelectedAction} from "./index";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import NavItem from "./NavItem";
import './TabList.css';
import {noop} from "../../utils";


export interface NavListProps {
    tabKey: string,
    className?: string | object,
    itemClassName?: string | object,
    onSelectTab?: (id?: string) => void,
}

const NavList: React.FC<NavListProps> = ({
                                             tabKey,
                                             className,
                                             itemClassName,
                                             onSelectTab = noop,
                                             children
                                         }) => {
    const dispatch = useDispatch();
    const list = useSelector(selectTabList(tabKey))
    const selected = useSelector(selectCurrentTab(tabKey));

    useEffect(() => {

    }, [])

    const tabClickHandler = (id: string) => {
        dispatch(tabSelectedAction(id, tabKey));
        onSelectTab(id);
    }

    const tabCloseHandler = (id: string) => dispatch(tabRemovedAction(id, tabKey));

    return (
        <ul className={classNames('nav', className)}>
            {list.map(tab => (
                <NavItem key={tab.id} id={tab.id} title={tab.title} className={itemClassName}
                         icon={tab.icon}
                         onSelect={() => tabClickHandler(tab.id)}
                         disabled={tab.disabled}
                         active={tab.id === selected}
                         canClose={tab.canClose} onClose={() => tabCloseHandler(tab.id)}/>
            ))}
            {children}
        </ul>
    )
}

export default NavList;
