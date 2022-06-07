import React, {ReactNode} from "react";
import classNames from "classnames";

interface FormColumnProps {
    label: string|ReactNode,
    width?: number,
    className?: string,
    align?: 'start'|'end'|'center'|'baseline'|'stretch',
    children: ReactNode
}

const FormColumn: React.FC<FormColumnProps> = ({
                                                   label,
                                                   width = 8,
                                                   className,
                                                   align = 'baseline',
                                                   children
                                               }) => {
    const parentClassName = {
        [`align-items-${align}`]: !className?.includes('align-items') && !!align,
    }
    const labelClassName = {
        [`col-${12 - width}`]: !!width,
        'col-auto': !width,
        'form-label': true,
    }
    const containerClassName = {
        [`col-${width}`]: !!width,
        'col': !width,

    }
    return (
        <div className={classNames('row g-3', parentClassName, className)}>
            <label className={classNames(labelClassName)}>{label}</label>
            <div className={classNames(containerClassName)}>
                {children}
            </div>
        </div>
    )
}

export default FormColumn;
