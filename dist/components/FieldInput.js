import React from "react";
import Input from "./Input";
const FieldInput = ({ field = '', value, placeholder, required, readOnly, disabled, onChange }) => {
    const changeHandler = (ev) => {
        if (readOnly || !onChange) {
            return;
        }
        onChange({ field, value: ev.target.value });
    };
    return (React.createElement(Input, { type: "text", value: value, onChange: changeHandler, placeholder: placeholder, required: required, readOnly: readOnly, disabled: disabled }));
};
export default FieldInput;
//# sourceMappingURL=FieldInput.js.map