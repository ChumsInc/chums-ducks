import React, { ButtonHTMLAttributes } from "react";
import { BootstrapButtonColor, BootstrapButtonSize } from "../types";
import './SpinnerButton.css';
export interface SpinnerButtonProps extends ButtonHTMLAttributes<any> {
    spinning?: boolean;
    spinnerType?: 'border' | 'grow';
    spinnerAfter?: boolean;
    color?: BootstrapButtonColor;
    size?: BootstrapButtonSize;
}
declare const SpinnerButton: React.FC<SpinnerButtonProps>;
export default SpinnerButton;
