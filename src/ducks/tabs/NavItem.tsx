import React, {MouseEvent} from "react";
import classNames from "classnames";
import {Tab} from "./index";


export interface NavItemProps extends Tab {
    className?: string | object,
    onSelect: (id?: string) => void,
    onClose?: (id?: string) => void,
}

const NavItem: React.FC<NavItemProps> = ({
                                             id,
                                             title,
                                             icon,
                                             active,
                                             canClose,
                                             disabled,
                                             className,
                                             onSelect,
                                             onClose,

                                         }) => {
    const clickHandler = (ev: MouseEvent) => {
        ev.preventDefault();
        ev.stopPropagation();
        if (disabled || active) {
            return;
        }
        onSelect(id);
    };

    const onClickClose = (ev: MouseEvent) => {
        ev.preventDefault();
        ev.stopPropagation();
        if (canClose && !!onClose) {
            onClose(id);
        }
    }

    return (
        <li className="nav-item">
            <a className={classNames('nav-link', className, {active, disabled})}
               tabIndex={disabled ? -1 : 0}
               href="#" onClick={clickHandler}>
                {!!icon && <span className={classNames('nav-item-icon me-1', icon)}/>}
                <span className="nav-item-text">{title}</span>
                {canClose && (
                    <span aria-label="Close" onClick={onClickClose} className="ms-2 bi-x-lg"/>
                )}
            </a>
        </li>
    )
}
export default React.memo(NavItem);
