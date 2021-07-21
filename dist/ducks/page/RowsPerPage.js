import React, { memo } from 'react';
import { defaultRowsPerPageValues } from "./index";
var RowsPerPage = function (_a) {
    var value = _a.value, _b = _a.pageValues, pageValues = _b === void 0 ? defaultRowsPerPageValues : _b, onChange = _a.onChange;
    var changeHandler = function (ev) { return onChange(Number(ev.target.value)); };
    return (React.createElement("select", { value: String(value), onChange: changeHandler, className: "form-select form-select-sm" }, pageValues.map(function (value) { return (React.createElement("option", { key: String(value), value: String(value) }, value)); })));
};
export default memo(RowsPerPage);
//# sourceMappingURL=RowsPerPage.js.map