import React from "react";
import TextArea from "./TextArea";
const FieldTextArea = ({ field = '', value, placeholder, required, readOnly, disabled, onChange }) => {
    const changeHandler = (ev) => {
        if (readOnly || !onChange) {
            return;
        }
        onChange({ field, value: ev.target.value });
    };
    return (React.createElement(TextArea, { value: value, onChange: changeHandler, placeholder: placeholder, required: required, readOnly: readOnly, disabled: disabled }));
};
export default FieldTextArea;
//# sourceMappingURL=FieldTextArea.js.map