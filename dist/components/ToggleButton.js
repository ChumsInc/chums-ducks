"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const ToggleButton = ({ id, type = 'checkbox', checked, color = 'primary', size, className, onClick, disabled, children, }) => {
    const btnClassName = (0, classnames_1.default)(className, {
        btn: true,
        [`btn-${size}`]: !!size,
        [`btn-outline-${color}`]: !!color,
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("input", { type: type, className: "btn-check", id: id, autoComplete: "off", disabled: disabled, onChange: onClick, checked: checked }),
        react_1.default.createElement("label", { htmlFor: id, className: btnClassName }, children)));
};
exports.default = ToggleButton;
//# sourceMappingURL=ToggleButton.js.map