import React from "react";
import {default as Progress, ProgressProps} from "./Progress";
import {default as ProgressBar} from "./ProgressBar";
import {BootstrapColor} from "../types";

export interface LoadingProgressProps extends ProgressProps {
    color?: BootstrapColor,
    value?: number,
    valueMin?: number,
    valueMax?: number,
    striped?: boolean,
    animated?: boolean,
    className?: string | object,
}

const LoadingProgress: React.FC<LoadingProgressProps> = ({
                                                             height,
                                                             className,
                                                             style,
                                                             color = 'primary',
                                                             value = 100,
                                                             valueMin = 0,
                                                             valueMax = 100,
                                                             striped,
                                                             animated,
                                                             children
                                                         }) => {
    return (
        <Progress height={height} className={className} style={style}>
            <ProgressBar color={color}
                         value={value} valueMin={valueMin} valueMax={valueMax}
                         striped={striped} animated={animated}/>
            {children}
        </Progress>
    )
}
export default LoadingProgress;
