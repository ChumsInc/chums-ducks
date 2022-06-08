"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const color_1 = require("../utils/color");
const Badge = ({ color, pill, text, className, colorCode, description, children }) => {
    const isLight = !!colorCode ? (0, color_1.isLightColor)(colorCode) : null;
    const _className = {
        'badge': true,
        'badge-pill': pill,
        [`bg-${color}`]: !!color,
        'text-light': !!colorCode && !isLight,
        'text-dark': !!colorCode && isLight,
    };
    const style = {};
    if (color === 'custom' && !!colorCode) {
        style.backgroundColor = colorCode;
    }
    return (react_1.default.createElement("span", { className: (0, classnames_1.default)(_className, className), style: style },
        text || children || '',
        !!description && (react_1.default.createElement("span", { className: "visually-hidden" }, description))));
};
exports.default = Badge;
//# sourceMappingURL=Badge.js.map