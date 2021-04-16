import React from 'react';
import { BootstrapBGColor, BootstrapTextColor } from "../types";
export interface Props {
    color?: BootstrapBGColor;
    textColor?: BootstrapTextColor;
    pill?: boolean;
    text?: string;
    className?: string | object;
    description?: string;
}
declare const Badge: React.FC<Props>;
export default Badge;
