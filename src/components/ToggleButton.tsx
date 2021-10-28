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
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
                                                       id,
                                                       type = 'checkbox',
                                                       checked,
                                                       color = 'primary',
                                                       size,
                                                       className,
                                                       onClick,
                                                       children,
                                                   }) => {
    const btnClassName = classNames(className, {
        btn: true,
        [`btn-${size}`]: !!size,
        [`btn-outline-${color}`]: !!color,
    });
    return (
        <>
            <input type={type} className="btn-check" id={id} autoComplete="off" onChange={onClick} checked={checked}/>
            <label htmlFor={id} className={btnClassName}>{children}</label>
        </>
    );
}

export default ToggleButton;
