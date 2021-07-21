import React from "react";
import { BasicAlert } from '../../types';
export interface Props extends BasicAlert {
    count?: number;
    onDismiss?: (args?: any) => void;
}
declare const Alert: React.FC<Props>;
export default Alert;
