"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TextArea_1 = __importDefault(require("./TextArea"));
const FieldTextArea = ({ field = '', value, placeholder, required, readOnly, disabled, onChange }) => {
    const changeHandler = (ev) => {
        if (readOnly || !onChange) {
            return;
        }
        onChange({ field, value: ev.target.value });
    };
    return (react_1.default.createElement(TextArea_1.default, { value: value, onChange: changeHandler, placeholder: placeholder, required: required, readOnly: readOnly, disabled: disabled }));
};
exports.default = FieldTextArea;
//# sourceMappingURL=FieldTextArea.js.map