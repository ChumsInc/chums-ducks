import React, { memo } from 'react';
import { defaultRowsPerPageValues } from "./index";
const RowsPerPage = ({ value, pageValues = defaultRowsPerPageValues, onChange }) => {
    const changeHandler = (ev) => onChange(Number(ev.target.value));
    return (React.createElement("select", { value: String(value), onChange: changeHandler, className: "form-select form-select-sm" }, pageValues.map(value => (React.createElement("option", { key: String(value), value: String(value) }, value)))));
};
export default memo(RowsPerPage);
//# sourceMappingURL=RowsPerPage.js.map