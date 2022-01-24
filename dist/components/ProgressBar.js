"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const ProgressBar = ({ color = 'primary', value = 100, valueMin = 0, valueMax = 100, striped, animated, className = '', style = {}, children, }) => {
    let width = 1 - ((valueMax - value) / (valueMax - valueMin));
    if (width < 0) {
        width = 0;
    }
    else if (width > 1) {
        width = 1;
    }
    const progressBarClassName = {
        'progress-bar': true,
        'progress-bar-striped': striped || animated,
        'progress-bar-animated': animated,
    };
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)(`bg-${color}`, { ...progressBarClassName }, className), role: "progressbar", style: { width: `${width * 100}%`, ...style } }, children || null));
};
exports.default = ProgressBar;
//# sourceMappingURL=ProgressBar.js.map