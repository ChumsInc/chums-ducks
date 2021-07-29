import React, {MouseEvent} from "react";
import classNames from "classnames";
import {Tab} from "./index";


export interface TabItemProps extends Tab {
    className?: string | object,
    onSelect: (id?: string) => void,
    onClose?: (id?: string) => void,
}

const TabItem: React.FC<TabItemProps> = ({
                                             id,
                                             title,
                                             active,
                                             canClose,
                                             disabled,
                                             className,
                                             onSelect,
                                             onClose
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
                {title}
                {canClose && (<button type="button" aria-label="Close" onClick={onClickClose} className="btn-close"/>)}
            </a>
        </li>
    )
}
export default TabItem;
