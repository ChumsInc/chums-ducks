import React from "react";
import {NavListProps, StyledNavList} from "./NavList";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentTab, selectTabList, tabRemovedAction, tabSelectedAction} from "./index";
import TabItem from "./TabItem";


const TabList: React.FC<NavListProps> = ({
                                             tabKey,
                                             className,
                                             itemClassName,
                                             onSelectTab,
                                             children
                                         }) => {
    const dispatch = useDispatch();
    const list = useSelector(selectTabList(tabKey))
    const selected = useSelector(selectCurrentTab(tabKey));

    const tabClickHandler = (id: string) => {
        dispatch(tabSelectedAction(id, tabKey));
        if (onSelectTab) {
            onSelectTab(id);
        }
    }

    const tabCloseHandler = (id: string) => dispatch(tabRemovedAction(id, tabKey));

    console.log(`TabList ${tabKey}: ${JSON.stringify(list.map(({id, disabled}) => ({id, disabled})))}`);
    return (
        <StyledNavList className={classNames('nav nav-tabs', className)}>
            {list.map(tab => (
                <TabItem key={tab.id} id={tab.id} title={tab.title} className={itemClassName}
                             icon={tab.icon}
                             onSelect={() => tabClickHandler(tab.id)}
                             disabled={tab.disabled}
                             active={tab.id === selected}
                             canClose={tab.canClose} onClose={() => tabCloseHandler(tab.id)}/>
            ))}
            {children}
        </StyledNavList>
    )
}

export default TabList;
