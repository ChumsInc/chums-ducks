import React from 'react';
import classNames from 'classnames';
import {v4 as uuid4} from 'uuid';

export interface FormCheckProps {
    id?: string,
    label: string,
    checked: boolean,
    onClick: () => void,
    inline?: boolean,
    className?: string | classNames.ArgumentArray,
    type: 'radio' | 'checkbox',
    disabled?: boolean,
}

const FormCheck: React.FC<FormCheckProps> = ({
                                                 id,
                                                 label,
                                                 checked,
                                                 onClick,
                                                 inline = false,
                                                 className = {},
                                                 type = "checkbox",
                                                 disabled
                                             }) => {
    const inputId = id || uuid4();

    return (
        <div className={classNames("form-check", className, {"form-check-inline": inline})}>
            <input type={type} className="form-check-input" id={inputId} checked={checked} disabled={disabled}
                   onChange={onClick}/>
            <label className="form-check-label" htmlFor={inputId}>
                {label}
            </label>
        </div>
    )
};

export default FormCheck;
