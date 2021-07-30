import React from "react";
import { ProgressProps } from "./Progress";
import { BootstrapColor } from "../types";
export interface LoadingProgressProps extends ProgressProps {
    color?: BootstrapColor;
    value?: number;
    valueMin?: number;
    valueMax?: number;
    striped?: boolean;
    animated?: boolean;
    className?: string | object;
}
declare const LoadingProgress: React.FC<LoadingProgressProps>;
export default LoadingProgress;
