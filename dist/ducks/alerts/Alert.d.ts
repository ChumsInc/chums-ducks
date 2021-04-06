import * as React from "react";
import { BasicAlertType } from './index';
export interface Props extends BasicAlertType {
    count?: number;
    onDismiss?: (args?: any) => void;
}
declare const Alert: React.FC<Props>;
export default Alert;
