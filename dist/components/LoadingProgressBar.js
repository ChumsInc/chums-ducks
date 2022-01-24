"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Progress_1 = __importDefault(require("./Progress"));
const ProgressBar_1 = __importDefault(require("./ProgressBar"));
const LoadingProgress = ({ height, className, style, color = 'primary', value = 100, valueMin = 0, valueMax = 100, striped, animated, children }) => {
    return (react_1.default.createElement(Progress_1.default, { height: height, className: className, style: style },
        react_1.default.createElement(ProgressBar_1.default, { color: color, value: value, valueMin: valueMin, valueMax: valueMax, striped: striped, animated: animated }),
        children));
};
exports.default = LoadingProgress;
//# sourceMappingURL=LoadingProgressBar.js.map