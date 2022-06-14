import React from "react";
import { BootstrapButtonColor, BootstrapButtonSize } from "../types";
export interface ToggleButtonProps {
    id: string;
    type?: 'checkbox' | 'radio';
    checked: boolean;
    color?: BootstrapButtonColor;
    size?: BootstrapButtonSize;
    className?: string;
    onClick: () => void;
    disabled?: boolean;
    children?: React.ReactNode;
}
declare const ToggleButton: React.FC<ToggleButtonProps>;
export default ToggleButton;
