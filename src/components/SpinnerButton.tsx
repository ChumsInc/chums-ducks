import React, {ButtonHTMLAttributes} from "react";
import {BootstrapButtonColor, BootstrapButtonSize} from "../types";
import classNames from "classnames";
// import './SpinnerButton.css';
import styled from 'styled-components';

const Spinner = styled.span`
    height: 1em;
    width: 1em;   
`;

export interface SpinnerButtonProps extends ButtonHTMLAttributes<any> {
    spinning?: boolean,
    spinnerType?: 'border' | 'grow',
    spinnerAfter?: boolean,
    color?: BootstrapButtonColor,
    size?: BootstrapButtonSize,
}

const SpinnerButton: React.FC<SpinnerButtonProps> = ({
                                                         spinning = false,
                                                         spinnerType = 'border',
                                                         spinnerAfter = false,
                                                         color = 'primary',
                                                         size,
                                                         className,
                                                         children,
                                                         disabled,
                                                         ...rest
                                                     }) => {
    const btnClassName = classNames(className, {
        btn: true,
        [`btn-${size}`]: !!size,
        [`btn-${color}`]: !!color,
    });
    const spinnerClassName = classNames({
        [`spinner-${spinnerType}`]: !!spinnerType,
        [`spinner-${spinnerType}-sm`]: !size || ['sm'].includes(size),
        "me-1": !spinnerAfter,
        "ms-1": spinnerAfter,
        "invisible": !spinning,
    });

    return (
        <button className={btnClassName} disabled={spinning || disabled} {...rest}>
            {!spinnerAfter && <Spinner className={spinnerClassName} role="status" aria-hidden="true"/>}
            {children}
            {spinnerAfter && <Spinner className={spinnerClassName} role="status" aria-hidden="true"/>}
        </button>
    );
}

export default SpinnerButton;
