"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Input_1 = __importDefault(require("./Input"));
const FieldInput = ({ field = '', value, placeholder, required, readOnly, disabled, onChange }) => {
    const changeHandler = (ev) => {
        if (readOnly || !onChange) {
            return;
        }
        onChange({ field, value: ev.target.value });
    };
    return (react_1.default.createElement(Input_1.default, { type: "text", value: value, onChange: changeHandler, placeholder: placeholder, required: required, readOnly: readOnly, disabled: disabled }));
};
exports.default = FieldInput;
//# sourceMappingURL=FieldInput.js.map