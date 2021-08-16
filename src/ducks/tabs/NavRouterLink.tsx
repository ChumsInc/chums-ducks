import React, {MouseEvent} from "react";
import classNames from "classnames";
import {Tab} from "./index";
import {NavLink} from 'react-router-dom';


export interface NavRouterLinkProps extends Tab {
    to: string | object | ((any: any) => string | object),
    className?: string | object,
    onClose?: (id?: string) => void,
}

const NavRouterLink: React.FC<NavRouterLinkProps> = ({
                                                         to,
                                                         id,
                                                         title,
                                                         icon,
                                                         canClose,
                                                         disabled,
                                                         className,
                                                         onClose
                                                     }) => {
    const onClickClose = (ev: MouseEvent) => {
        ev.preventDefault();
        ev.stopPropagation();
        if (canClose && !!onClose) {
            onClose(id);
        }
    }

    return (
        <li className="nav-item">
            <NavLink to={to} activeClassName="active"
                     className={classNames('nav-link', className, {disabled})} tabIndex={disabled ? -1 : 0}>
                {!!icon && <span className={classNames('nav-item-icon', icon)}/>}
                {title}
                {canClose && (
                    <span aria-label="Close" onClick={onClickClose} className="ms-2 bi-x-lg"/>
                )}
            </NavLink>
        </li>
    )
}
export default NavRouterLink;
