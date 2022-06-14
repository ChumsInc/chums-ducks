import React from "react";
import {BootstrapButtonColor, BootstrapButtonSize} from "../types";
import classNames from "classnames";

export interface ToggleButtonProps {
    id: string,
    type?: 'checkbox' | 'radio',
    checked: boolean,
    color?: BootstrapButtonColor,
    size?: BootstrapButtonSize,
    className?: string,
    onClick: () => void,
    disabled?: boolean,
    children?: React.ReactNode,
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
                                                       id,
                                                       type = 'checkbox',
                                                       checked,
                                                       color = 'primary',
                                                       size,
                                                       className,
                                                       onClick,
                                                       disabled,
                                                       children,
                                                   }) => {
    const btnClassName = classNames(className, {
        btn: true,
        [`btn-${size}`]: !!size,
        [`btn-outline-${color}`]: !!color,
    });
    return (
        <>
            <input type={type} className="btn-check" id={id} autoComplete="off"
                   disabled={disabled} onChange={onClick} checked={checked}/>
            <label htmlFor={id} className={btnClassName}>{children}</label>
        </>
    );
}

export default ToggleButton;
