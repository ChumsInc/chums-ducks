import React from "react";
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
                                             icon,
                                             active,
                                             canClose,
                                             disabled,
                                             className,
                                             onSelect,
                                             onClose,

                                         }) => {
    const clickHandler = () => {
        if (disabled || active) {
            return;
        }
        onSelect(id);
    };

    const onClickClose = () => {
        if (canClose && !!onClose) {
            onClose(id);
        }
    }

    return (
        <li className="nav-item">
            <button className={classNames('nav-link', className, {active, disabled})}
                    tabIndex={disabled ? -1 : 0} onClick={clickHandler}>
                {!!icon && <span className={classNames('nav-item-icon me-1', icon)}/>}
                <span className="nav-item-text">{title}</span>
                {canClose && (
                    <span aria-label="Close" onClick={onClickClose} className="ms-2 bi-x-lg"/>
                )}
            </button>
        </li>
    )
}
export default React.memo(TabItem);
