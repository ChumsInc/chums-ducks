import React from 'react';
import { BootstrapBGColor } from "../types";
export interface Props {
    color: BootstrapBGColor;
    pill?: boolean;
    text?: string;
    className?: string | object;
    description?: string;
    children?: React.ReactNode;
}
declare const Badge: React.FC<Props>;
export default Badge;
