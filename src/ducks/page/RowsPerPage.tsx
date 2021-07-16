import React, {ChangeEvent, memo} from 'react';
import {defaultRowsPerPageValues} from "./index";


export interface RowsPerPageProps {
    value: number,
    pageValues?: number[],
    onChange: (value: number) => void,
}

const RowsPerPage: React.FC<RowsPerPageProps> = ({
                                                     value,
                                                     pageValues = defaultRowsPerPageValues,
                                                     onChange
                                                 }) => {
    const changeHandler = (ev: ChangeEvent<HTMLSelectElement>) => onChange(Number(ev.target.value));

    return (
        <select value={String(value)} onChange={changeHandler} className="form-select form-select-sm">
            {pageValues.map(value => (
                <option key={String(value)} value={String(value)}>{value}</option>
            ))}
        </select>
    )
}
export default memo(RowsPerPage)
