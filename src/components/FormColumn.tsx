import React, {ReactNode} from "react";
import classNames from "classnames";

interface FormColumnProps {
    label: string,
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
    const labelClassName = {
        [`col-${12 - width}`]: !!width,
        'col-auto': !width,
        'form-label': true,
    }
    const containerClassName = {
        [`col-${width}`]: !!width,
        'col': !width,
        [`align-items-${align}`]: !className?.includes('align-items') && !!align,
    }
    return (
        <div className={classNames('row g-3', className)}>
            <label className={classNames(labelClassName)}>{label}</label>
            <div className={classNames(containerClassName)}>
                {children}
            </div>
        </div>
    )
}

export default FormColumn;
