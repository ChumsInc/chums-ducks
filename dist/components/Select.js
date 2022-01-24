"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const Select = ({ bsSize, className, children, ...rest }) => {
    const selectClassName = {
        [`form-select-${bsSize}`]: !!bsSize
    };
    return (react_1.default.createElement("select", { className: (0, classnames_1.default)("form-select", selectClassName, className), ...rest }, children));
};
exports.default = Select;
//# sourceMappingURL=Select.js.map