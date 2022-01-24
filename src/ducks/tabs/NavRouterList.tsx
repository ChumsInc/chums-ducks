import React from 'react';
import {selectTabList, tabRemovedAction} from "./index";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import NavRouterLink from "./NavRouterLink";

import styled from "styled-components";

const StyledNavList = styled.ul`
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

export interface NavRouterListProps {
    tabKey: string,
    className?: string | object,
    itemClassName?: string | object,
}

const NavRouterList: React.FC<NavRouterListProps> = ({
                                                         tabKey,
                                                         className,
                                                         itemClassName,
                                                         children
                                                     }) => {
    const dispatch = useDispatch();
    const list = useSelector(selectTabList(tabKey));

    const tabCloseHandler = (id: string) => dispatch(tabRemovedAction(id, tabKey));
    return (
        <StyledNavList className={classNames('nav', className)}>
            {list.map(tab => (
                <NavRouterLink to={tab.to || ''} key={tab.id} id={tab.id} title={tab.title} className={itemClassName}
                               icon={tab.icon}
                               disabled={tab.disabled}
                               canClose={tab.canClose} onClose={() => tabCloseHandler(tab.id)}/>
            ))}
            {children}
        </StyledNavList>
    )
}

export default NavRouterList;
