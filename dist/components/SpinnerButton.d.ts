import React, { ButtonHTMLAttributes } from "react";
import { BootstrapButtonSize, BootstrapColor } from "../types";
export interface SpinnerButtonProps extends ButtonHTMLAttributes<any> {
    spinning?: boolean;
    spinnerType?: 'border' | 'grow';
    spinnerAfter?: boolean;
    color?: BootstrapColor;
    size?: BootstrapButtonSize;
}
declare const SpinnerButton: React.FC<SpinnerButtonProps>;
export default SpinnerButton;
