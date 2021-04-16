import React from "react";
import { BasicAlert } from './index';
export interface Props extends BasicAlert {
    count?: number;
    onDismiss?: (args?: any) => void;
}
declare const Alert: React.FC<Props>;
export default Alert;
