"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const FormColumn = ({ label, width = 8, className, align = 'baseline', children }) => {
    const labelClassName = {
        [`col-${12 - width}`]: !!width,
        'col-auto': !width,
        'form-label': true,
        [`align-items-${align}`]: !className?.includes('align-items') && !!align,
    };
    const containerClassName = {
        [`col-${width}`]: !!width,
        'col': !width,
    };
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)('row g-3', className) },
        react_1.default.createElement("label", { className: (0, classnames_1.default)(labelClassName) }, label),
        react_1.default.createElement("div", { className: (0, classnames_1.default)(containerClassName) }, children)));
};
exports.default = FormColumn;
//# sourceMappingURL=FormColumn.js.map