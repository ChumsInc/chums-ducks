import React from 'react';
import classNames from "classnames";

export interface StatusButtonGroupProps {
    checked: boolean,
    onChange: (checked: boolean) => void,
}

const StatusButtonGroup: React.FC<StatusButtonGroupProps> = ({checked, onChange}) => {
    const btnEnabled = {
        'btn-success': checked,
        'btn-outline-success': !checked,
    };
    const btnDisabled = {
        'btn-danger': !checked,
        'btn-outline-danger': checked,
    };

    return (
        <div className="btn-group btn-group-sm" role="group">
            <button type="button" onClick={() => onChange(true)} className={classNames('btn btn-sm', btnEnabled)}>Enabled</button>
            <button type="button" onClick={() => onChange(false)} className={classNames('btn btn-sm', btnDisabled)}>Disabled</button>
        </div>
    )
};

export default StatusButtonGroup;
