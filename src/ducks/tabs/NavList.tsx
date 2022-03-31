import React from 'react';
import {selectCurrentTab, selectTabList, tabRemovedAction, tabSelectedAction} from "./index";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import NavItem from "./NavItem";
import {noop} from "../../utils";
import styled from "styled-components";

export const StyledNavList = styled.ul`
    &.nav-tabs {
      .nav-item {
        .nav-link {
          .btn-close {
            width: 0.75rem;
            height: 0.75rem;
            margin-left: 0.25rem;
            line-height: 0.75rem;
            font-size: 0.75rem;
          }
        }
      }
    }
`;


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

    const tabClickHandler = (id: string) => {
        dispatch(tabSelectedAction(id, tabKey));
        onSelectTab(id);
    }

    const tabCloseHandler = (id: string) => dispatch(tabRemovedAction(id, tabKey));

    return (
        <StyledNavList className={classNames('nav', className)}>
            {list.map(tab => (
                <NavItem key={tab.id} id={tab.id} title={tab.title} className={itemClassName}
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

export default NavList;
