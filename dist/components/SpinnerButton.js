"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
require("./SpinnerButton.css");
const SpinnerButton = ({ spinning = false, spinnerType = 'border', spinnerAfter = false, color = 'primary', size, className, children, disabled, ...rest }) => {
    const btnClassName = (0, classnames_1.default)(className, {
        btn: true,
        [`btn-${size}`]: !!size,
        [`btn-${color}`]: !!color,
    });
    const spinnerClassName = (0, classnames_1.default)({
        [`spinner-${spinnerType}`]: !!spinnerType,
        [`spinner-${spinnerType}-sm`]: !size || ['sm'].includes(size),
        "me-1": !spinnerAfter,
        "ms-1": spinnerAfter
    });
    return (react_1.default.createElement("button", { className: btnClassName, ...rest, disabled: spinning || disabled, ...rest },
        spinning && !spinnerAfter && react_1.default.createElement("span", { className: spinnerClassName, role: "status", "aria-hidden": "true" }),
        children,
        spinning && spinnerAfter && react_1.default.createElement("span", { className: spinnerClassName, role: "status", "aria-hidden": "true" })));
};
exports.default = SpinnerButton;
//# sourceMappingURL=SpinnerButton.js.map