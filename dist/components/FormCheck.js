"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const uuid_1 = require("uuid");
const FormCheck = ({ id, label, checked, onClick, inline = false, className = {}, type = "checkbox", disabled }) => {
    const inputId = id || (0, uuid_1.v4)();
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)("form-check", className, { "form-check-inline": inline }) },
        react_1.default.createElement("input", { type: type, className: "form-check-input", id: inputId, checked: checked, disabled: disabled, onChange: onClick }),
        react_1.default.createElement("label", { className: "form-check-label", htmlFor: inputId }, label)));
};
exports.default = FormCheck;
//# sourceMappingURL=FormCheck.js.map