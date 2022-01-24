"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const Spinner = ({ type, bsSize, role = 'status', hiddenLabel, color, className, ...rest }) => {
    const spinnerClassName = {
        'spinner-border': type === 'border',
        'spinner-grow': type === 'grow',
        [`spinner-border-${bsSize}`]: !!bsSize,
        [`text-${color}`]: !!color,
    };
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)(spinnerClassName, className), role: role, ...rest }, !!hiddenLabel && (react_1.default.createElement("span", { className: "visually-hidden" }, hiddenLabel))));
};
exports.default = Spinner;
//# sourceMappingURL=Spinner.js.map