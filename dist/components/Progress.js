"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const Progress = ({ height, className = '', style = {}, children }) => {
    if (height && !style.height) {
        style.height = height;
    }
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)('progress', className), style: style }, children));
};
exports.default = Progress;
//# sourceMappingURL=Progress.js.map