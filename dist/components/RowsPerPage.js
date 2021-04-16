import React, { memo } from 'react';
export const defaultPageValues = [10, 25, 50, 100, 250, 500, 1000];
const RowsPerPage = ({ value, pageValues = defaultPageValues, onChange }) => {
    const changeHandler = (ev) => onChange(Number(ev.target.value));
    return (<select value={String(value)} onChange={changeHandler} className="form-select form-select-sm">
            {pageValues.map(value => (<option key={String(value)} value={String(value)}>{value}</option>))}
        </select>);
};
export default memo(RowsPerPage);
//# sourceMappingURL=RowsPerPage.js.map