import React from "react";
import Input from "./Input";
var FieldInput = function (_a) {
    var _b = _a.field, field = _b === void 0 ? '' : _b, value = _a.value, placeholder = _a.placeholder, required = _a.required, readOnly = _a.readOnly, disabled = _a.disabled, onChange = _a.onChange;
    var changeHandler = function (ev) {
        if (readOnly || !onChange) {
            return;
        }
        onChange({ field: field, value: ev.target.value });
    };
    return (React.createElement(Input, { type: "text", value: value, onChange: changeHandler, placeholder: placeholder, required: required, readOnly: readOnly, disabled: disabled }));
};
export default FieldInput;
//# sourceMappingURL=FieldInput.js.map